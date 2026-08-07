import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { staff } from '../data/staff.js'

const beliefs = [
  { title: 'The Bible', desc: 'We believe Scripture is the inspired, authoritative Word of God for faith and life.' },
  { title: 'The Trinity', desc: 'We believe in one God, eternally existing as Father, Son, and Holy Spirit.' },
  { title: 'Salvation by Grace', desc: 'We believe salvation is a gift received by grace through faith in Jesus Christ alone.' },
  { title: 'New Life in Christ', desc: 'We believe every believer is made a new creation, called to grow and reflect Christ.' },
  { title: 'The Church', desc: 'We believe the local church is God\'s family on earth, gathered to worship, grow, and serve.' },
  { title: 'The Great Commission', desc: 'We believe every believer is called to share the Gospel and make disciples.' },
]

export default function About() {
  return (
    <>
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Our story, our beliefs, our people"
              description="New Creation Chapel exists to help people encounter Christ, grow in faith, and live out a renewed life in community."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary-200 to-primary-400 order-last lg:order-first" />
          <Reveal delay={120} className="flex flex-col gap-5">
            <h2 className="font-serif text-3xl font-semibold text-primary-800">Our Story</h2>
            <p className="text-primary-700/80 leading-relaxed">
              New Creation Chapel began as a small gathering of students and staff on Babcock
              University campus who longed for a church home rooted in Scripture and real
              community. What started as a handful of people meeting for prayer has grown into
              a diverse congregation spanning students, faculty, families, and neighbors from
              the surrounding community.
            </p>
            <p className="text-primary-700/80 leading-relaxed">
              Today, we continue to be shaped by that same founding conviction: that the Gospel
              makes people new, and that church should be a place where that transformation is
              lived out together — in worship, in relationship, and in service to others.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="What We Believe"
              title="Our core convictions"
              align="center"
            />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <Reveal
                key={belief.title}
                delay={(i % 2) * 80}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-primary-100 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-lg font-semibold text-primary-800">{belief.title}</h3>
                <p className="mt-2 text-sm text-primary-700/80">{belief.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Meet our pastoral team"
              description="Our pastors and ministers are committed to shepherding this church family with care and integrity."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((person, i) => (
              <Reveal
                key={person.name}
                delay={i * 80}
                className="flex flex-col gap-3 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                <div className="h-16 w-16 rounded-full bg-primary-200" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-primary-800">{person.name}</h3>
                <p className="text-sm font-medium text-gold-700">{person.role}</p>
                <p className="text-sm text-primary-700/80">{person.bio}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
