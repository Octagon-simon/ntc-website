import { NavLink } from 'react-router-dom'

/** Inline navigation link: gold rule under the text instead of an arrow. */
export default function TextLink({ to, children, className = '' }) {
  return (
    <NavLink
      to={to}
      className={`inline-flex min-h-11 items-center text-sm font-semibold text-primary-800 underline decoration-gold-500 decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-primary-900 hover:decoration-primary-700 ${className}`}
    >
      {children}
    </NavLink>
  )
}
