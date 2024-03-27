import useFetchTodos from '../hooks/use-fetch-todos'
import useDeleteTodos from "../hooks/use-delete-todos"
import useEditTodo from '../hooks/use-edit-todo'
import { useState} from 'react'
import { Todos } from '../models/todos'

function TodoListItem(props: Todos) {
    const editTodo = useEditTodo()
    const [updatedTodo, setUpdatedTodo] = useState(props.name)
    const [isEditMode, setIsEditMode] = useState(false)
    const handleDoubleClick = (e:React.MouseEvent) => {
      e.preventDefault()
      console.log(e)
      setIsEditMode(true)
      // editTodo.mutate({id: props.id, name: updatedTodo})
    }
  
    const handleCancelClick = (e:React.MouseEvent) => {
      e.preventDefault()
      setIsEditMode(false)
    }
    if(isEditMode){
     return( <>
      <button onClick={handleCancelClick}>Cancel</button>
      <p>Edit Mode</p>
      </>
     )
    }
    return(
      <div className="view">
        <input className="toggle" type="checkbox"/>
        <label onDoubleClick={handleDoubleClick}>{props.name}</label>
        {/* <button onClick={()=>handleDelete(todo.id)} className="destroy"></button> */}
      </div>
    )
  
  }

  export default TodoListItem