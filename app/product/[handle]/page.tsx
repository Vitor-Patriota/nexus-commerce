// app/product/[handle]/page.tsx
import { getProduct } from '../../../lib/shopify';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import VariantSelector from '../../../components/VariantSelector';
import ProductGallery from '../../../components/ProductGallery';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.handle);

  if (!product) return {};

  const imageUrl = product.images.edges[0]?.node?.url || '';

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.handle);

  if (!product) {
    return notFound();
  }

  const images = product.images.edges.map((edge) => edge.node);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      
      <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
        <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Início</Link>
        <span className="mx-3">/</span>
        <span className="text-black dark:text-white">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <div className="w-full">
          <ProductGallery images={images} />
        </div>

        <div className="flex flex-col pt-4 md:pt-10">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
            {product.title}
          </h1>
          
          <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
            <p>{product.description}</p>
          </div>
          
          <hr className="border-gray-200 dark:border-gray-800 mb-10" />
          
          <VariantSelector 
            variants={product.variants?.edges.map((edge) => edge.node) || []} 
          />
          
          <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Garantia de Qualidade
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pagamento Seguro
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}