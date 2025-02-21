'use server'

import { createClerkSupabaseClientSsr } from '../../lib/supabase'
import { revalidatePath } from 'next/cache'

export async function addTask(formData: FormData) {
  const client = createClerkSupabaseClientSsr()
  const name = formData.get('name')

  try {
    const { error } = await client.from('tasks').insert({ name })
    
    if (error) {
      throw error
    }

    revalidatePath('/')
  } catch (error) {
    console.error('Error adding task:', error)
    throw new Error('Failed to add task')
  }
}

export async function deleteTask(taskId: number) {
  const client = createClerkSupabaseClientSsr()

  try {
    const { error } = await client.from('tasks').delete().eq('id', taskId)
    
    if (error) {
      throw error
    }

    revalidatePath('/')
  } catch (error) {
    console.error('Error deleting task:', error)
    throw new Error('Failed to delete task')
  }
}

export async function updateTask(taskId: number, isDone: boolean) {
  const client = createClerkSupabaseClientSsr()

  try {
    const { error } = await client
      .from('tasks')
      .update({ is_done: isDone })
      .eq('id', taskId)
    
    if (error) {
      throw error
    }

    revalidatePath('/')
  } catch (error) {
    console.error('Error updating task:', error)
    throw new Error('Failed to update task')
  }
} 