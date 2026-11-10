import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import TextLink from '../components/TextLink.jsx'
import { PersonCard } from '../components/PersonCard.jsx'
import { departments, structure } from '../data/departments.js'
import { studentLeaders } from '../data/leadership.js'
import { departmentIcons } from '../components/icons.jsx'

export default function Ministries() {
  return (
    <>
      <PageHeader
        title="Find your place to serve"
        lede="Every department of the chapel is a post. Each one is led by a pastor and headed by a student HOD, and each one needs members."
      />

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="How the chapel is organized" />
          </Reveal>
          <div className="grid gap-0 sm:grid-cols-3 sm:gap-10">
            {structure.map((tier) => (
              <Reveal
                key={tier.name}
                className="border-t border-primary-200/70 py-6 sm:border-t-0 sm:border-l sm:border-primary-200/70 sm:py-0 sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <h3 className="font-serif text-lg font-semibold text-primary-900">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-800/70">{tier.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="Ten departments, one chapel"
              description="Each department below carries a student Head of Department and a pastor who oversees it."
            />
          </Reveal>
          <div className="grid gap-x-12 sm:grid-cols-2">
            {departments.map((dept) => {
              const Icon = departmentIcons[dept.icon] ?? departmentIcons.Book
              return (
                <Reveal
                  key={dept.slug}
                  className="flex gap-4 border-t border-primary-200/70 py-6"
                >
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold-700" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-lg font-semibold text-primary-900">
                      {dept.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-primary-800/70">{dept.summary}</p>
                    <p className="mt-2 text-xs text-primary-800/70">
                      HOD {dept.hod}
                      {dept.units ? ` · ${dept.units.join(', ')}` : ''}
                    </p>
                    <p className="text-xs text-primary-800/70">Oversight: {dept.oversight}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="Students heading departments"
              description="Samantha and Daniel hold departmental portfolios for the chapel while studying full time."
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            {studentLeaders.map((person) => (
              <Reveal key={person.id}>
                <PersonCard person={person} compact />
              </Reveal>
            ))}
          </div>
          <TextLink to="/leadership">Meet the full leadership</TextLink>
        </Container>
      </section>
    </>
  )
}
