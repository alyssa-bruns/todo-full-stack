import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as todosDb from '../db/db'
import server from '../server'

vi.mock('../db/db.ts')

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

describe('POST api/v1/todos', () => {
  it('should add a new todo', async () => {
    const newTodo = {
      id: 3,
      name: 'Walk dog',
      priority: 1,
      is_active: true,
      is_completed: false,
    }

    vi.mocked(todosDb.getTodos).mockResolvedValue(mockTodos)
    vi.mocked(todosDb.createTodo).mockResolvedValue([3])
    const addTodoSpy = vi.spyOn(todosDb, 'createTodo')

    console.log(newTodo)

    const res = await request(server).post('/api/v1/todos').send(newTodo)

    expect(res.statusCode).toBe(200)
    expect(addTodoSpy).toHaveBeenLastCalledWith(newTodo)
  })
})
