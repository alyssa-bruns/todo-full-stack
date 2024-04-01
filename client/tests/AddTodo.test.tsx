//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// https://testing-library.com/docs/user-event/intro

import './setup.ts'
import AddTodo from '../components/AddTodo.tsx'

describe('<AddTodo/>', async () => {
  it('should add a todo when the user hits enter')
  render(<AddTodo />)
  const user = userEvent.setup()

  const enter = screen.getByRole('onSubmit')
  await user
  const TodoList
})
