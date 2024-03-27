import useFetchTodos from '../hooks/use-fetch-todos'
import useDeleteTodos from "../hooks/use-delete-todos"
import useEditTodo from '../hooks/use-edit-todo'
import { useState} from 'react'
import { Todos } from '../models/todos'
import TodoListItem from './TodoListItem'

function TodoList() {
  const {data: todos, isPending, isError, error } = useFetchTodos()
  
  const deleteTodo= useDeleteTodos()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return(
      <>
      {console.error(error)}
      <p>Error!</p>
      </>
    )
  }

  const handleDelete = (id: number) => {
    deleteTodo.mutate(id)
  }

  return (
    <>
    <ul className="todo-list"  >
      {todos?.map((todo) => {
        return (
      
        <li key={todo.id} >
          <TodoListItem {...todo} /> {/* use spread operater to pass in the other props*/}
        </li>
       
        )
      })}
    </ul>
    </>
  )
}

export default TodoList
