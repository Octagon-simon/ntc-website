import '@testing-library/jest-dom'

// ── Mock cleanup ──────────────────────────────────────────────────────────
// restoreMocks/clearMocks in vitest.config.ts handle this automatically,
// but explicit hooks here guard against any gaps.
// vi is available globally (globals: true in vitest.config.ts).

beforeEach(() => {
  vi.restoreAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})
