import {FieldLayout} from "./FieldLayout";
import PropTypes from "prop-types";

export const Field = (props) => {

  const {
    WIN_PATTERNS,
    field,
    setField,
    isGameEnded,
    setIsGameEnded,
    currentPlayer,
    setCurrentPlayer,
    setIsDraw,
    winArr,
    setWinArr
  } = props;

  Field.propTypes = {
    WIN_PATTERNS: PropTypes.array,
    field: PropTypes.arrayOf(PropTypes.string),
    setField: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    setIsDraw: PropTypes.func,
    winArr: PropTypes.arrayOf(PropTypes.number),
    setWinArr: PropTypes.func,
  }

  const addSymbol = (event) => {
    setField([...field])

    if (event.target.innerText === '' && isGameEnded === false) {
      field[event.target.id] = currentPlayer
      setField(field)

      if (checkWinner(field, currentPlayer)) {
        const checkWinArr = (field, currentPlayer, WIN_PATTERNS) => {
          WIN_PATTERNS.forEach((item, index) => {
            if(item.every((index) => field[index] === currentPlayer)) {
              setWinArr([...item])
            }
          });
        };
        checkWinArr(field, currentPlayer, WIN_PATTERNS);
        setIsGameEnded(true)
        return
      }

      if (isGameEnded !== true) {
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
      }

      setIsDraw(!(field.some(item => item === '')))
    }
  }

  const checkWinner = (newField, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((index) => field[index] === currentPlayer))
  }

  return <FieldLayout addSymbol={addSymbol} field={field} setField={setField} isGameEnded={isGameEnded} winArr={winArr} />
};
