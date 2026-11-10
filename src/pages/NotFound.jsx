import { NavLink } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">404</span>
        <h1 className="font-serif text-3xl font-semibold text-primary-900 sm:text-4xl">
          This page is not here
        </h1>
        <p className="max-w-md leading-relaxed text-primary-800/75">
          The page you are looking for does not exist or may have moved.
        </p>
        <NavLink
          to="/"
          className="mt-2 inline-flex min-h-11 items-center rounded-md bg-primary-600 px-6 text-sm font-semibold text-white hover:bg-primary-700 cursor-pointer"
        >
          Back to home
        </NavLink>
      </Container>
    </section>
  )
}
