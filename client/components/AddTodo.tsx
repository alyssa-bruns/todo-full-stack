// eslint-disable-next-line no-unused-vars

import { useState } from 'react'



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
    </>
  )
}

export default AddTodo
