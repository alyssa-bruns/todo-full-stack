import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTodo } from "../apis/apiClient";
import { Todo, TodoPlusId } from "../models/todos";


export default function useEditTodo() {
    const queryClient = useQueryClient()
return useMutation({
    mutationFn: async (updatedTodo: TodoPlusId) => editTodo(updatedTodo),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['todos']})
    }

})
}

// export default function useEditLocation() {
//     const queryClient = useQueryClient()
  
//     return useMutation({
//       mutationFn: async (data: Location) => {
//         const { id, name, description } = data
//         await request.patch(`/api/v1/locations/${id}`).send({ name, description })
//       },
//       onSuccess: (_, { id }: Location) => {
//         queryClient.invalidateQueries({ queryKey: ['location', id] })
//       },
//     })
//   }
  