import type { LucideIcon } from 'lucide-react';
import { Server, Boxes, Workflow, Terminal } from 'lucide-react';

export type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  status: 'Em desenvolvimento' | 'MVP' | 'Concluído';
  links: { label: string; href: string }[];
};

export type SkillGroup = {
  title: string;
  items: { name: string; learning?: boolean }[];
};

export type Service = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  email: 'mailto:contato@matheus.dev',
  ninetyfreelas: 'https://www.99freelas.com.br/',
} as const;

export const CONTACT_INFO = {
  email: 'contato@matheus.dev',
  github: 'github.com/[seu-github]',
  linkedin: 'linkedin.com/in/[seu-linkedin]',
  ninetyfreelas: '99freelas.com.br/[seu-perfil]',
} as const;

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: Terminal,
    title: 'Sistemas personalizados',
    description:
      'Aplicações desenvolvidas de acordo com o processo e as necessidades específicas de cada negócio.',
  },
  {
    icon: Server,
    title: 'APIs e Backend',
    description:
      'APIs bem estruturadas para conectar aplicações, automatizar processos e centralizar regras de negócio.',
  },
  {
    icon: Workflow,
    title: 'Automação',
    description:
      'Transformação de tarefas manuais e repetitivas em processos digitais mais rápidos e confiáveis.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'workstation-agent',
    index: '01',
    name: 'Workstation Agent',
    description:
      'Ferramenta CLI desenvolvida em Go para automatizar tarefas de gerenciamento e backup de uma workstation Linux.',
    problem: 'Automatizar rotinas manuais de manutenção e backup em ambientes Linux.',
    technologies: ['Go', 'Linux', 'CLI', 'Docker'],
    status: 'Em desenvolvimento',
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    id: 'ordem-servico',
    index: '02',
    name: 'Sistema de Ordem de Serviço',
    description:
      'Sistema web para gerenciamento de clientes, ordens de serviço, serviços e itens.',
    problem: 'Organizar e centralizar o fluxo de ordens de serviço de um negócio.',
    technologies: ['Go', 'REST API', 'PostgreSQL'],
    status: 'MVP',
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    id: 'api-gateway',
    index: '03',
    name: 'API Gateway',
    description:
      'Projeto experimental de infraestrutura para centralizar autenticação, roteamento e comunicação entre diferentes serviços.',
    problem: 'Centralizar autenticação e roteamento entre múltiplos serviços.',
    technologies: ['Go', 'REST', 'Docker'],
    status: 'Em desenvolvimento',
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Entendimento',
    description:
      'Entendo o problema, o processo atual e o resultado esperado.',
  },
  {
    step: '02',
    title: 'Planejamento',
    description:
      'Defino funcionalidades, arquitetura e prioridades para criar uma solução objetiva.',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description:
      'Construo o sistema de forma incremental, mantendo código organizado e fácil de evoluir.',
  },
  {
    step: '04',
    title: 'Entrega',
    description:
      'Faço os ajustes finais, documentação e preparo o projeto para utilização.',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Go' },
      { name: 'REST APIs' },
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'Gin' },
      { name: 'Arquitetura de software' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Git' },
      { name: 'GitHub Actions', learning: true },
      { name: 'CI/CD', learning: true },
    ],
  },
  {
    title: 'Desenvolvimento',
    items: [
      { name: 'Git' },
      { name: 'APIs' },
      { name: 'Clean Architecture' },
      { name: 'SOLID' },
      { name: 'Design de sistemas' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React', learning: true },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento de sistemas',
    description:
      'Sistemas web personalizados para processos internos e operações de empresas.',
  },
  {
    title: 'APIs e Backend',
    description:
      'Desenvolvimento de APIs REST e serviços backend para aplicações web e mobile.',
  },
  {
    title: 'MVPs',
    description:
      'Construção de MVPs para validar ideias de produtos digitais rapidamente.',
  },
  {
    title: 'Automação de processos',
    description:
      'Soluções para reduzir tarefas manuais e automatizar processos repetitivos.',
  },
  {
    title: 'Integrações',
    description:
      'Integração entre sistemas, APIs e serviços externos.',
  },
];

export const VALUES = [
  'Simplicidade',
  'Código organizado',
  'Manutenibilidade',
  'Performance',
  'Segurança',
  'Evolução contínua',
];

export const STATUS_STYLES: Record<Project['status'], string> = {
  'Em desenvolvimento': 'text-amber-400/90 border-amber-400/30 bg-amber-400/5',
  MVP: 'text-accent border-accent/30 bg-accent/5',
  Concluído: 'text-zinc-300 border-ink-600 bg-ink-800',
};
