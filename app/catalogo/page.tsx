import { getProducts } from '../../lib/shopify';
import Link from 'next/link';

export default async function CatalogoPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <h1 className="text-4xl font-black mb-10 text-gray-900 dark:text-white">Todos os Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const price = product.priceRange.minVariantPrice.amount;
          const image = product.images.edges[0]?.node?.url;
          return (
            <Link key={product.id} href={`/product/${product.handle}`} className="group block">
              <div className="aspect-square bg-gray-100 dark:bg-gray-900 rounded-xl mb-4 overflow-hidden">
                {image && <img src={image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />}
              </div>
              <h2 className="font-bold text-gray-900 dark:text-white">{product.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">R$ {price}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}