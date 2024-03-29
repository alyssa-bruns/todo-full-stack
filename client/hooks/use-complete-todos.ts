import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CompletedPlusId } from "../models/todos"
import { completeTodo } from "../apis/apiClient"


export default function useCompleteTodo() {
    const queryClient = useQueryClient()
return useMutation({
    mutationFn: async (updatedTodo: CompletedPlusId) => completeTodo(updatedTodo),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['todos']})
}
})
}
