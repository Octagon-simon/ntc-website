import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import { MenuIcon, CloseIcon } from './icons.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/watch', label: 'Watch' },
  { to: '/events', label: 'Gatherings' },
  { to: '/contact', label: 'Contact' },
]

function linkClasses({ isActive }) {
  return [
    'inline-flex min-h-11 items-center px-3 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'text-primary-900 shadow-[inset_0_-2px_0_0_#CD9D2D]'
      : 'text-primary-800/70 hover:text-primary-900 hover:shadow-[inset_0_-2px_0_0_#C6E0D9]',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-primary-200/70 bg-surface/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-primary-800 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <NavLink
          to="/"
          aria-label="New Testament Chapel home"
          className="flex min-h-11 min-w-11 items-center gap-3"
        >
          <img src="/logo.png" alt="" width="40" height="46" className="h-11 w-auto" />
          <span className="hidden font-serif text-lg font-semibold leading-tight text-primary-900 sm:inline">
            New Testament
            <span className="block text-xs font-sans font-medium uppercase tracking-[0.18em] text-gold-700">
              Chapel
            </span>
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden lg:inline-flex min-h-11 items-center rounded-md bg-primary-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 cursor-pointer"
          >
            Plan a visit
          </NavLink>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-900 hover:bg-primary-100 transition-colors duration-150 cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden border-t border-primary-200/70 bg-surface animate-fade-slide-down"
        >
          <Container className="flex flex-col py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'flex min-h-11 items-center border-b border-primary-100/80 px-1 text-base',
                    isActive ? 'font-semibold text-primary-900' : 'text-primary-800/80',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-4 mb-2 inline-flex min-h-11 w-fit items-center rounded-md bg-primary-600 px-5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Plan a visit
            </NavLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
