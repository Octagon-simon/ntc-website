import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import TextLink from '../components/TextLink.jsx'
import { PersonCard, SeniorPastorFeature } from '../components/PersonCard.jsx'
import { seniorPastor, pastorate, departmentalHods, studentLeaders } from '../data/leadership.js'

export default function Leadership() {
  return (
    <>
      <PageHeader
        title="The people who carry the chapel"
        lede="Assistant pastors lead the departments, student Heads of Department run them, and together they keep the worship of the chapel steady."
        meta="Pastorate, Heads of Department, student leaders"
      />

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SeniorPastorFeature pastor={seniorPastor} />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="The pastorate" />
          </Reveal>
          <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pastorate.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="The Heads of Department"
              description="Student leaders heading the departments of the chapel."
            />
          </Reveal>
          <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {departmentalHods.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-primary-200/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              title="Students holding a portfolio"
              description="Alongside the pastorate, these two hold departmental briefs while carrying a full course load."
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            {studentLeaders.map((person) => (
              <Reveal key={person.id}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </div>
          <TextLink to="/ministries">See the departments they lead</TextLink>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-5">
          <span aria-hidden="true" className="h-0.5 w-10 bg-gold-500" />
          <h2 className="max-w-2xl font-serif text-2xl font-semibold text-primary-900 sm:text-3xl">
            Every member of the chapel serves somewhere.
          </h2>
          <p className="max-w-xl text-primary-800/75">
            Tell us where you would like to serve and we will connect you with the HOD.
          </p>
          <TextLink to="/contact">Tell us where you would serve</TextLink>
        </Container>
      </section>
    </>
  )
}
