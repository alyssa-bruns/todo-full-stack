import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editTodo } from '../apis/apiClient'
import { TodoPlusId } from '../models/todos'

export default function useEditTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (updatedTodo: TodoPlusId) => editTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
