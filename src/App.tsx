import { Header } from './components/Header';
import { Input } from './components/Input';
import { Progress } from './components/Progress';
import { NoTasks } from './components/NoTasks';

import './App.css';
import './global.css';

export function App() {
  
  return (
    <main>
      <Header />
      <Input />
      <Progress />
      <NoTasks />
    </main>
  )
}
