import {FieldLayout} from "./FieldLayout";

export const Field = (props) => {

  const {
    WIN_PATTERNS,
    field,
    isGameEnded,
    setIsGameEnded,
    currentPlayer,
    setCurrentPlayer,
    setField,
    setIsDraw,
    winArr,
    setWinArr,
  } = props;

  const addSymbol = (event) => {
    const newField = field;

    if (event.target.innerText === '' && isGameEnded === false) {
      newField[event.target.id] = currentPlayer
      setField(newField)

      if (checkWinner(newField, currentPlayer)) {
        const checkWinArr = (newField, currentPlayer, WIN_PATTERNS) => {
          WIN_PATTERNS.forEach((item, index) => {
            if(item.every((index) => field[index] === currentPlayer)) {
              setWinArr([...item])
            }
          });
        };
        checkWinArr(newField, currentPlayer, WIN_PATTERNS);
        setIsGameEnded(true)
        return
      }

      if (isGameEnded !== true) {
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
      }

      setIsDraw(!(newField.some(item => item === '')))
    }
  }

  const checkWinner = (newField, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((index) => field[index] === currentPlayer))
  }

  return <FieldLayout addSymbol={addSymbol} field={field} setField={setField} isGameEnded={isGameEnded} winArr={winArr} />
};
