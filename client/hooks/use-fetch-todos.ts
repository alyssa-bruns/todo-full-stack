import { fetchTodos } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

export default function useFetchTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => fetchTodos(),
  })
}
