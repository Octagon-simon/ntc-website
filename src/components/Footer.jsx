import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import { MailIcon, PhoneIcon, MapPinIcon } from './icons.jsx'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-primary-100 bg-primary-900 text-primary-100">
      <Container className="py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-serif text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-white text-sm font-sans font-bold">
              NCC
            </span>
            New Creation Chapel
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-200">
            A welcoming church community serving Babcock University and the surrounding
            neighborhood — gathering to worship, grow in faith, and love our neighbors.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sm text-primary-200 hover:text-white transition-colors">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-200">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Babcock University Campus, Ilishan-Remo, Ogun State, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a href="tel:+2340000000000" className="hover:text-white transition-colors">
                +234 000 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0" />
              <a href="mailto:hello@newcreationchapel.org" className="hover:text-white transition-colors">
                hello@newcreationchapel.org
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-primary-800">
        <Container className="py-4 flex flex-col gap-1 text-xs text-primary-300 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} New Creation Chapel. All rights reserved.</span>
          <span>
            Spearheaded by{' '}
            <a
              href="https://octagon-simon.github.io"
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
