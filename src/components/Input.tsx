import { FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Input.module.css';

export function Input() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={ styles.formWrapper }>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar <PlusCircle weight="bold" size={16} className={ styles.middleIcon }/></button>
    </form>
  );
}