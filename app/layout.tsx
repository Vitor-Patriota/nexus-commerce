// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartDrawer from "../components/CartDrawer";
import Header from "../components/Header"; // <-- 1. Importação nova aqui

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Commerce",
  description: "E-commerce Headless com Shopify e Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        
        {/* 2. Adicionamos o Header aqui */}
        <Header />
        
        {children}
        <CartDrawer /> 
      </body>
    </html>
  );
}