import { useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Progress } from './components/Progress';
import { NoTasks } from './components/NoTasks';
import { Task } from './components/Task';

import './App.css';
import './global.css';

export function App() {
  interface TaskModel {
    id: number;
    content: string;
    isComplete: boolean;
  }

  const [tasks, setTasks] = useState<TaskModel[]>([
    {
      id: 0,
      content: 'Lorem ipsum dolor sit amet',
      isComplete: false
    }
  ]);

  return (
    <main>
      <Header />
      <Input />
      <Progress />

      { tasks.length === 0 ? <NoTasks /> : <Task /> }
    </main>
  )
}
