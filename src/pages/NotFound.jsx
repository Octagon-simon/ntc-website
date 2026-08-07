import { NavLink } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">404</span>
        <h1 className="font-serif text-3xl font-semibold text-primary-800">Page not found</h1>
        <p className="max-w-md text-primary-700/80">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <NavLink
          to="/"
          className="mt-2 inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 cursor-pointer"
        >
          Back to Home
        </NavLink>
      </Container>
    </section>
  )
}
