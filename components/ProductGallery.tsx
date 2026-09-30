// components/ProductGallery.tsx
"use client";

import { useState } from 'react';

type ImageType = {
  url: string;
  altText: string | null;
};

export default function ProductGallery({ images }: { images: ImageType[] }) {
  const [mainImage, setMainImage] = useState<ImageType>(images[0]);

  // Se o produto não tiver imagens, mostramos um bloco cinza
  if (!images || images.length === 0) {
    return <div className="aspect-square bg-gray-100 rounded-3xl" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Imagem Principal */}
      <div className="aspect-square w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 relative group">
        <img 
          src={mainImage.url} 
          alt={mainImage.altText || "Imagem do produto"} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      {/* Miniaturas (Thumbnails) */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => {
            const isSelected = mainImage.url === img.url;
            return (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-200 
                  ${isSelected ? 'border-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-200'}`}
              >
                <img 
                  src={img.url} 
                  alt={`Miniatura ${index + 1}`} 
                  className="w-full h-full object-cover object-center" 
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}