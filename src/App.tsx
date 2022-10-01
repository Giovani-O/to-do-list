import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Header } from './components/Header';

import './global.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />

      <article>

      </article>
    </main>
  )
}
