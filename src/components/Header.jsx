import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import { MenuIcon, CloseIcon } from './icons.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

function linkClasses({ isActive }) {
  return [
    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
    isActive
      ? 'text-primary-700 bg-primary-100'
      : 'text-primary-900/80 hover:text-primary-700 hover:bg-primary-50',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-primary-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-primary-800 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-serif text-lg font-semibold text-primary-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-sans font-bold">
            NCC
          </span>
          <span className="hidden sm:inline">New Creation Chapel</span>
        </NavLink>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden md:inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 active:scale-95 cursor-pointer"
          >
            Visit Us
          </NavLink>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-primary-800 hover:bg-primary-50 active:scale-90 transition-transform duration-150 cursor-pointer"
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
          className="md:hidden border-t border-primary-100 bg-surface animate-fade-slide-down"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClasses}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-150 active:scale-95 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Visit Us
            </NavLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
