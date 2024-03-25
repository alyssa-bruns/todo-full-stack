/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, name: 'Unpack boxes', is_active: 1, priority: 4 },
    { id: 2, name: 'Shop for groceries', is_active: 0, priority: 2 },
    { id: 3, name: 'Make dinner', is_active: 0, priority: 2 },
  ])
}
