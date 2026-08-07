import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { events } from '../data/events.js'
import { CalendarIcon, ClockIcon, MapPinIcon } from '../components/icons.jsx'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Events() {
  const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <>
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Events"
              title="What's happening"
              description="Join us for worship, fellowship, and community — see what's coming up at New Creation Chapel."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ul className="flex flex-col gap-5">
            {sorted.map((event, i) => (
              <Reveal
                key={event.slug}
                as="li"
                delay={(i % 5) * 60}
                className="flex flex-col gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <span className="text-xs font-semibold uppercase">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                  <span className="text-xl font-bold leading-none">
                    {new Date(event.date).getDate()}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold text-primary-800">{event.title}</h3>
                    {event.recurring && (
                      <span className="inline-flex items-center rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-gold-700">
                        {event.recurring}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary-700/80">{event.description}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-primary-600">
                    <span className="inline-flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" /> {formatDate(event.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="h-3.5 w-3.5" /> {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="h-3.5 w-3.5" /> {event.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
