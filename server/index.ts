import server from './server.ts'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('API server listening on port', PORT)
})
