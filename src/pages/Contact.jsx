import { useState } from 'react'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from '../components/icons.jsx'

const serviceTimes = [
  { label: 'Sabbath School', time: 'Saturdays, 9:00 AM' },
  { label: 'Divine Worship Service', time: 'Saturdays, 10:45 AM' },
  { label: 'Midweek Prayer Meeting', time: 'Wednesdays, 6:00 PM' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const message = form.get('message')?.toString().trim()

    const nextErrors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!email) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!message) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setStatus('success')
      e.target.reset()
    }
  }

  return (
    <>
      <section className="bg-primary-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="We'd love to hear from you"
              description="Have a question, prayer request, or just want to say hello? Reach out — we'll get back to you soon."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {status === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="animate-fade-slide-down rounded-md bg-primary-100 px-4 py-3 text-sm font-medium text-primary-800"
                >
                  Thank you — your message has been sent. We'll be in touch soon.
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-primary-800">
                  Full name <span className="text-gold-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="rounded-md border border-primary-200 px-4 py-2.5 text-primary-900 focus:border-primary-500"
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-primary-800">
                  Email address <span className="text-gold-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="rounded-md border border-primary-200 px-4 py-2.5 text-primary-900 focus:border-primary-500"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-primary-800">
                  Message <span className="text-gold-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="rounded-md border border-primary-200 px-4 py-2.5 text-primary-900 focus:border-primary-500"
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-fit items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 active:scale-95 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2 flex flex-col gap-8">
            <div className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-primary-800">Service Times</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {serviceTimes.map((s) => (
                  <li key={s.label} className="flex items-start gap-3 text-sm">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    <span>
                      <span className="font-medium text-primary-800">{s.label}</span>
                      <span className="block text-primary-600">{s.time}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-primary-800">Get in Touch</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span className="text-primary-700">Babcock University Campus, Ilishan-Remo, Ogun State, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold-600" />
                  <a href="tel:+2340000000000" className="text-primary-700 hover:text-primary-900">+234 000 000 0000</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="h-4 w-4 shrink-0 text-gold-600" />
                  <a href="mailto:hello@newcreationchapel.org" className="text-primary-700 hover:text-primary-900">
                    hello@newcreationchapel.org
                  </a>
                </li>
              </ul>
            </div>

            <div className="aspect-video w-full rounded-xl bg-primary-100 flex items-center justify-center text-sm text-primary-500">
              Map placeholder
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
