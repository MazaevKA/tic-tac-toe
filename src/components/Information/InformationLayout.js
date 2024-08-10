import styles from './Information.module.css';
import PropTypes from "prop-types";

export const InformationLayout = (props) => {
  const {isDrawText} = props;

  InformationLayout.propTypes = {
    isDrawText: PropTypes.func,
  }

  return <div className={styles.game__info}>{isDrawText()}</div>
}
