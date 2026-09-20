import type { LucideIcon } from 'lucide-react';
import { Hammer, GraduationCap, Compass,   Rocket,  Layers, Cpu, Workflow, GitBranch, Terminal } from 'lucide-react';

export type ProjectStatus = 'Building' | 'MVP' | 'Exploring' | 'Shipped';

export type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  status: ProjectStatus;
  links: { label: string; href: string }[];
};

export type LabItem = {
  id: string;
  title: string;
  description: string;
  status: 'Idea' | 'Experiment' | 'Building' | 'Paused' | 'Shipped';
  tag: string;
};

export type SkillLevel = 'Primary' | 'Working with' | 'Exploring';

export type SkillGroup = {
  title: string;
  items: { name: string; level: SkillLevel }[];
};

export type Principle = {
  title: string;
  description: string;
};

export type Venture = {
  title: string;
  description: string;
  status: 'IDEA' | 'VALIDATING' | 'BUILDING' | 'LIVE';
  category: string;
};

export type Opportunity = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type Pillar = {
  icon: LucideIcon;
  label: string;
  description: string;
};

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contato', href: '#contato' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/latariaio',
  linkedin: 'https://linkedin.com/in/mtths-monteiro',
  email: 'mailto:contato@mtths.com.br',
} as const;

export const CONTACT_INFO = {
  email: 'contato@mtths.com.br',
  github: 'github.com/latariaio',
  linkedin: 'linkedin.com/in/mtths-monteiro',
} as const;

export const PILLARS: Pillar[] = [
  {
    icon: Hammer,
    label: 'BUILD',
    description: 'Construo sistemas, APIs, automações e aplicações.',
  },
  {
    icon: GraduationCap,
    label: 'LEARN',
    description: 'Estudo novas tecnologias e aprofundo fundamentos de engenharia de software.',
  },
  {
    icon: Compass,
    label: 'EXPLORE',
    description: 'Experimento ideias e transformo algumas delas em produtos e projetos próprios.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'workstation-agent',
    index: '01',
    name: 'Workstation Agent',
    description:
      'Uma ferramenta CLI em Go para automatizar tarefas de gerenciamento de uma workstation Linux.',
    problem: 'Automatizar rotinas manuais de manutenção e backup em ambientes Linux.',
    technologies: ['Go', 'Linux', 'CLI', 'Docker'],
    status: 'Building',
    links: [{ label: 'GitHub', href: 'https://github.com/latariaio/workstation-agent' }],
  },
  {
    id: 'ordem-servico',
    index: '02',
    name: 'Sistema de Ordem de Serviço',
    description:
      'Sistema para gerenciamento de clientes, serviços e ordens de serviço, pensado para pequenos negócios.',
    problem: 'Organizar e centralizar o fluxo de ordens de serviço de um pequeno negócio.',
    technologies: ['Go', 'REST API', 'PostgreSQL'],
    status: 'MVP',
    links: [{ label: 'GitHub', href: 'https://github.com/latariaio/api-order-service' }],
  },
  {
    id: 'api-gateway',
    index: '03',
    name: 'API Gateway',
    description:
      'Exploração de uma arquitetura para centralizar autenticação, roteamento e comunicação entre serviços.',
    problem: 'Centralizar autenticação e roteamento entre múltiplos serviços.',
    technologies: ['Go', 'Docker', 'REST'],
    status: 'Exploring',
    links: [{ label: 'GitHub', href: 'https://github.com/latariaio' }],
  },
];

export const LAB_ITEMS: LabItem[] = [
  {
    id: 'lab-1',
    title: 'Estudo de arquitetura de microsserviços',
    description: 'Explorando padrões de comunicação e isolamento entre serviços.',
    status: 'Experiment',
    tag: 'Arquitetura',
  },
  {
    id: 'lab-2',
    title: 'Ferramenta CLI de produtividade',
    description: 'Pequeno utilitário de linha de comando para automatizar tarefas repetitivas.',
    status: 'Building',
    tag: 'CLI',
  },
  {
    id: 'lab-3',
    title: 'Idea de SaaS para gestão de pequenos negócios',
    description: 'Conceito inicial de um produto para gestão simples de ordens de serviço.',
    status: 'Idea',
    tag: 'SaaS',
  },
  {
    id: 'lab-4',
    title: 'Automação de infraestrutura com Docker',
    description: 'Scripts e compose files para provisionar ambientes de desenvolvimento.',
    status: 'Shipped',
    tag: 'Infra',
  },
  {
    id: 'lab-5',
    title: 'API experimental de webhooks',
    description: 'Estudo de roteamento, filas e processamento assíncrono.',
    status: 'Paused',
    tag: 'API',
  },
  {
    id: 'lab-6',
    title: 'Estudos de Domain-Driven Design',
    description: 'Aprofundando modelagem de domínio e separação de contextos.',
    status: 'Experiment',
    tag: 'Engineering',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Go', level: 'Primary' },
      { name: 'REST API', level: 'Primary' },
      { name: 'Gin', level: 'Working with' },
      { name: 'PostgreSQL', level: 'Working with' },
      { name: 'SQL', level: 'Working with' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 'Exploring' },
      { name: 'TypeScript', level: 'Exploring' },
      { name: 'Vite', level: 'Exploring' },
      { name: 'HTML', level: 'Working with' },
      { name: 'CSS', level: 'Working with' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', level: 'Working with' },
      { name: 'Linux', level: 'Working with' },
      { name: 'Git', level: 'Primary' },
      { name: 'GitHub Actions', level: 'Exploring' },
      { name: 'CI/CD', level: 'Exploring' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { name: 'Clean Architecture', level: 'Working with' },
      { name: 'SOLID', level: 'Working with' },
      { name: 'Domain Modeling', level: 'Exploring' },
      { name: 'API Design', level: 'Working with' },
    ],
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: 'Simplicidade',
    description:
      'Prefiro uma solução simples que funcione bem a uma arquitetura complexa sem necessidade.',
  },
  {
    title: 'Manutenibilidade',
    description:
      'Código precisa continuar compreensível depois que o projeto crescer.',
  },
  {
    title: 'Evolução',
    description:
      'Software deve ser construído pensando no próximo passo, sem tentar prever todos eles.',
  },
  {
    title: 'Produto',
    description:
      'Uma boa implementação resolve um problema real.',
  },
];

export const FOCUS_LIST = [
  'Go',
  'Backend',
  'APIs',
  'Arquitetura de software',
  'Docker',
  'Linux',
  'Produtos digitais',
  'Empreendedorismo em tecnologia',
];

export const VENTURES: Venture[] = [
  // {
  //   title: '[Produto SaaS placeholder]',
  //   description: 'Descrição do produto que está sendo validado. Substitua este placeholder pelo produto real quando estiver pronto.',
  //   status: 'VALIDATING',
  //   category: 'SaaS',
  // },
  {
    title: 'Ferramenta de DNS e monitoramento de serviços',
    description: 'Ferramenta para monitoramento de serviços e gerenciamento de DNS, com foco em pequenas empresas.',
    status: 'BUILDING',
    category: 'Ferramenta',
  },
  {
    title: 'Family Hub',
    description: 'Centralizador de informações medicas familiares.',
    status: 'IDEA',
    category: 'Produto',
  },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    title: 'Projeto',
    description: 'Você tem um problema ou uma ideia que precisa virar software.',
    cta: 'Discutir projeto',
    href: '#contato',
  },
  {
    title: 'Colaboração',
    description: 'Você está construindo algo e procura alguém para desenvolver junto.',
    cta: 'Conversar',
    href: '#contato',
  },
  {
    title: 'Oportunidade',
    description: 'Você procura um desenvolvedor para fazer parte de um time ou projeto.',
    cta: 'Entrar em contato',
    href: '#contato',
  },
];

export const PROJECT_STATUS_STYLES: Record<ProjectStatus, string> = {
  Building: 'text-amber-400/90 border-amber-400/30 bg-amber-400/5',
  MVP: 'text-accent border-accent/30 bg-accent/5',
  Exploring: 'text-sky-400/90 border-sky-400/30 bg-sky-400/5',
  Shipped: 'text-zinc-300 border-ink-600 bg-ink-800',
};

export const LAB_STATUS_STYLES: Record<LabItem['status'], string> = {
  Idea: 'text-zinc-500 border-ink-600 bg-ink-800',
  Experiment: 'text-sky-400/90 border-sky-400/30 bg-sky-400/5',
  Building: 'text-amber-400/90 border-amber-400/30 bg-amber-400/5',
  Paused: 'text-zinc-500 border-ink-600 bg-ink-800',
  Shipped: 'text-accent border-accent/30 bg-accent/5',
};

export const VENTURE_STATUS_STYLES: Record<Venture['status'], string> = {
  IDEA: 'text-zinc-500 border-ink-600 bg-ink-800',
  VALIDATING: 'text-sky-400/90 border-sky-400/30 bg-sky-400/5',
  BUILDING: 'text-amber-400/90 border-amber-400/30 bg-amber-400/5',
  LIVE: 'text-accent border-accent/30 bg-accent/5',
};

export const SKILL_LEVEL_STYLES: Record<SkillLevel, string> = {
  Primary: 'text-zinc-100',
  'Working with': 'text-zinc-400',
  Exploring: 'text-zinc-600',
};

export const LAB_ICONS: Record<string, LucideIcon> = {
  Arquitetura: Layers,
  CLI: Terminal,
  SaaS: Rocket,
  Infra: Cpu,
  API: Workflow,
  Engineering: GitBranch,
};
