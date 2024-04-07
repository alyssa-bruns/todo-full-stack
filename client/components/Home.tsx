import AddTodo from './AddTodo'
import TodoList from './TodoList'

function Home() {
  return (
    <>
      <section className="main">
        <AddTodo />
        <TodoList />
      </section>
    </>
  )
}

export default Home
