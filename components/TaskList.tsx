import { Task } from '../types'
import TaskRow from './TaskRow'

export default function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks?.length) {
    return <p>No tasks found</p>
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </div>
  )
} 