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

const mockTodos = [
  {
    id: 1,
    name: 'Wash dishes',
    priority: 3,
    is_active: true,
    is_completed: false,
  },
  {
    id: 2,
    name: 'Fold laundry',
    priority: 4,
    is_active: false,
    is_completed: true,
  },
]

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

afterEach(() => {
  vi.clearAllMocks()
})

describe('<AddTodo/>', async () => {
  it('should add a new todo', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/todos')
      .reply(200, mockTodos)

    const addScope = nock('http://localhost')
      .post('/api/v1/todos', { newTodo })
      .reply(201)

    render(
      <QueryClientProvider client={new QueryClient()}>
        <AddTodo />
      </QueryClientProvider>,
    )

    const todoInput = await screen.getByLabelText(/add a task/i)

    userEvent.type(todoInput, newTodo.name)
    userEvent.type(todoInput, '{enter}')

    // await waitForElementToBeRemoved(() => screen.queryByText(/adding/i))
    // await waitForElementToBeRemoved(() => screen.queryByText(/refreshing/i))

    // const list = (await screen.findAllByRole('list')) as HTMLElement[]
    // const listItems = within(list[0])
    //   .getAllByRole('listitem')
    //   .map((li) => li.textContent)

    // expect(listItems).toMatchInlineSnapshot(`
    //   [
    //     "Wash dishes",
    //     "Fold laundry",
    //     "Complete Testing",
    //   ]
    // `)

    console.log(addScope)

    expect(scope.isDone()).toBe(true)
    expect(addScope.isDone()).toBe(true)
  })
})
