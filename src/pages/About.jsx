import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import TextLink from '../components/TextLink.jsx'
import { chapel, slogan, milestones } from '../data/chapel.js'
import { chapelView } from '../data/media.js'

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
      <PageHeader
        title="A chapel that began with six hundred students"
        lede={`New Testament Chapel is a ${chapel.university} chapel. It commenced worship on ${chapel.commenced} and was inaugurated on ${chapel.inaugurated}.`}
      />

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-5 lg:col-span-7">
            <SectionHeading title="Our story" />
            <div className="flex flex-col gap-5 text-base leading-relaxed text-primary-800/80">
              <p>
                New Testament Chapel commenced her worship activities on {chapel.commenced} with
                an approximated membership of about 600 students. They were all 100 Level,
                allocated to the chapel by the Division of Spiritual Life, under the pastoral
                leadership of Pr. (Dr.) Kingsley Chukwuemeka Anonaba and a team of assistant
                pastors.
              </p>
              <p>
                Four days later the chapel held her first Church Committee Meeting, where the
                committee was nominated and assistant pastors were assigned to head departments.
                As some of the student pastors graduated, the chapel adjusted, and the departments
                settled into the shape they hold today: a pastor leading each unit, a student Head
                of Department running it.
              </p>
              <p>
                Though the newest and youngest worship centre on campus, the chapel has made
                progressive impact within and outside the worship centre, from hymnal Sabbaths and
                Worship &amp; Praise Nights to visitations of orphanages, prisons and hospitals.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <figure>
              <img
                src={chapelView.src}
                alt={chapelView.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-primary-800/70">
                A Sabbath gathering in the chapel, with the congregation filling the hall.
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="The first two years" />
          </Reveal>
          <ol className="flex flex-col">
            {milestones.map((milestone) => (
              <Reveal
                as="li"
                key={milestone.title}
                className="grid gap-2 border-t border-primary-200/70 py-7 sm:grid-cols-12 sm:gap-8"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-gold-700 sm:col-span-3 sm:pt-1">
                  {milestone.date}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="font-serif text-xl font-semibold text-primary-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-prose leading-relaxed text-primary-800/75">
                    {milestone.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-primary-900 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-gold-500" />
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white">
              The call and response
            </h2>
            <p className="mt-4 text-primary-100">
              Adopted at the inauguration on {chapel.inaugurated}, and still how the chapel
              answers.
            </p>
          </div>
          <dl className="flex flex-col gap-7 lg:col-span-8">
            {slogan.exchanges.map((exchange) => (
              <div key={exchange.call} className="border-t border-primary-700/60 pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-primary-300">Call</dt>
                <dd className="mt-1 font-serif text-xl text-white">{exchange.call}</dd>
                <dt className="mt-4 text-xs uppercase tracking-[0.18em] text-gold-300">Response</dt>
                <dd className="mt-1 font-serif text-xl italic text-gold-100">{exchange.response}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="What we believe" />
          </Reveal>
          <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <Reveal key={belief.title} className="border-t border-primary-200/70 py-6">
                <h3 className="font-serif text-lg font-semibold text-primary-900">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-800/70">{belief.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-5">
          <h2 className="max-w-2xl font-serif text-2xl font-semibold text-primary-900 sm:text-3xl">
            The pastorate, the Heads of Department and the students leading Media and Welfare.
          </h2>
          <TextLink to="/leadership">See the leadership</TextLink>
        </Container>
      </section>
    </>
  )
}
