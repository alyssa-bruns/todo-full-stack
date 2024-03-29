import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

// GET /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todo = await db.getTodos()
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// GET /api/v1/todos/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.getTodoById(id)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST /api/v1/todos
router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await db.createTodo(newTodo)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// DELETE /ap1/v1/todos
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.deleteTodo(id)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//PATCH /ap1/v1/todos
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { name } = req.body
  try{
    const todo = await db.updateTodoName(id, name)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})
export default router
