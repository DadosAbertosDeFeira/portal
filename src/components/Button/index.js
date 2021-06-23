import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Button({ outline, onClick, children }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      id={outline ? styles.outline : styles.full}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
};

Button.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
