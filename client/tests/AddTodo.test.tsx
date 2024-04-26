//@vitest-environment jsdom
import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest'
import {
  screen,
  render,
  // within,
  // waitForElementToBeRemoved,
  // waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// https://testing-library.com/docs/user-event/intro
import nock from 'nock'
import './setup.ts'
import AddTodo from '../components/AddTodo.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const newTodo = {
  id: 3,
  name: 'Complete Testing',
  priority: 1,
  is_active: true,
  is_completed: false,
}

beforeAll(() => {
  nock.disableNetConnect()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<AddTodo/>', async () => {
  it('should add a new todo', async () => {
    const addScope = nock('http://localhost')
      .post('/api/v1/todos', { name: newTodo.name })
      .reply(201)

    render(
      <QueryClientProvider client={new QueryClient()}>
        <AddTodo />
      </QueryClientProvider>,
    )

    const todoInput = await screen.getByLabelText(/add a task/i)

    const user = userEvent.setup()
    await user.type(todoInput, newTodo.name)
    await user.type(todoInput, '{enter}')

    expect(addScope.isDone()).toBe(true)
  })
})
