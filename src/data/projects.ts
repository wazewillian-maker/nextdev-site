export type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  link: string | null
  status: 'Projeto em desenvolvimento' | 'Projeto demonstrativo'
  featured: boolean
  technologies: string[]
  visualClass: string
  ctaLabel?: string
  showTechnologies?: boolean
}

export const BELLA_ESSENCE_URL = 'https://bella-essence-site-demo.vercel.app/'
export const PRIME_RESIDENCE_URL = '/imobiliaria-demo/'

export const projects: Project[] = [
  {
    id: 'crystal-clear-pro',
    title: 'Crystal Clear Pro',
    category: 'Aplicativo de gestão',
    description: 'Sistema para organizar clientes, piscinas, visitas, checklists, produtos e informações administrativas.',
    image: '',
    link: null,
    status: 'Projeto em desenvolvimento',
    featured: true,
    technologies: ['React', 'TypeScript', 'Aplicativo'],
    visualClass: 'project-fintech',
  },
  {
    id: 'site-empresarial-demo',
    title: 'Site Empresarial',
    category: 'Site institucional',
    description: 'Modelo profissional para apresentar empresas, serviços e formas de contato.',
    image: '',
    link: null,
    status: 'Projeto demonstrativo',
    featured: false,
    technologies: ['React', 'TypeScript'],
    visualClass: 'project-studio',
  },
  {
    id: 'landing-page-demo',
    title: 'Landing Page',
    category: 'Página de vendas',
    description: 'Página estratégica criada para transformar visitantes em contatos e clientes.',
    image: '',
    link: null,
    status: 'Projeto demonstrativo',
    featured: false,
    technologies: ['React', 'CSS'],
    visualClass: 'project-landing',
  },
  {
    id: 'sistema-web-demo',
    title: 'Sistema Web',
    category: 'Solução personalizada',
    description: 'Plataforma criada conforme as necessidades específicas de cada negócio.',
    image: '',
    link: null,
    status: 'Projeto demonstrativo',
    featured: false,
    technologies: ['React', 'TypeScript', 'APIs'],
    visualClass: 'project-dashboard',
  },
  {
    id: 'bella-essence',
    title: 'Bella Essence',
    category: 'Site Demonstrativo para Clínica de Estética',
    description: 'Site moderno e responsivo desenvolvido para demonstrar uma solução profissional para clínicas de estética, salões de beleza e profissionais da área da beleza.',
    image: '/images/projects/bella-essence-hero.jpg',
    link: BELLA_ESSENCE_URL,
    status: 'Projeto demonstrativo',
    featured: false,
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    visualClass: 'project-bella-essence',
    ctaLabel: 'Visualizar Projeto',
    showTechnologies: true,
  },
  {
    id: 'imobiliaria-prime-residence',
    title: 'Imobiliária Prime Residence',
    category: 'Site para Imobiliária',
    description: 'Site demonstrativo moderno para imobiliárias, com imóveis para venda, locação mensal e temporada, filtros de busca, páginas detalhadas e integração com WhatsApp.',
    image: '/images/projects/imobiliaria-prime-residence.jpg',
    link: PRIME_RESIDENCE_URL,
    status: 'Projeto demonstrativo',
    featured: false,
    technologies: ['React', 'TypeScript', 'Vite'],
    visualClass: 'project-prime-residence',
    ctaLabel: 'Ver Projeto',
    showTechnologies: true,
  },

  // Para cadastrar um trabalho, copie um dos objetos acima e cole aqui.
  // Altere todos os campos. Salve a imagem em public/images/projects e use, por exemplo, /images/projects/meu-projeto.webp.
  // Use link: null quando o projeto ainda não tiver uma página pública.
]
