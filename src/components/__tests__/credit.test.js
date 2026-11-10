// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

//the non-module inline scripts, i.e. the self-healing credit guards
const guards = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1])

const CREDIT = 'Spearheaded by Simon Ugorji (Octagon), a BUCodel student'

function run(code) {
  new Function(code)()
}

function note() {
  return document.getElementById('cf-note')
}

const observers = []
const RealObserver = window.MutationObserver

beforeEach(() => {
  document.body.innerHTML = ''
  observers.length = 0
  vi.stubGlobal(
    'MutationObserver',
    class extends RealObserver {
      constructor(cb) {
        super(cb)
        observers.push(this)
      }
    },
  )
  vi.stubGlobal('setInterval', () => 0)
  vi.stubGlobal('clearInterval', () => {})
  vi.stubGlobal('requestAnimationFrame', () => 0)
})

afterEach(() => {
  observers.forEach((o) => o.disconnect())
  vi.unstubAllGlobals()
})

describe('credit guard', () => {
  it('ships no plaintext credit in the html', () => {
    expect(html).not.toMatch(/mroctagon/i)
    expect(html).not.toMatch(/Simon Ugorji/i)
    expect(guards.length).toBeGreaterThanOrEqual(2)
  })

  it('injects the credit when the footer has none', () => {
    run(guards.join(';'))
    expect(note()).not.toBeNull()
    expect(note().textContent).toBe(CREDIT)
    expect(note().querySelector('a').getAttribute('href')).toBe('https://mroctagon.dev')
  })

  it('leaves an intact footer credit alone', () => {
    document.body.innerHTML = `<footer><span data-credit>Spearheaded by <a href="https://mroctagon.dev">Simon Ugorji (Octagon)</a>, a BUCodel student</span></footer>`
    run(guards.join(';'))
    expect(note()).toBeNull()
  })

  it('restores the credit after a tampered footer credit', () => {
    document.body.innerHTML = `<footer><span data-credit>Spearheaded by <a href="https://example.com">Someone Else</a>, a BUCodel student</span></footer>`
    run(guards.join(';'))
    expect(note()).not.toBeNull()
    expect(note().querySelector('a').getAttribute('href')).toBe('https://mroctagon.dev')
  })

  it('re-injects after the injected credit is removed', async () => {
    run(guards.join(';'))
    note().remove()
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(note()).not.toBeNull()
    expect(note().textContent).toBe(CREDIT)
  })

  it('survives losing one whole script tag', () => {
    document.body.innerHTML = ''
    run(guards[1])
    expect(note()).not.toBeNull()
    expect(note().querySelector('a').getAttribute('href')).toBe('https://mroctagon.dev')
  })

  it('does not inject beside an app that has not rendered yet', () => {
    document.body.innerHTML = '<div id="root"></div>'
    run(guards.join(';'))
    expect(note()).toBeNull()
  })

  it('removes its own bar once a valid credit shows up', () => {
    run(guards.join(';'))
    expect(note()).not.toBeNull()
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<span data-credit>Spearheaded by <a href="https://mroctagon.dev">Simon Ugorji (Octagon)</a>, a BUCodel student</span>`,
    )
    run(guards.join(';'))
    expect(note()).toBeNull()
  })

  it('does not stack duplicates', () => {
    run(guards.join(';'))
    run(guards.join(';'))
    expect(document.querySelectorAll('#cf-note').length).toBe(1)
  })
})
