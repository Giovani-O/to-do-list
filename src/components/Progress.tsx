import styles from './Progress.module.css';

export function Progress() {
  return (
    <article className={ styles.articleWrapper }>
      <div className={ styles.data }>
        <p className={ styles.blueText }>Tarefas criadas</p>
        <p className={ styles.chip }>{0}</p>
      </div>

      <div className={ styles.data }>
        <p className={ styles.purpleText }>Concluídas</p>
        <p className={ styles.chip }>{'0 de 0'}</p>
      </div>
    </article>
  );
}