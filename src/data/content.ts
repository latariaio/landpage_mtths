export const CONTACT = {
  emailAddress: 'contato@mtths.com.br',
  email: `mailto:contato@mtths.com.br?subject=${encodeURIComponent('Oportunidade para desenvolvedor Full Stack')}`,
  github: 'https://github.com/latariaio',
  linkedin: 'https://linkedin.com/in/mtths-monteiro',
} as const;

export const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
] as const;

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  /** Uma linha curta sobre o tipo de projeto. */
  kind: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  /**
   * Vídeo de demonstração opcional. Coloque o arquivo em public/media
   * e informe o caminho a partir da raiz do site.
   */
  video?: { src: string; poster: string; label: string };
};

export const PROJECTS: Project[] = [
  {
    id: 'calculadora-orcamento',
    name: 'Calculadora de Orçamentos',
    kind: 'PWA para estamparia',
    description:
      'A Amazônia Art digita a grade de cores e tamanhos e recebe preço, custo, lucro e o PDF do orçamento para o cliente.',
    highlights: [
      'Funciona no celular e no PC, inclusive sem internet',
      'Regras de custo, perda, acréscimo por tamanho e desconto por quantidade',
      'PDF gerado no próprio navegador',
    ],
    technologies: ['Vue 3', 'Vite', 'PWA', 'pdfmake', 'Vitest'],
    links: [],
    video: {
      src: '/media/calculadora-orcamento.mp4',
      poster: '/media/calculadora-poster.jpg',
      label: 'Vídeo de 22 segundos mostrando a Calculadora de Orçamentos em uso',
    },
  },
  {
    id: 'api-ecc',
    name: 'API do ECC',
    kind: 'API REST',
    description:
      'Substitui as fichas de papel do Encontro de Casais com Cristo: cadastro dos casais, filhos, padrinhos, inscrições e pagamentos por encontro.',
    highlights: [
      'Busca sem acento e tolerante a erros de digitação no nome',
      'Importação das fichas antigas por planilha CSV, com simulação antes de gravar',
      'PDF da ficha do casal, crachás e relatórios em CSV para cozinha e tesouraria',
      'Login com JWT, perfis de acesso e histórico de quem alterou o quê',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Zod', 'JWT', 'Docker'],
    links: [],
    video: {
      src: '/media/api-ecc.mp4',
      poster: '/media/api-ecc-poster.jpg',
      label: 'Vídeo narrado de 2 minutos e 52 segundos explicando a API do ECC',
    },
  },
  {
    id: 'cobranca-ia',
    name: 'Plataforma de Cobrança com IA',
    kind: 'Sistema em produção',
    description:
      'Backend criado do zero para um sistema de cobrança de dívidas com IA, em produção com usuários reais.',
    highlights: [
      'O cliente reportou 10% mais acordos fechados',
      'Trabalho em dupla com o desenvolvedor frontend, da arquitetura ao deploy',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Dify', 'Vue', 'DigitalOcean'],
    links: [],
  },
  {
    id: 'albatroz',
    name: 'Albatroz',
    kind: 'Sistema de seguros',
    description: 'Desenvolvimento e evolução contínua de um sistema de apólices em produção.',
    highlights: [
      'Liderança técnica de uma equipe com 5 desenvolvedores',
      'Decisões técnicas e melhorias de arquitetura com foco em estabilidade',
    ],
    technologies: ['Node.js', 'Express', 'MySQL'],
    links: [],
  },
  {
    id: 'glasspay',
    name: 'GlassPay',
    kind: 'Aplicativo mobile',
    description: 'App para a comunicação entre empresas e prestadores de serviço.',
    highlights: ['Iniciei o desenvolvimento, defini a arquitetura e o direcionamento técnico'],
    technologies: ['Flutter', 'Dart'],
    links: [],
  },
  {
    id: 'workstation-agent',
    name: 'Workstation Agent',
    kind: 'Ferramenta de linha de comando',
    description: 'CLI para automatizar rotinas de manutenção e backup em workstations Linux.',
    highlights: ['Projeto próprio, em desenvolvimento'],
    technologies: ['Go', 'Linux', 'Docker'],
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/latariaio/workstation-agent' }],
  },
  {
    id: 'ordem-servico',
    name: 'Sistema de Ordem de Serviço',
    kind: 'API REST',
    description: 'API para gerenciar clientes, serviços e ordens de serviço de pequenos negócios.',
    highlights: ['Projeto próprio, em fase de MVP'],
    technologies: ['Go', 'REST', 'PostgreSQL'],
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/latariaio/api-order-service' }],
  },
];

export type StackGroup = { title: string; items: string[]; icons: string[] };

export const STACK: StackGroup[] = [
  {
    title: 'Front-end',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    icons: ['react', 'nextjs', 'vue', 'typescript'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'Prisma', 'Zod', 'JWT', 'Swagger/OpenAPI', 'Go', 'Gin', 'Laravel', 'PHP'],
    icons: ['nodejs', 'go', 'laravel'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'Bloc', 'GetX'],
    icons: ['flutter', 'dart'],
  },
  {
    title: 'Banco de dados',
    items: ['PostgreSQL', 'MySQL'],
    icons: ['postgresql', 'mysql'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'DigitalOcean', 'Vercel', 'Git'],
    icons: ['docker', 'digitalocean', 'git'],
  },
  {
    title: 'IA e práticas',
    items: ['LLMs com Dify', 'Arquitetura', 'Contratos de API', 'Testes unitários', 'Análise de logs', 'Kanban', 'Sprints'],
    icons: [],
  },
];

export const JOBS = [
  {
    period: 'Out 2022 até hoje',
    company: 'Monteiro Tecnologia Digital',
    role: 'Full Stack freelancer',
    stack: 'Node.js, React, Next.js e Docker',
  },
  {
    period: 'Out 2022 a abr 2023',
    company: 'N2B',
    role: 'Backend, Flutter e Tech Lead',
    stack: 'Node.js, MySQL e Flutter',
  },
  {
    period: 'Jul 2021 a out 2022',
    company: 'Leal Sistemas',
    role: 'Flutter pleno',
    stack: 'Flutter, GetX e APIs REST',
  },
] as const;
