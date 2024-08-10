import styles from "./Game.module.css";
import {Field} from "./components/Field/Field";
import {Information} from "./components/Information/Information";
import PropTypes from "prop-types";

export const GameLayout = (props) => {

  const {
    currentPlayer,
    setCurrentPlayer,
    isGameEnded,
    setIsGameEnded,
    isDraw,
    setIsDraw,
    field,
    setField,
    winArr,
    setWinArr,
    WIN_PATTERNS,
  } = props;

  GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    isDraw: PropTypes.bool,
    setIsDraw: PropTypes.func,
    field: PropTypes.arrayOf(PropTypes.string),
    setField: PropTypes.func,
    winArr: PropTypes.arrayOf(PropTypes.number),
    setWinArr: PropTypes.func,
    WIN_PATTERNS: PropTypes.array,
  };

  const onButtonReset = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField (
      [
        '', '', '',
        '', '', '',
        '', '', '',
      ]
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <Information
          isDraw={isDraw}
          isGameEnded={isGameEnded}
          currentPlayer={currentPlayer}/>
        <Field
          WIN_PATTERNS={WIN_PATTERNS}
          field={field}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setField={setField}
          setIsDraw={setIsDraw}
          winArr={winArr}
          setWinArr={setWinArr}
        />
        <div className={styles.game__reset}>
          <button className={`${styles['game__btn-reset']} + ' ' + ${isGameEnded ? styles.winners : ''}`} type="submit" onClick={onButtonReset}>Начать сначала</button>
        </div>
      </div>
    </div>
  );
};
