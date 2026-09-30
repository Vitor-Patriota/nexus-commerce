// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartDrawer from "../components/CartDrawer";

// Usando a fonte Inter diretamente do Google Fonts (não precisa de arquivo local)
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
        {children}
        
        {/* A nossa gaveta do carrinho global */}
        <CartDrawer /> 
        
      </body>
    </html>
  );
}