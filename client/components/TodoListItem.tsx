// import useFetchTodos from '../hooks/use-fetch-todos'
import useEditTodo from '../hooks/use-edit-todo'
import { useState} from 'react'
import { Todos } from '../models/todos'
import CompleteTask from './CompleteTask'

 function TodoListItem(props: Todos) {
    const editTodo = useEditTodo()
    const [updatedTodo, setUpdatedTodo] = useState(props.name)
    const [isEditMode, setIsEditMode] = useState(false)
    

    const handleDoubleClick = (e:React.MouseEvent) => {
      e.preventDefault()
      setIsEditMode(true)
    }
  
    const handleCancelClick = (e:React.MouseEvent) => {
      e.preventDefault()
      setIsEditMode(false)
    }
    const handleChange = (e: React.ChangeEvent) => {
      setUpdatedTodo(e.target.value)
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      console.log(updatedTodo)
      e.preventDefault()
      editTodo.mutate({id: props.id, name: updatedTodo})
      setUpdatedTodo('')
      setIsEditMode(false)

    }

    if(isEditMode){
     return( <>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
      <form onSubmit={handleSubmit}>
        <input
              value = {updatedTodo}
              onChange={handleChange}
              className="new-todo"
              placeholder={updatedTodo}
            />
      </form>
      
      </>
     )
    }
    return(
      <div className="view">
          <CompleteTask {...props} />
        <label onDoubleClick={handleDoubleClick}>{props.name}</label>
      </div>
    )
  
  }

export default TodoListItem