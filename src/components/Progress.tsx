import styles from './Progress.module.css';

interface ProgressProps {
  total: number,
  completedTotal: number
}

export function Progress({total, completedTotal}: ProgressProps) {
  return (
    <article className={ styles.articleWrapper }>
      <div className={ styles.data }>
        <p className={ styles.blueText }>Tarefas criadas</p>
        <p className={ styles.chip }>{ total }</p>
      </div>

      <div className={ styles.data }>
        <p className={ styles.purpleText }>Concluídas</p>
        <p className={ styles.chip }>{`${completedTotal} de ${total}`}</p>
      </div>
    </article>
  );
}