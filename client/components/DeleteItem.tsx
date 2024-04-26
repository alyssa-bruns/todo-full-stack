import useDeleteTodos from '../hooks/use-delete-todos'
import { Todos } from '../models/todos'

function DeleteItem(props: Todos) {
  const deleteTodo = useDeleteTodos()

  const handleDelete = (id: number) => {
    deleteTodo.mutate(id)
  }
  return (
    <button
      aria-label="delete task"
      type="button"
      onClick={() => handleDelete(props.id)}
      className="destroy"
    ></button>
  )
}

export default DeleteItem
