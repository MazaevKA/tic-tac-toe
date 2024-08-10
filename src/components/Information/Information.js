import {InformationLayout} from "./InformationLayout";


export const Information = (props) => {

  const {isDraw, isGameEnded, currentPlayer} = props;

  const isDrawText = () => {
    if (isDraw === true) {
      return 'Ничья';
    } else if (isDraw === false && isGameEnded === true) {
      return `Победа: ${currentPlayer}`;
    } else if (isDraw === false && isGameEnded === false) {
      return `Ходит: ${currentPlayer}`;
    }
  }

  return <InformationLayout isDrawText={isDrawText} />
};
