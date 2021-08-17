import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

export default function Button({
  className,
  outline,
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        outline ? styles.outline : styles.full,
        className
      )}
      onClick={onClick}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  outline: false,
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};
