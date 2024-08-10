import styles from './Field.module.css';

export const FieldLayout = (props) => {

  const {field, addSymbol, isGameEnded, winArr} = props;

  return (
    <div className={styles.game__field}>
      {field.map((item, index) => (
        <div
          className={`${styles.game__cell} ${isGameEnded && index === winArr[0] ? styles.winners : ''} ${isGameEnded && index === winArr[1] ? styles.winners : ''} ${isGameEnded && index === winArr[2] ? styles.winners : ''}`}
          onClick={addSymbol}
          key={index}
          id={index}>{item}</div>
      ))}
    </div>
  )
}
