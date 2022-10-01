import clipboard  from './../assets/clipboard.svg';
import styles from './NoTasks.module.css';

export function NoTasks() {
  return (
    <article className={ styles.articleWrapper }>
      <div>
        <img src={ clipboard } />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br />Crie tarefas e organize seus itens a fazer</p>
      </div>
    </article>
  );
}