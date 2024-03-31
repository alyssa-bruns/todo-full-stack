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

// export function useCreatePuppy() {
//     const client = useQueryClient()

//     return useMutation({
//       mutationFn: async ({ puppy }: { puppy: PuppyData }) => {
//         const res = await request.post('/api/v1/puppies').send(puppy)
//         return res.body as { id: number; location: string }
//       },
//       onSuccess: () => {
//         client.invalidateQueries({ queryKey: ['puppies'] })
//       },
//     })
//   }
