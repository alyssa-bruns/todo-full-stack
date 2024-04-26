import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from '../models/todos'
import { addTodo } from '../apis/apiClient'

export default function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newTodo: Todo) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

