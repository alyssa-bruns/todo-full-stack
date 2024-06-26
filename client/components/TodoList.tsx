import useFetchTodos from '../hooks/use-fetch-todos'
import DeleteItem from './DeleteItem'
import TodoListItem from './TodoListItem'

function TodoList() {
  const { data: todos, isPending, isError, error } = useFetchTodos()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
      <>
        {console.error(error)}
        <p>Error!</p>
      </>
    )
  }

  return (
    <>
      <ul className="todo-list">
        {todos?.map((todo) => {
          return (
            <li key={todo.id} className={todo.is_completed ? 'completed' : ''}>
              <TodoListItem {...todo} />{' '}
              {/* use spread operater to pass in the other props*/}
              <DeleteItem {...todo} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
