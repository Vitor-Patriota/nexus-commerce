// app/sobre/page.tsx
export default function SobrePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">Sobre a Nexus</h1>
      <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
        <p className="mb-6">
          Fundada com o objetivo de revolucionar a experiência de compra online, a Nexus não é apenas um e-commerce. Somos uma prova de conceito do que há de mais moderno em engenharia de software e design de interação.
        </p>
        <p className="mb-6">
          Acreditamos no poder da tecnologia headless, combinando a robustez da Shopify com a velocidade extrema do Next.js. O nosso compromisso é oferecer interfaces mobile-first, performance imbatível e transições sem atrito em qualquer ecrã.
        </p>
        <p>
          Este projeto faz parte de um portfólio desenvolvido com tecnologias de ponta, refletindo o nosso padrão de qualidade, arquitetura estrita e excelência visual.
        </p>
      </div>
    </main>
  );
}