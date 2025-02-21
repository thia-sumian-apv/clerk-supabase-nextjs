import AddTaskForm from '../components/AddTaskForm'
import TaskList from '../components/TaskList'
import { createClerkSupabaseClientSsr } from '../lib/supabase'

export default async function Home() {
  const client = createClerkSupabaseClientSsr()
  
  // Fetch tasks server-side
  const { data: tasks, error } = await client.from('tasks').select()
  if (error) {
    throw error
  }

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </div>
  )
}
