// app/product/[handle]/page.tsx
import { getProduct } from '../../../lib/shopify';
import { notFound } from 'next/navigation';
import VariantSelector from '../../../components/VariantSelector'; 

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.handle);

  if (!product) {
    return notFound();
  }

  const mainImage = product.images.edges[0]?.node;

  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
          {mainImage && (
            <img 
              src={mainImage.url} 
              alt={mainImage.altText || product.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          
          <p className="text-2xl text-gray-700">
            {Number(product.priceRange.minVariantPrice.amount).toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: product.priceRange.minVariantPrice.currencyCode 
            })}
          </p>
          
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          
          <hr className="my-4" />
          
          {/* O Seletor de Variantes Interativo */}
          <VariantSelector 
            variants={product.variants?.edges.map((edge) => edge.node) || []} 
          />
        </div>
      </div>
    </main>
  );
}