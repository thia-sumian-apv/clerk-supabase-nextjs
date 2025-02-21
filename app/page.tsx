'use client';
import { useEffect, useState, useMemo } from 'react';
import { useSession, useUser } from '@clerk/nextjs';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  // The `useUser()` hook will be used to ensure that Clerk has loaded data about the logged in user
  const { user } = useUser();
  // The `useSession()` hook will be used to get the Clerk session object
  const { session } = useSession();

  // Move client creation into useMemo to maintain consistent reference
  const client = useMemo(() => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        global: {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
          },
          fetch: async (url, options = {}) => {
            try {
              const clerkToken = await session?.getToken({
                template: 'supabase',
              });
              
              console.log('Clerk token generated:', !!clerkToken);
              
              if (!clerkToken) {
                console.error('No Clerk token available');
                throw new Error('Authentication token not available');
              }

              // Create headers with both API key and Authorization token
              const headers = new Headers(options?.headers);
              headers.set('Authorization', `Bearer ${clerkToken}`);
              headers.set('apikey', process.env.NEXT_PUBLIC_SUPABASE_KEY!);

              // Debug the request
              console.log('Request headers:', {
                authorization: headers.get('Authorization')?.substring(0, 20) + '...',
                apikey: headers.get('apikey')?.substring(0, 20) + '...',
              });

              const response = await fetch(url, {
                ...options,
                headers,
              });

              if (!response.ok) {
                console.error('Supabase request failed:', {
                  status: response.status,
                  statusText: response.statusText,
                  url,
                });
                // Log the response body for debugging
                const errorBody = await response.clone().text();
                console.error('Error response body:', errorBody);
              }

              return response;
            } catch (error) {
              console.error('Error in Supabase fetch:', error);
              throw error;
            }
          },
        },
      }
    );
  }, [session]);

  // This `useEffect` will wait for the User object to be loaded before requesting
  // the tasks for the logged in user
  useEffect(() => {
    if (!user) return;

    async function loadTasks() {
      setLoading(true);
      const { data, error } = await client.from('tasks').select();
      if (error) {
        console.error('Error loading tasks:', error);
        return;
      }
      if (data) setTasks(data);
      setLoading(false);
    }

    loadTasks();

    // Set up real-time subscription
    const subscription = client
      .channel('tasks-channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'tasks' },
        (payload) => {
          // Handle different types of changes
          if (payload.eventType === 'INSERT') {
            setTasks(prevTasks => [...prevTasks, payload.new]);
          }
          // Add other event types if needed (UPDATE, DELETE)
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, [user, client]);

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // Insert task into the "tasks" database
      const { data, error } = await client.from('tasks').insert({
        name,
      }).select();  // Add .select() to get the created task

      if (error) {
        console.error('Error creating task:', error);
        return;
      }

      // Update the local state with the new task
      setTasks(prevTasks => [...prevTasks, data[0]]);
      // Clear the input
      setName('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  return (
    <div>
      <h1>Tasks</h1>

      {loading && <p>Loading...</p>}

      {!loading &&
        tasks.length > 0 &&
        tasks.map((task: any) => <p key={task.id}>{task.name}</p>)}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      <form onSubmit={createTask}>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
