import {InformationLayout} from "./InformationLayout";
import PropTypes from "prop-types";


export const Information = (props) => {

  const {isDraw, isGameEnded, currentPlayer} = props;

  Information.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
  }

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
