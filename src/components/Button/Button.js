import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const noop = () => {};

const Button = ({
  onClick,
  secondary,
  className,
  rounded,
  small,
  medium,
  large,
  children,
  icon,
}) => (
  <button
    type="button"
    className={classnames(
      styles.buttonDefault,
      className && className,
      secondary && styles.secondary,
      rounded && styles.rounded,
      small && styles.small,
      medium && styles.medium,
      large && styles.large
    )}
    onClick={onClick}
  >
    {icon && <icon />}
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  onClick: noop,
  className: '',
  rounded: false,
  small: false,
  medium: false,
  large: false,
  children: '',
  icon: null,
  secondary: false,
};

export default Button;
