import useFetchTodos from '../hooks/use-fetch-todos'
import Todos from '../models/todos'

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
        return <p key={todo.id}>{todo.name}</p>
      })}
    </>
  )
}

export default TodoList
