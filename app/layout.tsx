
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartDrawer from "../components/CartDrawer";
import Header from "../components/Header";
import { Providers } from "./providers"; 
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: '%s | Nexus Commerce',
    default: 'Nexus Commerce | O futuro do e-commerce',
  },
  description: 'E-commerce Headless de alta performance construído com Next.js e Shopify.',
  openGraph: {
    title: 'Nexus Commerce',
    description: 'E-commerce Headless de alta performance construído com Next.js e Shopify.',
    url: 'https://nexus-commerce.vercel.app', 
    siteName: 'Nexus Commerce',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop', 
        width: 1200,
        height: 630,
        alt: 'Nexus Commerce Hero',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}