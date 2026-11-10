import { useState } from 'react'
import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { chapel, serviceTimes } from '../data/chapel.js'

const whatsappNumber = `234${chapel.whatsapp.replace(/\s/g, '').replace(/^0/, '')}`

const field =
  'min-h-11 w-full rounded-md border border-primary-400 bg-white px-4 py-2.5 text-base text-primary-900'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState('')

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
    if (Object.keys(nextErrors).length > 0) return

    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const opened = window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener',
    )
    setDraft(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`)
    setStatus(opened ? 'sent' : 'blocked')
    if (opened) e.target.reset()
  }

  return (
    <>
      <PageHeader
        title="We would love to hear from you"
        lede="A question, a prayer request, or just to say hello. Write it here and we will pick it up on the chapel WhatsApp line."
      />

      <section className="py-10 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="flex max-w-lg flex-col gap-5">
              {status !== 'idle' && (
                <div aria-live="polite">
                  {status === 'sent' && (
                    <p className="animate-fade-slide-down rounded-md bg-primary-100 px-4 py-3 text-sm text-primary-900">
                      Your message is open in WhatsApp. Press send there and we will receive it.
                    </p>
                  )}
                  {status === 'blocked' && (
                    <p className="rounded-md bg-gold-100 px-4 py-3 text-sm text-primary-900">
                      Your browser blocked the WhatsApp tab.{' '}
                      <a
                        href={draft}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-gold-500 decoration-2 underline-offset-4"
                      >
                        Open it here
                      </a>{' '}
                      to finish sending.
                    </p>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-primary-900">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={field}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-primary-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={field}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-primary-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${field} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-11 w-fit items-center rounded-md bg-primary-600 px-6 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 cursor-pointer"
              >
                Send via WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                Service times
              </h2>
              <dl className="mt-4 flex flex-col">
                {serviceTimes.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-baseline justify-between gap-4 border-t border-primary-200/70 py-3 text-sm"
                  >
                    <dt className="font-medium text-primary-900">{service.label}</dt>
                    <dd className="text-primary-800/70">
                      {service.day}, {service.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                Find us
              </h2>
              <p className="mt-4 border-t border-primary-200/70 pt-4 text-sm leading-relaxed text-primary-800/75">
                {chapel.university} Campus, {chapel.location}, Nigeria
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-800/75">
                WhatsApp{' '}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-medium text-primary-900 underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:decoration-primary-700"
                >
                  {chapel.whatsapp}
                </a>
                <span className="block text-primary-800/70">
                  Send NTC to be added to the chapel group.
                </span>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
