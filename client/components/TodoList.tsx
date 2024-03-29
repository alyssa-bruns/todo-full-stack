import useFetchTodos from '../hooks/use-fetch-todos'
import CompleteTask from './CompleteTask'
import DeleteItem from './DeleteItem'
import TodoListItem from './TodoListItem'

function TodoList() {
  const {data: todos, isPending, isError, error } = useFetchTodos()

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

 
  return (
    <>
    <ul className="todo-list"  >
      {todos?.map((todo) => {
        return (
      
        <li key={todo.id} >
          <CompleteTask />
          <TodoListItem {...todo} /> {/* use spread operater to pass in the other props*/}
          <DeleteItem {...todo} />
        </li>
       
        )
      })}
    </ul>
    </>
  )
}

export default TodoList
