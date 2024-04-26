import * as db from './db.js'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection.ts'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('createTodo', () => {
  it('should add a new todo', async () => {
    await db.createTodo({
      id: 100,
      name: 'Finish tests',
      is_active: true,
      is_completed: false,
      priority: 1,
    })
    const allTodos = await db.getTodos()
    // console.log(allTodos)
    expect(allTodos).toHaveLength(4)
  })
})

afterAll(() => {
  connection.destroy()
})
