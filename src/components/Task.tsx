import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <article className={ styles.articleWrapper }>
      <div className={ styles.checkboxContainer }>
        <div className={ styles.customCheckbox }>
          <input type="checkbox" id="completedCheckbox"/>
          <label htmlFor="completedCheckbox"></label>
        </div>
      </div>

      <div className={ styles.contentContainer }>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta doloremque adipisci, cupiditate iste commodi! Voluptatibus, dolore. Doloremque repellat excepturi doloribus voluptatum tempora impedit ut praesentium nobis, qui, dolores quos!</p>
      </div>

      <div className={ styles.deleteContainer}>
        <Trash size={24} color="var(--gray-300)"/>
      </div>
    </article>
  );
}