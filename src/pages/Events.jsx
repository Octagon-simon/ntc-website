import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { rhythm, moments } from '../data/events.js'
import { chapel } from '../data/chapel.js'

const whatsappHref = `https://wa.me/234${chapel.whatsapp.replace(/\s/g, '').replace(/^0/, '')}`

export default function Events() {
  return (
    <>
      <PageHeader
        title="The rhythm of the chapel"
        lede="New Testament Chapel gathers every Sabbath and every Wednesday, and marks the year with Sabbaths and nights of her own."
      />

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="When we meet" />
          </Reveal>
          <ol className="flex flex-col border-b border-primary-200/70">
            {rhythm.map((item) => (
              <Reveal
                as="li"
                key={item.slug}
                className="grid gap-3 border-t border-primary-200/70 py-7 sm:grid-cols-12 sm:gap-8"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-gold-700 sm:col-span-3 sm:pt-1">
                  {item.day}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="font-serif text-xl font-semibold text-primary-900">{item.title}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-primary-800/70">
                    {item.description}
                  </p>
                </div>
                <div className="text-sm text-primary-800/70 sm:col-span-3 sm:pt-1">
                  <p className="font-medium text-primary-900">{item.time}</p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="Moments the chapel keeps"
              description="Programs built for the whole-person development of students, and for worship that leaves the building."
            />
          </Reveal>
          <div className="grid gap-x-12 sm:grid-cols-2">
            {moments.map((moment) => (
              <Reveal key={moment.slug} className="border-t border-primary-200/70 py-6">
                <h3 className="font-serif text-lg font-semibold text-primary-900">{moment.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-800/70">
                  {moment.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-5">
          <span aria-hidden="true" className="h-0.5 w-10 bg-gold-500" />
          <h2 className="max-w-2xl font-serif text-2xl font-semibold text-primary-900 sm:text-3xl">
            Programs are announced in the chapel group.
          </h2>
          <p className="max-w-xl text-primary-800/75">
            Send NTC to{' '}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-primary-900 underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:decoration-primary-700"
            >
              {chapel.whatsapp}
            </a>{' '}
            on WhatsApp and we will add you.
          </p>
        </Container>
      </section>
    </>
  )
}
