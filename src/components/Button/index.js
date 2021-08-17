import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

export default function Button({ outline, onClick, children, ...rest }) {
  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        outline ? styles.outline : styles.full
      )}
      onClick={onClick}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  onClick: () => {},
};

Button.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};
