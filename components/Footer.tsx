import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-black dark:text-white mb-4 block">
              NEXUS.
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              A tecnologia headless definitiva para o futuro do e-commerce. Alta performance, design escalável e conversão máxima.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Navegação</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/catalogo" className="hover:text-black dark:hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link href="/sobre" className="hover:text-black dark:hover:text-white transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Políticas</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Termos de Serviço</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Trocas e Devoluções</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>suporte@nexus.com</li>
              <li>Vitória da Conquista, BA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Nexus Commerce. Desenvolvido por Vitor.
          </p>
          
          <div className="flex gap-3">
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-400">VISA</div>
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-400">PIX</div>
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-400">MASTER</div>
          </div>
        </div>
      </div>
    </footer>
  );
}