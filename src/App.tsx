import { useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Progress } from './components/Progress';
import { NoTasks } from './components/NoTasks';
import { Task } from './components/Task';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import './global.css';

export function App() {
  interface TaskModel {
    id: string;
    content: string;
    isComplete: number;
  }

  const [tasks, setTasks] = useState<TaskModel[]>([
    {
      id: uuidv4(),
      content: 'Lorem ipsum dolor sit amet',
      isComplete: 0
    },
    {
      id: uuidv4(),
      content: 'Lorem ipsum dolor sit amet proferetur',
      isComplete: 0
    },
    {
      id: uuidv4(),
      content: 'Lorem ipsum dolor sit amet quo totum continetur',
      isComplete: 0
    }
  ]);

  function completeTask(isComplete: number, id: string) {
    let updatedTasks = tasks.map(task => {
      return task.id === id ? { 
        id: task.id, 
        content: task.content, 
        isComplete: task.isComplete === 0 ? 1 : 0,
      } : task
    })
    console.log(updatedTasks);
    setTasks(updatedTasks);
    console.log(tasks);
  }

  return (
    <main>
      <Header />
      <Input />
      <Progress />

      { 
        tasks.length === 0 
          ? <NoTasks /> 
          : tasks.map(task => { 
              return <Task
                key={task.id}
                id={task.id} 
                content={task.content} 
                isComplete={task.isComplete}
                onCompleteTask={completeTask}
              />
            }
          ) 
        }
    </main>
  )
}
