import { useState } from "react"
import { completeTodo } from "../apis/apiClient"
import { Todos } from "../models/todos"
import useCompleteTodo from "../hooks/use-complete-todos"


function CompleteTask(props: Todos) {
    const completeTask = useCompleteTodo()
    const [isCompleted, setIsCompleted] = useState(false)


       const handleCompletedClick = (e:React.MouseEvent) => {
        e.preventDefault()
        setIsCompleted(true)
        completeTask.mutate(props.id)
      }
    return(
        <>
        <input onClick={()=>handleCompletedClick(props.id)} className="toggle" type="checkbox"/>
        </>
    )
}

export default CompleteTask