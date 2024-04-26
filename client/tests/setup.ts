import { beforeEach, expect } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { createMemoryRouter } from 'react-router-dom'

beforeEach(cleanup)
expect.extend(matchers)
