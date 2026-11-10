// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { render, screen, cleanup } from '@testing-library/react'
import Footer from '../Footer'

beforeAll(() => {
  expect.extend(matchers)
})

vi.mock('react-router-dom', () => ({
  NavLink: ({ to, children }) => <a href={to}>{children}</a>,
}))

vi.mock('../Container', () => ({
  default: ({ children }) => <div>{children}</div>,
}))

vi.mock('../icons', () => ({
  PhoneIcon: () => null,
  MapPinIcon: () => null,
}))

describe('Footer', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the chapel name and brand mark', () => {
    render(<Footer />)
    expect(screen.getByText('New Testament Chapel')).toBeInTheDocument()
    expect(document.querySelector('img[src="/logo.png"]')).toBeInTheDocument()
  })

  it('renders the motto and founding line', () => {
    render(<Footer />)
    expect(
      screen.getByText(/A family that worships God in Spirit and in Truth/)
    ).toBeInTheDocument()
  })

  it('renders all navigation links with correct hrefs', () => {
    render(<Footer />)
    const expectedLinks = [
      { to: '/about', label: 'About' },
      { to: '/leadership', label: 'Leadership' },
      { to: '/ministries', label: 'Ministries' },
      { to: '/watch', label: 'Watch' },
      { to: '/events', label: 'Gatherings' },
      { to: '/contact', label: 'Contact' },
    ]
    expectedLinks.forEach(({ to, label }) => {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', to)
    })
  })

  it('renders the Explore and Contact section headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the physical address', () => {
    render(<Footer />)
    expect(
      screen.getByText('Babcock University Campus, Ilishan-Remo, Ogun State, Nigeria')
    ).toBeInTheDocument()
  })

  it('renders the WhatsApp link', () => {
    render(<Footer />)
    const whatsappLink = screen.getByRole('link', { name: '0813 131 6234 (WhatsApp)' })
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/2348131316234')
    expect(whatsappLink).toHaveAttribute('target', '_blank')
  })

  it('renders the current year in the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(`© ${year} New Testament Chapel. All rights reserved.`)
    ).toBeInTheDocument()
  })

  it('renders the attribution link to Simon Ugorji', () => {
    render(<Footer />)
    const attributionLink = screen.getByRole('link', { name: 'Simon Ugorji (Octagon)' })
    expect(attributionLink).toHaveAttribute('href', 'https://mroctagon.dev')
    expect(attributionLink).toHaveAttribute('target', '_blank')
    expect(attributionLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText(/a BUCodel student/)).toBeInTheDocument()
  })
})
