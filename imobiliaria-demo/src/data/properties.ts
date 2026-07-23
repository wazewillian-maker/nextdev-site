export type PropertyPurpose = 'venda' | 'locacao-mensal' | 'temporada'
export type PropertyType = 'Casa' | 'Apartamento' | 'Cobertura' | 'Loft' | 'Sobrado'

export type Property = {
  id: number
  purpose: PropertyPurpose
  price: string
  priceValue: number
  dailyValue?: number
  title: string
  location: string
  city: string
  type: PropertyType
  beds: number
  baths: number
  parking: number
  area: number
  image: string
  gallery: string[]
  description: string
  features: string[]
}

const interiors = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
]

const details = {
  description: 'Um imóvel pensado para unir arquitetura contemporânea, conforto e o estilo de vida único da Costa Esmeralda. Os ambientes amplos e integrados recebem iluminação natural durante todo o dia, com acabamentos selecionados e fácil acesso às praias de Bombinhas e região.',
  features: ['Ambientes integrados', 'Acabamento premium', 'Iluminação natural', 'Área de lazer', 'Segurança 24 horas', 'Pronto para morar'],
}

type RawProperty = Omit<Property, 'purpose' | 'dailyValue'> & { purpose: string }

const rawProperties: RawProperty[] = [
  { id: 1, purpose: 'Venda', price: 'R$ 2.850.000', priceValue: 2850000, title: 'Casa Vista de Bombas', location: 'Bombas, Bombinhas', city: 'Bombinhas', type: 'Casa', beds: 4, baths: 5, parking: 3, area: 380, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90', ...interiors], ...details, description: 'Residência contemporânea com ambientes amplos e vista para a Praia de Bombas. Uma opção exclusiva para viver perto do mar, do comércio local e dos principais acessos de Bombinhas.' },
  { id: 2, purpose: 'Venda', price: 'R$ 1.490.000', priceValue: 1490000, title: 'Apartamento Mariscal', location: 'Mariscal, Bombinhas', city: 'Bombinhas', type: 'Apartamento', beds: 3, baths: 3, parking: 2, area: 168, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90', interiors[0], interiors[2], 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85'], ...details, description: 'Apartamento próximo à Praia de Mariscal, com planta generosa, varanda e ótima iluminação. Ideal para aproveitar uma das praias mais preservadas da região com conforto em todas as estações.' },
  { id: 3, purpose: 'Locação', price: 'R$ 8.900 / mês', priceValue: 8900, title: 'Cobertura Costa Esmeralda', location: 'Centro, Bombinhas', city: 'Bombinhas', type: 'Cobertura', beds: 3, baths: 4, parking: 2, area: 245, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90', interiors[1], interiors[0], 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=85'], ...details, description: 'Cobertura no Centro de Bombinhas, a poucos minutos da praia e da Avenida Vereador Manoel José dos Santos. Terraço privativo e espaços integrados para aproveitar a cidade o ano inteiro.' },
  { id: 4, purpose: 'Venda', price: 'R$ 3.200.000', priceValue: 3200000, title: 'Casa Canto do Mar', location: 'Canto Grande, Bombinhas', city: 'Bombinhas', type: 'Casa', beds: 4, baths: 5, parking: 4, area: 420, image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=90', ...interiors], ...details, description: 'Casa em Canto Grande com arquitetura elegante e excelente área de lazer. Localização privilegiada entre as praias de Mar de Dentro e Mar de Fora, próxima ao acesso para a trilha do Morro do Macaco.' },
  { id: 5, purpose: 'Locação', price: 'R$ 6.500 / mês', priceValue: 6500, title: 'Refúgio de Zimbros', location: 'Zimbros, Bombinhas', city: 'Bombinhas', type: 'Loft', beds: 2, baths: 2, parking: 1, area: 96, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90', interiors[0], interiors[1], interiors[2]], ...details, description: 'Loft mobiliado em Zimbros, perfeito para quem busca tranquilidade junto à natureza. Próximo à orla, aos restaurantes de frutos do mar e ao pôr do sol mais acolhedor de Bombinhas.' },
  { id: 6, purpose: 'Venda', price: 'R$ 1.890.000', priceValue: 1890000, title: 'Residência Quatro Ilhas', location: 'Quatro Ilhas, Bombinhas', city: 'Bombinhas', type: 'Casa', beds: 4, baths: 4, parking: 2, area: 310, image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=90', ...interiors], ...details, description: 'Residência a poucos passos da Praia de Quatro Ilhas, cercada pela paisagem natural da península. Ambientes confortáveis e área externa ideal para receber depois de um dia de praia.' },
  { id: 7, purpose: 'Venda', price: 'R$ 1.350.000', priceValue: 1350000, title: 'Sobrado Porto Belo', location: 'Perequê, Porto Belo', city: 'Porto Belo', type: 'Casa', beds: 3, baths: 3, parking: 2, area: 185, image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=90', interiors[0], interiors[2], interiors[1]], ...details, description: 'Sobrado em Porto Belo com espaços bem distribuídos e acesso rápido a Perequê, ao píer turístico e às praias da Costa Esmeralda. Uma escolha prática para morar ou investir na região.' },
  { id: 8, purpose: 'Venda', price: 'R$ 2.190.000', priceValue: 2190000, title: 'Apartamento Horizonte Itapema', location: 'Meia Praia, Itapema', city: 'Itapema', type: 'Apartamento', beds: 4, baths: 4, parking: 3, area: 205, image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=85', gallery: ['https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1600&q=90', interiors[1], interiors[0], interiors[2]], ...details, description: 'Apartamento em Itapema, na região de Meia Praia, com varanda ampla e fácil acesso à orla. Acabamentos sofisticados e proximidade a serviços, gastronomia e marinas da região.' },
  { id: 9, purpose: 'Venda', price: 'R$ 4.750.000', priceValue: 4750000, title: 'Villa Atlântica Mariscal', location: 'Mariscal, Bombinhas', city: 'Bombinhas', type: 'Casa', beds: 5, baths: 6, parking: 4, area: 520, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88', gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90', interiors[0], interiors[1], interiors[2]], ...details, description: 'Residência de alto padrão em Mariscal, com arquitetura autoral, piscina integrada ao living e ambientes voltados para a luz natural. Um refúgio exclusivo a poucos metros do mar.' },
  { id: 10, purpose: 'Locação', price: 'R$ 12.500 / mês', priceValue: 12500, title: 'Apartamento Skyline Perequê', location: 'Perequê, Porto Belo', city: 'Porto Belo', type: 'Apartamento', beds: 4, baths: 4, parking: 3, area: 230, image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88', gallery: ['https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90', interiors[2], interiors[0], interiors[1]], ...details, description: 'Apartamento mobiliado para locação anual, com vista aberta, varanda gourmet e acabamentos contemporâneos. Condomínio completo próximo à marina e aos principais serviços de Porto Belo.' },
  { id: 11, purpose: 'Temporada', price: 'R$ 1.650 / dia', priceValue: 1650, title: 'Sobrado Pôr do Sol Zimbros', location: 'Zimbros, Bombinhas', city: 'Bombinhas', type: 'Sobrado', beds: 4, baths: 4, parking: 2, area: 260, image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=88', gallery: ['https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=90', interiors[1], interiors[2], interiors[0]], ...details, description: 'Sobrado sofisticado para temporada em Zimbros, com área gourmet, piscina privativa e espaços preparados para receber famílias com conforto e privacidade.' },
  { id: 12, purpose: 'Venda', price: 'R$ 3.680.000', priceValue: 3680000, title: 'Cobertura Brisa de Quatro Ilhas', location: 'Quatro Ilhas, Bombinhas', city: 'Bombinhas', type: 'Cobertura', beds: 4, baths: 5, parking: 3, area: 315, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88', gallery: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90', interiors[0], interiors[2], interiors[1]], ...details, description: 'Cobertura exclusiva em Quatro Ilhas, com terraço panorâmico, spa privativo e integração total entre estar, cozinha e área externa. Vista privilegiada em uma das praias mais desejadas da região.' },
]

const purposeById: Record<number, PropertyPurpose> = { 1: 'venda', 2: 'temporada', 3: 'locacao-mensal', 4: 'venda', 5: 'locacao-mensal', 6: 'temporada', 7: 'venda', 8: 'venda', 9: 'venda', 10: 'locacao-mensal', 11: 'temporada', 12: 'venda' }
const dailyById: Record<number, number> = { 2: 950, 6: 1200, 11: 1650 }

export const properties: Property[] = rawProperties.map((property) => {
  const purpose = purposeById[property.id]
  const dailyValue = dailyById[property.id]
  const priceValue = purpose === 'temporada' ? dailyValue : property.priceValue
  const price = purpose === 'temporada' ? `R$ ${dailyValue.toLocaleString('pt-BR')}/dia` : purpose === 'locacao-mensal' ? `R$ ${priceValue.toLocaleString('pt-BR')}/mês` : property.price
  return { ...property, purpose, priceValue, price, ...(dailyValue ? { dailyValue } : {}) }
})

export const getPurposeLabel = (purpose: PropertyPurpose) => ({ venda: 'VENDA', 'locacao-mensal': 'LOCAÇÃO MENSAL', temporada: 'TEMPORADA' })[purpose]
export const getPriceCaption = (purpose: PropertyPurpose) => ({ venda: 'Valor de venda', 'locacao-mensal': 'Valor mensal', temporada: 'Valor da diária' })[purpose]

export const getPropertySlug = (property: Property) => property.title
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const getNeighborhood = (property: Property) => property.location.split(',')[0]

export const getPropertyAreas = (property: Property) => ({
  built: property.type === 'Casa' ? Math.round(property.area * .82) : property.area,
  land: property.type === 'Casa' ? property.area : property.area,
})
