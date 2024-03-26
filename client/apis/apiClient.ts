import request from 'superagent'
import Todos from '../models/todos'

const rootUrl = '/api/v1/todos'

export async function fetchTodos(): Promise<Todos[]> {
  const res = await request.get(rootUrl)
  return res.body as Todos[]
}

export async function addTodo(newTodo: Todos): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}

export async function deleteTodo(id: number) {
  await request.delete(rootUrl + '/' + id)
}
