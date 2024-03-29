import request from 'superagent'
import { Todos, Todo, TodoPlusId, CompletedPlusId } from '../models/todos'

const rootUrl = '/api/v1/todos'

export async function fetchTodos(): Promise<Todos[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(newTodo: Todo): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}

export async function deleteTodo(id: number) {
  await request.delete(rootUrl + '/' + id)
}

export async function editTodo(data: TodoPlusId) {
  const {id, name} = data
await request.patch(rootUrl + '/' + id).send({name})
}

export async function completeTodo(data: CompletedPlusId) {
  const {id, is_completed} = data
  await request.patch(rootUrl + '/' + id).send({is_completed})
}
