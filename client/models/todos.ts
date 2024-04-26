export interface Todos {
  id: number
  name: string
  is_active: boolean
  is_completed: boolean
  priority: number
}

export interface Todo {
  name: string
}

export interface TodoPlusId {
  id: number
  name: string
}

export interface CompletedPlusId {
  id: number
  is_completed: boolean
}
