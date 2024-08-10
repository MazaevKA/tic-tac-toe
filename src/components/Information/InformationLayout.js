import styles from './Information.module.css';

export const InformationLayout = (props) => {

  const { isDrawText } = props;

  return <div className={styles.game__info}>{isDrawText()}</div>
}
