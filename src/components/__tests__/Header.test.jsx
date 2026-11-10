// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Header from '../Header'

beforeAll(() => {
  expect.extend(matchers)
})

afterEach(() => {
  cleanup()
})

vi.mock('react-router-dom', () => ({
  NavLink: ({ to, children, className, end, ...rest }) => (
    <a
      href={to}
      className={typeof className === 'function' ? className({ isActive: false }) : className}
      {...rest}
    >
      {children}
    </a>
  ),
}))

vi.mock('../Container', () => ({
  default: ({ children }) => <div>{children}</div>,
}))

vi.mock('../icons', () => ({
  MenuIcon: () => null,
  CloseIcon: () => null,
}))

describe('Header', () => {
  it('renders the chapel crest', () => {
    render(<Header />)
    expect(document.querySelector('img[src="/logo.png"]')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'New Testament Chapel home' })).toHaveAttribute('href', '/')
  })

  it('renders every primary navigation link', () => {
    render(<Header />)
    const labels = ['Home', 'About', 'Leadership', 'Ministries', 'Watch', 'Gatherings', 'Contact']
    labels.forEach((label) => {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    })
  })

  it('opens and closes the mobile menu', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
