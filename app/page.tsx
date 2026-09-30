// app/page.tsx
import Link from 'next/link';
import { getProducts } from '../lib/shopify';
import { ShopifyProduct } from '../lib/shopify/types';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Catálogo Nexus</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: ShopifyProduct) => {
          const price = product.priceRange.minVariantPrice.amount;
          const currency = product.priceRange.minVariantPrice.currencyCode;
          const image = product.images.edges[0]?.node;

          return (
            <Link 
              href={`/product/${product.handle}`} 
              key={product.id} 
              className="group border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white block"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 mb-4 relative">
                {image && (
                  <img
                    src={image.url}
                    alt={image.altText || product.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
              <p className="mt-2 font-bold text-lg text-black">
                {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: currency === 'BRL' ? 'BRL' : 'USD' })}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}