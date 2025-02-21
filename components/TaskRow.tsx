'use client'

import { deleteTask, updateTask } from '../app/actions/tasks'
import { Task } from '../types'

export default function TaskRow({ task }: { task: Task }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={task.is_done}
        onChange={(e) => updateTask(task.id, e.target.checked)}
      />
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
} 