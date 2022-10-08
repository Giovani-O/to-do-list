import { Trash, CheckCircle, Circle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';


interface Tasks {
  id: string;
  content: string;
  isComplete: number;
  onCompleteTask: (completed: number, id: string) => void;
}

export function Task( { id, content, isComplete, onCompleteTask }: Tasks) {
  function handleCheckboxState() {
    onCompleteTask(isComplete, id);
  }

  return (
    <article className={ styles.articleWrapper }>
      <div className={ styles.checkboxContainer } onClick={ handleCheckboxState }>
        {
          isComplete === 0 
            ? <Circle size={24} weight="bold" color="var(--blue-300)"/>
            : <CheckCircle size={24} weight="fill" color="var(--purple-500)" />
        }
      </div>

      <div className={ styles.contentContainer }>
        <p className={ isComplete === 0 ? styles.regularText : styles.textLineThrough }>{ content }</p>
      </div>

      <div className={ styles.deleteContainer}>
        <Trash size={24} color="var(--gray-300)"/>
      </div>
    </article>
  );
}