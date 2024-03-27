import useDeleteTodos from "../hooks/use-delete-todos"
import {useParams} from 'react-router-dom'

function EditTodo(){
    const params = useParams()
    const id = Number(params.id)

}

export default EditTodo