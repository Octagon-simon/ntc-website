import Container from './Container.jsx'

/** Page opening block. One per page, carrying the h1 and the lede. */
export default function PageHeader({ title, lede, meta }) {
  return (
    <section className="border-b border-primary-200/70">
      <Container className="flex flex-col gap-5 py-12 sm:py-16">
        <span aria-hidden="true" className="h-0.5 w-12 bg-gold-500" />
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-primary-900 sm:text-5xl">
          {title}
        </h1>
        {lede && <p className="max-w-2xl text-lg leading-relaxed text-primary-800/75">{lede}</p>}
        {meta && <p className="text-xs uppercase tracking-[0.18em] text-gold-700">{meta}</p>}
      </Container>
    </section>
  )
}
