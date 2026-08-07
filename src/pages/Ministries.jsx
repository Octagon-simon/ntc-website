import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { departments, tiers } from '../data/departments.js'
import { departmentIcons } from '../components/icons.jsx'

export default function Ministries() {
  return (
    <>
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ministries"
              title="Find your place to serve and grow"
              description="New Creation Chapel runs through the service of its members. Every department exists to help people take a next step in faith and community — explore where you might belong."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading eyebrow="Our Structure" title="How the church is organized" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 100}
                className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                  Tier {i + 1}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-primary-800">{tier.name}</h3>
                <p className="mt-2 text-sm text-primary-700/80">{tier.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading eyebrow="Departments" title="20 departments, one church family" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => {
              const Icon = departmentIcons[dept.icon]
              return (
                <Reveal
                  key={dept.slug}
                  delay={(i % 4) * 80}
                  className="flex flex-col gap-3 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-base font-semibold text-primary-800">{dept.name}</h3>
                  <p className="text-sm text-primary-700/80">{dept.summary}</p>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
