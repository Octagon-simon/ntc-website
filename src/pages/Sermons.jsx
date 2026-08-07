import { useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { sermons } from '../data/sermons.js'
import { PlayIcon, BookIcon, CalendarIcon } from '../components/icons.jsx'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Sermons() {
  const series = useMemo(() => ['All', ...new Set(sermons.map((s) => s.series))], [])
  const [activeSeries, setActiveSeries] = useState('All')

  const filtered = activeSeries === 'All' ? sermons : sermons.filter((s) => s.series === activeSeries)

  return (
    <>
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sermons"
              title="Recent messages"
              description="Catch up on recent teaching from New Creation Chapel, organized by series."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by series">
            {series.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveSeries(s)}
                aria-pressed={activeSeries === s}
                className={[
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer',
                  activeSeries === s
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50',
                ].join(' ')}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((sermon, i) => (
              <Reveal
                key={sermon.slug}
                delay={(i % 4) * 60}
                as="article"
                className="flex flex-col gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                    {sermon.series}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <PlayIcon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-800">{sermon.title}</h3>
                <p className="text-sm text-primary-700/80">{sermon.summary}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-primary-600 mt-auto pt-2 border-t border-primary-100">
                  <span>{sermon.speaker}</span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" /> {formatDate(sermon.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BookIcon className="h-3.5 w-3.5" /> {sermon.scripture}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
