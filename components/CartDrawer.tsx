// components/CartDrawer.tsx
"use client";

import { useEffect, useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { getCart, updateCartQuantity, removeFromCart } from '../lib/shopify';
import { ShopifyCart } from '../lib/shopify/types';

export default function CartDrawer() {
  const { isOpen, closeCart } = useCartStore();
  const [cartData, setCartData] = useState<ShopifyCart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // Novo estado de loading para as ações

  // Função para recarregar o carrinho
  async function refreshCart() {
    const cartId = localStorage.getItem('nexus_cart_id');
    if (cartId) {
      const data = await getCart(cartId);
      setCartData(data);
    }
  }

  useEffect(() => {
    let isMounted = true; // Controla se o componente ainda está na tela

    async function loadCartData() {
      if (!isOpen) return;
      
      setIsLoading(true);
      await refreshCart();
      if (isMounted) setIsLoading(false);
    }

    loadCartData();

    return () => {
      isMounted = false; // Evita memory leaks (atualizar estado de componente desmontado)
    };
  }, [isOpen]);

  // Função para alterar quantidade
  async function handleUpdateQuantity(lineId: string, currentQuantity: number, change: number) {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) return; // Evita quantidade zero
    
    setIsUpdating(true);
    const cartId = localStorage.getItem('nexus_cart_id');
    if (cartId) {
      await updateCartQuantity(cartId, lineId, newQuantity);
      await refreshCart();
    }
    setIsUpdating(false);
  }

  // Função para remover item
  async function handleRemove(lineId: string) {
    setIsUpdating(true);
    const cartId = localStorage.getItem('nexus_cart_id');
    if (cartId) {
      await removeFromCart(cartId, lineId);
      await refreshCart();
    }
    setIsUpdating(false);
  }

  if (!isOpen) return null;

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={closeCart} />

      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl flex flex-col transform transition-transform duration-300">
        
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold">Seu Carrinho</h2>
          <button onClick={closeCart} className="p-2 text-gray-400 hover:text-black transition-colors">
            ✕ Fechar
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto p-6 transition-opacity ${isUpdating ? 'opacity-50' : 'opacity-100'}`}>
          {isLoading ? (
            <p className="text-center text-gray-500 mt-10">Carregando itens...</p>
          ) : cartData?.lines?.edges && cartData.lines.edges.length > 0 ? (
            <div className="flex flex-col gap-6">
              {cartData.lines.edges.map(({ node }) => {
                const item = node.merchandise;
                return (
                  <div key={node.id} className="flex gap-4 border-b pb-4 last:border-0">
                    <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      {item.image && (
                        <img src={item.image.url} alt={item.image.altText || item.product.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900 line-clamp-2">{item.product.title}</h3>
                          {/* Botão de Remover */}
                          <button 
                            onClick={() => handleRemove(node.id)}
                            disabled={isUpdating}
                            className="text-xs text-red-500 hover:text-red-700 underline ml-2 whitespace-nowrap"
                          >
                            Remover
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.title !== 'Default Title' ? item.title : ''}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        {/* Controles de Quantidade */}
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => handleUpdateQuantity(node.id, node.quantity, -1)}
                            disabled={node.quantity <= 1 || isUpdating}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-sm font-medium border-x">{node.quantity}</span>
                          <button 
                            onClick={() => handleUpdateQuantity(node.id, node.quantity, 1)}
                            disabled={isUpdating}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>
                        
                        <p className="font-bold">
                          {Number(item.price.amount).toLocaleString('pt-BR', { style: 'currency', currency: item.price.currencyCode })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="mb-4">Seu carrinho está vazio.</p>
              <button onClick={closeCart} className="text-blue-600 underline">Continuar comprando</button>
            </div>
          )}
        </div>

        {cartData?.cost && cartData.lines.edges.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-gray-900">Subtotal</span>
              <span className="font-bold text-lg">
                {Number(cartData.cost.subtotalAmount.amount).toLocaleString('pt-BR', { style: 'currency', currency: cartData.cost.subtotalAmount.currencyCode })}
              </span>
            </div>
            <a 
              href={cartData.checkoutUrl}
              className={`block w-full text-center bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors ${isUpdating ? 'opacity-50 pointer-events-none' : ''}`}
            >
              Finalizar Compra
            </a>
          </div>
        )}
      </div>
    </div>
  );
}