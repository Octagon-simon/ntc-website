export function PersonCard({ person, compact = false }) {
  return (
    <article className="flex flex-col">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-md bg-primary-100">
        <img
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-serif text-lg font-semibold leading-snug text-primary-900">
          {person.name}
        </h3>
        <p className="text-sm font-medium text-gold-700">{person.role}</p>
        {person.programme && !compact && (
          <p className="text-sm text-primary-800/70">{person.programme}</p>
        )}
        {person.areas && (
          <p className="mt-1 text-xs text-primary-800/70">{person.areas.join(' · ')}</p>
        )}
      </div>
    </article>
  )
}

export function SeniorPastorFeature({ pastor }) {
  return (
    <div className="grid overflow-hidden rounded-md bg-primary-900 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <img
          src={pastor.photo}
          alt={`${pastor.name}, ${pastor.role}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-top lg:aspect-auto lg:h-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-6 sm:p-10 lg:col-span-7 lg:py-14">
        <span aria-hidden="true" className="h-0.5 w-10 bg-gold-500" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
          Senior Pastor
        </p>
        <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {pastor.name}
        </h2>
        <p className="max-w-lg leading-relaxed text-primary-100">
          {pastor.household}. He has led the chapel since her first worship service on
          23 October 2024 and chairs the Church Committee.
        </p>
      </div>
    </div>
  )
}
