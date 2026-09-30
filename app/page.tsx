// app/page.tsx
import Link from 'next/link';
import { getProducts } from '../lib/shopify';
import { ShopifyProduct } from '../lib/shopify/types';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Hero Banner (Área de Destaque) */}
      <section className="relative w-full bg-black text-white px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Um brilho de fundo opcional para dar um ar tech/premium */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            O futuro do <br className="hidden md:block"/> e-commerce.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experimente a velocidade extrema de uma loja headless moderna. Construída para performance, otimizada para conversão.
          </p>
          <a 
            href="#produtos" 
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Explorar Coleção
          </a>
        </div>
      </section>

      {/* Seção de Produtos (Vitrine) */}
      <section id="produtos" className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Destaques</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: ShopifyProduct) => {
            const price = product.priceRange.minVariantPrice.amount;
            const currency = product.priceRange.minVariantPrice.currencyCode;
            const image = product.images.edges[0]?.node;

            return (
              <Link 
                href={`/product/${product.handle}`} 
                key={product.id} 
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Imagem do Produto */}
                <div className="aspect-square w-full bg-gray-50 relative overflow-hidden">
                  {image && (
                    <img
                      src={image.url}
                      alt={image.altText || product.title}
                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  )}
                </div>
                
                {/* Informações do Produto */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-black text-xl text-black">
                      {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: currency === 'BRL' ? 'BRL' : 'USD' })}
                    </p>
                    <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver mais
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      
    </main>
  );
}