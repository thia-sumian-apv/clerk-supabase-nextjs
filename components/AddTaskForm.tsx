'use client'

import { addTask } from '../app/actions/tasks'

export default function AddTaskForm() {
  return (
    <form action={addTask}>
      <input
        type="text"
        name="name"
        placeholder="Enter new task"
        required
        autoFocus
      />
      <button type="submit">Add</button>
    </form>
  )
} 