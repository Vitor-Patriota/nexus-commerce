// components/Header.tsx
"use client";

import Link from 'next/link';
import { useCartStore } from '../store/cartStore';

export default function Header() {
  const { openCart } = useCartStore();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-black">
            NEXUS.
          </Link>
        </div>

        {/* Menu Desktop Central */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Início
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Catálogo
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Ícones da Direita (Carrinho) */}
        <div className="flex items-center">
          <button 
            onClick={openCart}
            className="flex items-center gap-2 p-2 text-gray-600 hover:text-black transition-colors rounded-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {/* Esconde a palavra "Carrinho" no celular, deixa só o ícone */}
            <span className="hidden sm:block text-sm font-medium">Carrinho</span>
          </button>
        </div>
        
      </div>
    </header>
  );
}