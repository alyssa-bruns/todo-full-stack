import useFetchTodos from '../hooks/use-fetch-todos'
import useDeleteTodos from "../hooks/use-delete-todos"


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
      {todos?.map((todo) => {
        return (
        <ul className="todo-list" key={todo.id} >
        <li className="edit">
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>{todo.name}</label>
            <button onClick={()=>handleDelete(todo.id)} className="destroy"></button>
          </div>
        </li>
        </ul>
        )
      })}
    </>
  )
}

export default TodoList
