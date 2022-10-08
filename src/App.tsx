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

  const [tasks, setTasks] = useState<TaskModel[]>([]);

  function completeTask(isComplete: number, id: string) {
    let updatedTasks = tasks.map(task => {
      return task.id === id ? { 
        id: task.id, 
        content: task.content, 
        isComplete: task.isComplete === 0 ? 1 : 0,
      } : task
    })
    setTasks(updatedTasks);
  }

  function addTask(task: string) {
    const newTask: TaskModel = {
      id: uuidv4(),
      content: task,
      isComplete: 0,
    }
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks([...tasksWithoutDeletedOne]);
  }

  return (
    <main>
      <Header />
      <Input addTask={addTask}/>
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
                onDeleteTask={deleteTask}
              />
            }
          ) 
        }
    </main>
  )
}
