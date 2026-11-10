import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import SessionPlayer from '../components/SessionPlayer.jsx'
import { sessions } from '../data/media.js'
import { chapel } from '../data/chapel.js'

export default function Watch() {
  const preaching = sessions.filter((s) => s.kind === 'Preaching')
  const worship = sessions.filter((s) => s.kind === 'Worship')

  return (
    <>
      <PageHeader
        title="Worship and preaching"
        lede="Recordings from the chapel, kept here so you can worship with us again or meet us before you visit."
      />

      <section className="border-b border-primary-200/70 py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          {preaching.map((session) => (
            <SessionPlayer key={session.slug} session={session} className="aspect-video w-full" />
          ))}
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="Sessions of worship" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {worship.map((session) => (
              <SessionPlayer key={session.slug} session={session} className="aspect-[4/5] w-full" />
            ))}
          </div>
          <p className="max-w-xl border-t border-primary-200/70 pt-6 text-sm leading-relaxed text-primary-800/70">
            Preaching and worship are recorded by the ICT/Media department. To request a session,
            send NTC to {chapel.whatsapp}.
          </p>
        </Container>
      </section>
    </>
  )
}
