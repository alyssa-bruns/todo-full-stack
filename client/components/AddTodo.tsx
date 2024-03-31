import { useState } from 'react'
import useAddTodo from '../hooks/use-add-todos'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const mutation = useAddTodo()

  const handleChange = (e: React.ChangeEvent) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    console.log(newTodo)
    e.preventDefault()
    mutation.mutate({ name: newTodo })
    setNewTodo('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            aria-label="add a task"
            onChange={handleChange}
            value={newTodo}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </form>
      </div>
    </>
  )
}

export default AddTodo
