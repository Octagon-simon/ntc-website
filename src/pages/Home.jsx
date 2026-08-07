import { NavLink } from 'react-router-dom'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { departments } from '../data/departments.js'
import { sermons } from '../data/sermons.js'
import { events } from '../data/events.js'
import { departmentIcons, ArrowRightIcon, PlayIcon, CalendarIcon, ClockIcon, MapPinIcon } from '../components/icons.jsx'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export default function Home() {
  const latestSermon = sermons[0]
  const upcomingEvents = events.slice(0, 3)
  const featuredSlugs = ['choir-music', 'ushering', 'prayer']
  const featuredDepartments = featuredSlugs.map((slug) => departments.find((d) => d.slug === slug))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-surface to-surface">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
          <Reveal className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center rounded-full bg-gold-100 px-4 py-1.5 text-sm font-semibold text-gold-700">
              Sabbath Worship: Saturdays, 9:00 AM
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-primary-900">
              A place to belong, believe, and become new.
            </h1>
            <p className="max-w-xl text-lg text-primary-800/80">
              New Creation Chapel is a welcoming church community on Babcock University campus.
              Whatever season you're in, there's a seat for you here.
            </p>
            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 cursor-pointer"
              >
                Plan Your Visit
                <ArrowRightIcon className="h-5 w-5" />
              </NavLink>
              <NavLink
                to="/sermons"
                className="inline-flex items-center gap-2 rounded-md border border-primary-300 bg-white px-6 py-3 text-base font-semibold text-primary-800 transition-all duration-200 hover:bg-primary-50 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 cursor-pointer"
              >
                <PlayIcon className="h-5 w-5" />
                Watch Latest Sermon
              </NavLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-white p-4 shadow-lg ring-1 ring-primary-100">
              <p className="text-sm font-semibold text-primary-800">Every Wednesday</p>
              <p className="text-xs text-primary-600">Midweek Prayer Meeting, 6:00 PM</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Value prop strip */}
      <section className="border-y border-primary-100 bg-white">
        <Container className="grid gap-8 py-10 sm:grid-cols-3">
          {[
            { title: 'Warm & Welcoming', desc: 'No matter your background, you\'ll find a genuine welcome from your first visit.' },
            { title: 'Christ-Centered Teaching', desc: 'Practical, Scripture-rooted messages that speak to everyday life.' },
            { title: 'Family & Community', desc: 'Ministries for every age — from children to young adults to families.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <h3 className="font-serif text-lg font-semibold text-primary-800">{item.title}</h3>
              <p className="mt-2 text-sm text-primary-700/80">{item.desc}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Ministries preview */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Get Involved"
              title="Find your place to grow and serve"
              description="From worship to outreach, there's a department for every gift and every stage of life."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDepartments.map((dept, i) => {
              const Icon = departmentIcons[dept.icon]
              return (
                <Reveal
                  key={dept.slug}
                  delay={i * 100}
                  className="flex flex-col gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-primary-800">{dept.name}</h3>
                  <p className="text-sm text-primary-700/80">{dept.summary}</p>
                </Reveal>
              )
            })}
          </div>
          <NavLink
            to="/ministries"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary-700 transition-colors duration-200 hover:text-primary-800 cursor-pointer"
          >
            View all departments
            <ArrowRightIcon className="h-4 w-4" />
          </NavLink>
        </Container>
      </section>

      {/* Latest sermon + upcoming events */}
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5 rounded-xl bg-white p-8 shadow-sm ring-1 ring-primary-100">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Latest Sermon</span>
            <h3 className="font-serif text-2xl font-semibold text-primary-800">{latestSermon.title}</h3>
            <p className="text-sm text-primary-700/80">{latestSermon.summary}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-600">
              <span>{latestSermon.speaker}</span>
              <span>{formatDate(latestSermon.date)}</span>
              <span>{latestSermon.scripture}</span>
            </div>
            <NavLink
              to="/sermons"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-700 active:scale-95 cursor-pointer"
            >
              <PlayIcon className="h-4 w-4" />
              Listen Now
            </NavLink>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Upcoming Events</span>
            <ul className="flex flex-col gap-4">
              {upcomingEvents.map((event, i) => (
                <li
                  key={event.slug}
                  className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-primary-100 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                    <CalendarIcon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-primary-800">{event.title}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-600">
                      <span className="inline-flex items-center gap-1">
                        <CalendarIcon className="h-3.5 w-3.5" /> {formatDate(event.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <ClockIcon className="h-3.5 w-3.5" /> {event.time}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <NavLink
              to="/events"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary-700 transition-colors duration-200 hover:text-primary-800 cursor-pointer"
            >
              View all events
              <ArrowRightIcon className="h-4 w-4" />
            </NavLink>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 rounded-2xl bg-primary-800 px-6 py-14 text-center sm:px-12">
            <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl font-semibold text-white">
              We'd love to meet you this Sabbath.
            </h2>
            <p className="max-w-xl text-primary-100">
              Join us Saturdays — Sabbath School at 9:00 AM, followed by worship at 10:45 AM.
              Free parking, kids' ministry, and a warm welcome await you at the door.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gold-600 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 cursor-pointer"
              >
                Get Directions
              </NavLink>
              <div className="inline-flex items-center gap-2 text-sm text-primary-100">
                <MapPinIcon className="h-4 w-4" />
                Babcock University Campus, Ilishan-Remo
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
