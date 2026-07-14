import { useState } from 'react'
import { SectionHeader } from './SectionHeader'

const questions = [
  ['Quanto tempo leva para criar um site?', 'O prazo depende do tamanho e da complexidade do projeto. Em geral, uma landing page leva menos tempo que um site institucional completo. O cronograma é definido com transparência antes do início.'],
  ['O site funciona no celular?', 'Sim. Todos os projetos são desenvolvidos com design responsivo para funcionar bem em celulares, tablets, notebooks e monitores maiores.'],
  ['Vocês também desenvolvem aplicativos?', 'Sim. Desenvolvemos aplicativos modernos para Android e iOS, além de sistemas web personalizados e integrações.'],
  ['Posso solicitar alterações depois da entrega?', 'Sim. Podemos realizar ajustes pontuais ou combinar um plano de evolução contínua conforme as necessidades do seu negócio.'],
  ['Como funciona o suporte?', 'O suporte é próximo e transparente. Depois da publicação, ajudamos com dúvidas, correções e melhorias conforme o formato combinado para o projeto.'],
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return <section className="section faq" id="faq"><SectionHeader tag="Perguntas frequentes" title="Dúvidas antes de" accent="começar?" description="Respostas diretas para ajudar você a entender como trabalhamos." /><div className="faq-list reveal">{questions.map(([question, answer], index) => { const expanded = open === index; return <article className={expanded ? 'faq-item open' : 'faq-item'} key={question}><h3><button type="button" aria-expanded={expanded} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{question}</span><i aria-hidden="true">+</i></button></h3><div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!expanded}><div><p>{answer}</p></div></div></article> })}</div></section>
}
