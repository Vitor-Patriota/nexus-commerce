# Nexus Commerce 

Um e-commerce headless de alta performance construído com uma arquitetura moderna, focada em velocidade extrema, SEO dinâmico e uma experiência de utilizador fluida (Mobile-First). 

Este projeto demonstra a integração entre a robustez do **Next.js (App Router)** e a flexibilidade da **Shopify Storefront API**, resultando numa loja virtual totalmente personalizável e escalável.

![Nexus Commerce Preview](https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop)

##  Tecnologias Utilizadas

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router, Server Components, Server Actions)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **E-commerce Engine:** [Shopify Storefront API](https://shopify.dev/docs/api/storefront) (GraphQL)
*   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Gestão de Estado:** [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (Para o carrinho de compras)
*   **Tematização:** `next-themes` (Dark/Light mode nativo e sem cintilação)

##  Funcionalidades Principais

*   **Arquitetura Headless:** O frontend em Next.js comunica diretamente com o backend da Shopify via GraphQL, garantindo tempos de resposta ultrarrápidos.
*   **Carrinho Global (Drawer):** Gestão de estado do carrinho gerida pelo Zustand, permitindo adicionar, remover e atualizar itens sem recarregar a página.
*   **Dark Mode Nativo:** Suporte completo para modo escuro/claro gerido por classes do Tailwind v4 e sincronizado com as preferências do utilizador.
*   **SEO Dinâmico & Open Graph:** Metadados gerados dinamicamente no servidor para cada produto, garantindo pré-visualizações ricas ao partilhar links em redes sociais (WhatsApp, LinkedIn, etc.).
*   **Galeria de Imagens Interativa:** Visualização detalhada de produtos com miniaturas interativas e seletores de variantes precisos.
*   **Design Mobile-First:** Interface totalmente responsiva com navegação adaptada para dispositivos móveis (Menu Hambúrguer, Touch-friendly).

##  Como correr o projeto localmente

### Pré-requisitos
*   Node.js (versão 18 ou superior)
*   Uma conta de parceiro Shopify com a Storefront API configurada.

### Instalação

1. Clone este repositório:
```bash
git clone [https://github.com/teu-usuario/nexus-commerce.git](https://github.com/teu-usuario/nexus-commerce.git)