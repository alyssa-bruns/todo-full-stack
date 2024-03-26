import Todos from '../models/todos'

const todos = [
  {
    id: 1,
    name: 'wash dishes',
    is_completed: false,
    is_active: false,
    priority: 3,
  },
  { id: 2, name: 'vacuum', is_completed: false, is_active: false, priority: 5 },
  {
    id: 3,
    name: 'fold laundry',
    is_completed: false,
    is_active: false,
    priority: 4,
  },
] as Todos[]

function TodoList() {
  return (
    <>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.name}</p>
      })}
    </>
  )
}

export default TodoList
