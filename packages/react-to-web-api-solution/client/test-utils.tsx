import { expect, beforeEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import App from './components/App'

beforeEach(cleanup)
expect.extend(matchers)

export default function setupApp() {
  const user = userEvent.setup()
  const container = render(<App />)
  return { user, ...container }
}