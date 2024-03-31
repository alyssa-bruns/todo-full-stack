import { deleteTodo } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteTodos() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
