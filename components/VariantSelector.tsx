// components/VariantSelector.tsx
"use client";

import { useState } from 'react';
import { createCart, addToCart } from '../lib/shopify';
import { useCartStore } from '../store/cartStore';

type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string; };
};

export default function VariantSelector({ variants }: { variants: Variant[] }) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  
  // Trazemos as ações do Zustand
  const { openCart, setCartCredentials } = useCartStore();

  const hasOnlyDefaultVariant = variants.length === 1 && variants[0].title === 'Default Title';

  // Função central para lidar com a Shopify
  async function handleCartAction(action: 'add' | 'buy') {
    if (action === 'buy') setIsBuyingNow(true);
    if (action === 'add') setIsAddingToCart(true);

    try {
      let cartId = localStorage.getItem('nexus_cart_id');
      let checkoutUrl = localStorage.getItem('nexus_checkout_url');

      if (!cartId) {
        const newCart = await createCart();
        cartId = newCart.id;
        checkoutUrl = newCart.checkoutUrl;
        localStorage.setItem('nexus_cart_id', cartId);
        if (checkoutUrl) localStorage.setItem('nexus_checkout_url', checkoutUrl);
      }

      const updatedCart = await addToCart(cartId, selectedVariant.id);
      
      // Atualiza o Zustand com os dados do carrinho
      if (updatedCart.checkoutUrl) {
        setCartCredentials(cartId, updatedCart.checkoutUrl);
      }

      if (action === 'buy') {
        // Vai direto para o checkout
        window.location.href = updatedCart.checkoutUrl || checkoutUrl!;
      } else {
        // Apenas abre a gaveta lateral
        openCart();
        setIsAddingToCart(false);
      }
      
    } catch (error) {
      console.error('Erro na ação do carrinho:', error);
      alert('Ocorreu um erro. Tente novamente.');
      setIsAddingToCart(false);
      setIsBuyingNow(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {!hasOnlyDefaultVariant && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Opções disponíveis</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                disabled={!variant.availableForSale || isAddingToCart || isBuyingNow}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition-all
                  ${selectedVariant?.id === variant.id ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-900 hover:border-gray-400'} 
                  ${!variant.availableForSale ? 'opacity-40 cursor-not-allowed line-through' : ''}
                `}
              >
                {variant.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <p className="text-sm text-gray-500 mb-1">Preço da opção selecionada:</p>
        <p className="text-2xl font-bold text-gray-900">
          {Number(selectedVariant?.price.amount).toLocaleString('pt-BR', { style: 'currency', currency: selectedVariant?.price.currencyCode })}
        </p>
      </div>

      {/* Os dois botões lado a lado */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={() => handleCartAction('add')}
          disabled={!selectedVariant?.availableForSale || isAddingToCart || isBuyingNow}
          className="flex-1 bg-white text-black border-2 border-black py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          {isAddingToCart ? 'A adicionar...' : 'Adicionar ao Carrinho'}
        </button>

        <button 
          onClick={() => handleCartAction('buy')}
          disabled={!selectedVariant?.availableForSale || isAddingToCart || isBuyingNow}
          className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isBuyingNow ? 'A processar...' : 'Comprar Agora'}
        </button>
      </div>
    </div>
  );
}