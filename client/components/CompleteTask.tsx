import { Todos } from "../models/todos"
import {useCompleteTodo, useIncompleteTodo} from "../hooks/use-complete-todos"
import { useState } from "react"


function CompleteTask(props: Todos) {
    const completeTask = useCompleteTodo()
    const incompleteTask = useIncompleteTodo()
    const [isCompleted, setIsCompleted] = useState(props.is_completed)

   
       const handleCompletedClick = () => {
        setIsCompleted(!isCompleted)
        if (!isCompleted){
            completeTask.mutate({ id: props.id, is_completed: !isCompleted })
        } else {
            incompleteTask.mutate({ id: props.id, is_completed: isCompleted })
        }
        
        console.log(props.name, props.is_completed)
      }
    
      console.log(props)
    return(
        <input 
            type="checkbox"
            // className="toggle"
            onChange={handleCompletedClick} 
            checked={isCompleted}
            />
    )
}

export default CompleteTask