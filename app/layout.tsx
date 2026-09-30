// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartDrawer from "../components/CartDrawer";
import Header from "../components/Header";
import { Providers } from "./providers"; // 1. Importe o Providers

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Commerce",
  description: "E-commerce Headless com Shopify e Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300`}>
        {/* 2. Envolva tudo com o Providers */}
        <Providers>
          <Header />
          {children}
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}