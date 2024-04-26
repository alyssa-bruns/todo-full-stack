import { Todos } from '../../client/models/todos'
import connection from './connection'

const db = connection

export function getTodos(): Promise<Todos[]> {
  return db('todos').select()
}

export function getTodoById(id: number) {
  return db('todos').select().where({ id })
}

export function createTodo(newTodo: Todos) {
  return db('todos').insert(newTodo)
}

export function deleteTodo(id: number) {
  return db('todos').select().where({ id }).delete()
}

export function updateTodoName(id: number, name: string) {
  return db('todos').select().where({ id }).update({ name })
}

export function updatePriority(id: number, priority: number) {
  return db('todos').select().where({ id }).update({ priority })
}
export function searchTodoName(name: string) {
  return db('todos').select().where({ name })
}

export function searchPriority(priority: number) {
  return db('todos').select().where({ priority })
}

export function markTodoComplete(id: number) {
  return db('todos').select().where({ id }).update({ is_completed: 1 })
}

export function markTodoIncomplete(id: number) {
  return db('todos').select().where({ id }).update({ is_completed: 0 })
}

export function markTodoActive(id: number) {
  return db('todos').select().where({ id }).update({ is_active: 1 })
}

export function markTodoInactive(id: number) {
  return db('todos').select().where({ id }).update({ is_active: 0 })
}
