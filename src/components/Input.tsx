import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Input.module.css';

interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    newTaskText ? addTask(newTaskText) : console.log('Input is empty');
    setNewTaskText('');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={ styles.formWrapper }>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        name="taskInput"
        onChange={handleChange}
        value={newTaskText}
        required
      />
      <button type="submit">
        <p>Criar</p>
        <PlusCircle 
          weight="bold" 
          size={20} 
          className={ styles.middleIconInButton }
        />
      </button>
    </form>
  );
}