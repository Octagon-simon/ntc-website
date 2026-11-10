import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import { chapel, serviceTimes } from '../data/chapel.js'
import { MapPinIcon, PhoneIcon } from './icons.jsx'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/watch', label: 'Watch' },
  { to: '/events', label: 'Gatherings' },
  { to: '/contact', label: 'Contact' },
]

const heading = 'text-xs font-semibold uppercase tracking-[0.18em] text-gold-300'

export default function Footer() {
  const whatsappHref = `https://wa.me/234${chapel.whatsapp.replace(/\s/g, '').replace(/^0/, '')}`

  return (
    <footer className="mt-24 bg-primary-900 text-primary-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white">
              <img src="/logo.png" alt="" width="36" height="41" className="h-9 w-auto" />
            </span>
            <span className="font-serif text-lg font-semibold text-white">New Testament Chapel</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-200">
            A family that worships God in Spirit and in Truth, serving {chapel.university} since
            {' '}{chapel.commenced}.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-gold-300">{chapel.motto}</p>
        </div>

        <div className="lg:col-span-3">
          <h3 className={heading}>Explore</h3>
          <ul className="mt-3 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="flex min-h-11 w-full items-center text-sm text-primary-200 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className={heading}>Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-200">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>Babcock University Campus, Ilishan-Remo, Ogun State, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-300" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline"
              >
                {chapel.whatsapp} (WhatsApp)
              </a>
            </li>
          </ul>
          <dl className="mt-5 border-t border-primary-700/60 pt-4 text-sm text-primary-200">
            {serviceTimes.map((service) => (
              <div key={service.label} className="flex justify-between gap-4 py-1">
                <dt>{service.label}</dt>
                <dd className="text-primary-300">
                  {service.day}, {service.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-primary-700/60">
        <Container className="flex flex-col gap-2 py-5 text-xs text-primary-300 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} New Testament Chapel. All rights reserved.</span>
          <span data-credit>
            Spearheaded by{' '}
            <a
              href="https://mroctagon.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-300 hover:text-gold-200 transition-colors"
            >
              Simon Ugorji (Octagon)
            </a>
            , a BUCodel student
          </span>
        </Container>
      </div>
    </footer>
  )
}
