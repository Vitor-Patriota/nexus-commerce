
import Link from 'next/link';
import { getProducts } from '../lib/shopify';
import { ShopifyProduct } from '../lib/shopify/types';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col min-h-screen">
      
      
      <section className="relative w-full px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white dark:from-black/30 dark:via-black/80 dark:to-[#0a0a0a]" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
            O futuro do <br className="hidden md:block"/> e-commerce.
          </h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experimente a velocidade extrema de uma loja headless moderna. Construída para performance, otimizada para conversão.
          </p>
          <a 
            href="#produtos" 
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Explorar Coleção
          </a>
        </div>
      </section>

      
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center mb-4 text-gray-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Frete Expresso</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Entregas ultra rápidas para Vitória da Conquista e todo o Brasil.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center mb-4 text-gray-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Pagamento Seguro</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Transações 100% criptografadas com tecnologia de ponta.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center mb-4 text-gray-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Suporte Especializado</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Atendimento premium direto pelo nosso canal oficial.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-10">Explorar Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/catalogo" className="group relative h-[350px] rounded-2xl overflow-hidden flex items-end p-8 shadow-sm">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Tecnologia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <h3 className="relative z-10 text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">Tecnologia &rarr;</h3>
          </Link>
          <Link href="/catalogo" className="group relative h-[350px] rounded-2xl overflow-hidden flex items-end p-8 shadow-sm">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Áudio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <h3 className="relative z-10 text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">Áudio Premium &rarr;</h3>
          </Link>
          <Link href="/catalogo" className="group relative h-[350px] rounded-2xl overflow-hidden flex items-end p-8 shadow-sm">
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop" alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <h3 className="relative z-10 text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">Lifestyle &rarr;</h3>
          </Link>
        </div>
      </section>

   
      <section id="produtos" className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Lançamentos</h2>
          <Link href="/catalogo" className="text-sm font-medium text-blue-600 hover:text-blue-500">Ver catálogo completo &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {}
          {products.slice(0, 4).map((product: ShopifyProduct) => {
            const price = product.priceRange.minVariantPrice.amount;
            const currency = product.priceRange.minVariantPrice.currencyCode;
            const image = product.images.edges[0]?.node;

            return (
              <Link 
                href={`/product/${product.handle}`} 
                key={product.id} 
                className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="aspect-square w-full bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
                  {image && (
                    <img
                      src={image.url}
                      alt={image.altText || product.title}
                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-black text-xl text-black dark:text-white">
                      {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: currency === 'BRL' ? 'BRL' : 'USD' })}
                    </p>
                    <span className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver mais
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      
      <section className="bg-black text-white dark:bg-gray-900 border-t border-gray-900 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Faça parte do clube.</h2>
            <p className="text-gray-400 text-lg">Inscreva-se para receber novidades, ofertas exclusivas e atualizações sobre o nosso ecossistema.</p>
          </div>
          <form className="w-full md:max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="O seu melhor e-mail" 
              className="flex-1 bg-white/10 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
              Assinar
            </button>
          </form>
        </div>
      </section>
      
    </main>
  );
}