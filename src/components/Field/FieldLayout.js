import styles from './Field.module.css';
import PropTypes from "prop-types";

export const FieldLayout = (props) => {

  const {field, addSymbol, isGameEnded, winArr} = props;

  FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string),
    addSymbol: PropTypes.func,
    isGameEnded: PropTypes.bool,
    winArr: PropTypes.arrayOf(PropTypes.number),
  }

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
