import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CompletedPlusId } from '../models/todos'
import { completeTodo, incompleteTodo } from '../apis/apiClient'

export function useCompleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (updatedTodo: CompletedPlusId) =>
      completeTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useIncompleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (updatedTodo: CompletedPlusId) =>
      incompleteTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
