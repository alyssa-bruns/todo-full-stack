import useFetchTodos from '../hooks/use-fetch-todos'

// const todos = [
//   {
//     id: 1,
//     name: 'wash dishes',
//     is_completed: false,
//     is_active: false,
//     priority: 3,
//   },
//   { id: 2, name: 'vacuum', is_completed: false, is_active: false, priority: 5 },
//   {
//     id: 3,
//     name: 'fold laundry',
//     is_completed: false,
//     is_active: false,
//     priority: 4,
//   },
// ] as Todos[]



function TodoList() {
  const {data: todos, isPending, isError, error } = useFetchTodos()

  if (isPending) {
    <p>Loading...</p>
  }

  if (isError) {
    return(
      <>
      {console.error(error)}
      <p>Error!</p>
      </>
    )
  }

  console.log(todos)
  return (
    <>
      {todos?.map((todo) => {
        return (
        <ul className="todo-list" key={todo.id} >
        <li className="edit">
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>{todo.name}</label>
            <button className="destroy"></button>
          </div>
        </li>
        </ul>
        )
      })}
    </>
  )
}

export default TodoList
