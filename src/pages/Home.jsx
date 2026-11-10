import { NavLink } from 'react-router-dom'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import SessionPlayer from '../components/SessionPlayer.jsx'
import TextLink from '../components/TextLink.jsx'
import { PersonCard } from '../components/PersonCard.jsx'
import { departments } from '../data/departments.js'
import { sessions, chapelView } from '../data/media.js'
import { chapel, slogan, serviceTimes, milestones } from '../data/chapel.js'
import { pastorate } from '../data/leadership.js'
import { departmentIcons, PlayIcon } from '../components/icons.jsx'

const featuredSlugs = ['choir-music', 'prayer-sabbath-school-evangelism', 'ushering']
const featuredDepartments = featuredSlugs.map((slug) => departments.find((d) => d.slug === slug))
const featuredPastors = pastorate.slice(0, 3)

const primaryCta =
  'inline-flex min-h-11 items-center gap-2 rounded-md bg-primary-600 px-6 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 cursor-pointer'
const secondaryCta =
  'inline-flex min-h-11 items-center gap-2 rounded-md border border-primary-400 px-6 text-base font-semibold text-primary-800 transition-colors duration-200 hover:border-primary-600 hover:bg-primary-100 cursor-pointer'

export default function Home() {
  const preaching = sessions.find((s) => s.featured)
  const worshipSessions = sessions.filter((s) => !s.featured)

  return (
    <>
      <section className="border-b border-primary-200/70">
        <Container className="grid gap-12 pb-12 pt-12 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gold-700">
              <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
              {chapel.university}, Ilishan-Remo
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-primary-900 sm:text-5xl lg:text-6xl">
              A family that worships God in Spirit and in Truth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-800/75">
              The youngest worship centre on Babcock University campus. It began on
              {' '}{chapel.commenced} with about six hundred first-year students, and has met
              every Sabbath since.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <NavLink to="/contact" className={primaryCta}>
                Plan a visit
              </NavLink>
              <NavLink to="/watch" className={secondaryCta}>
                <PlayIcon className="h-5 w-5" />
                Watch a session
              </NavLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-md bg-primary-900 p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-white">
                  <img
                    src="/logo.png"
                    alt="New Testament Chapel crest"
                    width="40"
                    height="46"
                    className="h-10 w-auto"
                  />
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight text-white">New Testament Chapel</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-300">
                    {chapel.university}
                  </p>
                </div>
              </div>

              <div className="mt-9 flex items-end gap-4">
                <span className="font-serif text-6xl leading-none text-gold-300">600</span>
                <span className="pb-1 text-sm leading-snug text-primary-100">
                  students at the
                  <br />
                  first worship service
                </span>
              </div>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-primary-700/60 pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-primary-300">
                    Commenced
                  </dt>
                  <dd className="mt-1 text-primary-100">{chapel.commenced}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-primary-300">
                    Inaugurated
                  </dt>
                  <dd className="mt-1 text-primary-100">{chapel.inaugurated}</dd>
                </div>
              </dl>

              <p className="mt-7 font-serif text-base italic text-gold-200">{chapel.motto}</p>
            </div>
          </div>
        </Container>

        <div className="border-t border-primary-200/70">
          <Container className="grid gap-6 py-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-primary-200/70">
            {serviceTimes.map((service, i) => (
              <div key={service.label} className={i === 0 ? 'sm:pr-8' : 'sm:px-8'}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                  {service.day}
                </p>
                <p className="mt-2 font-serif text-lg text-primary-900">
                  {service.label}, {service.time}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-primary-800/70">{service.detail}</p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <section className="bg-primary-900 py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            Our call and response
          </p>
          <div className="flex flex-col gap-8">
            {slogan.exchanges.map((exchange) => (
              <div
                key={exchange.call}
                className="grid gap-4 border-t border-primary-700/60 pt-7 sm:grid-cols-2 sm:gap-10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-300">Call</p>
                  <p className="mt-2 font-serif text-xl text-white sm:text-2xl">{exchange.call}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold-300">Response</p>
                  <p className="mt-2 font-serif text-xl italic text-gold-100 sm:text-2xl">
                    {exchange.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Sit in on a session"
              description="Worship and preaching from the chapel, recorded as they happened."
            />
            <TextLink to="/watch">All sessions</TextLink>
          </Reveal>

          <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[preaching, ...worshipSessions].filter(Boolean).map((session) => (
              <SessionPlayer key={session.slug} session={session} className="aspect-[4/5] w-full" />
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="story" className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <figure className="overflow-hidden rounded-md">
              <img
                src={chapelView.src}
                alt={chapelView.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
              />
            </figure>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-7">
            <SectionHeading title="The newest chapel on campus" />
            <ol className="flex flex-col">
              {milestones.slice(0, 3).map((milestone) => (
                <li key={milestone.title} className="border-t border-primary-200/70 py-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-gold-700">
                    {milestone.date}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-primary-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-primary-800/70">
                    {milestone.text}
                  </p>
                </li>
              ))}
            </ol>
            <TextLink to="/about">Read the full story</TextLink>
          </Reveal>
        </Container>
      </section>

      <section id="leadership" className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="The people who carry the chapel"
              description="Assistant pastors lead the departments, and student Heads of Department run them."
            />
          </Reveal>

          <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPastors.map((person) => (
              <PersonCard key={person.id} person={person} compact />
            ))}
          </Reveal>

          <TextLink to="/leadership">All the pastors, HODs and student leaders</TextLink>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="Every department is a post"
              description="From the choir to the sanctuary, the chapel runs on members who take a department as their place of service."
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {featuredDepartments.map((dept) => {
              const Icon = departmentIcons[dept.icon] ?? departmentIcons.Book
              return (
                <Reveal
                  key={dept.slug}
                  className="flex flex-col gap-3 border-t border-primary-200/70 pt-6"
                >
                  <Icon className="h-5 w-5 text-gold-700" />
                  <h3 className="font-serif text-xl font-semibold text-primary-900">{dept.name}</h3>
                  <p className="text-sm leading-relaxed text-primary-800/70">{dept.summary}</p>
                  <p className="mt-auto pt-2 text-xs uppercase tracking-[0.14em] text-primary-800/70">
                    HOD {dept.hod}
                  </p>
                </Reveal>
              )
            })}
          </div>
          <TextLink to="/ministries">Explore the departments</TextLink>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span aria-hidden="true" className="h-0.5 w-10 bg-gold-500" />
          <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-primary-900 sm:text-4xl">
            You are welcome here.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-primary-800/75">
            Join the chapel family this Sabbath, or send NTC to {chapel.whatsapp} to be added to
            the chapel WhatsApp group.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <NavLink to="/contact" className={primaryCta}>
              Plan a visit
            </NavLink>
            <TextLink to="/events">See the week</TextLink>
          </div>
        </Container>
      </section>
    </>
  )
}
