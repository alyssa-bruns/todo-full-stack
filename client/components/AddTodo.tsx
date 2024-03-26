// eslint-disable-next-line no-unused-vars
import Todos from '../models/todos'
import { useState } from 'react'

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
]
// ] as Todos[]

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: React.ChangeEvent) => {
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  const handleSubmit = (e: React.FormEvent) => {
    console.log(newTodo)
    e.preventDefault()
    setNewTodo('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={newTodo}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </form>
      </div>
      <div>
        {todos.map((todo) => {
          return <p key={todo.id}>{todo.name}</p>
        })}
      </div>
    </>
  )
}

export default AddTodo
