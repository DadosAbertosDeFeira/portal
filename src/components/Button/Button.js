/* eslint-disable react/jsx-props-no-spreading */
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
  icon: Icon,
  typeText,
  ...props
}) => (
  <button
    data-testid="button"
    type="button"
    className={classnames(
      styles.buttonDefault,
      secondary && styles.secondary,
      rounded && styles.rounded,
      small && styles.small,
      medium && styles.medium,
      large && styles.large,
      typeText && styles.typeText,
      className
    )}
    onClick={onClick}
    {...props}
  >
    {Icon && <Icon className={styles.buttonIcon} />}
    <span className={classnames(Icon && styles.buttonWithIcon)}>
      {children}
    </span>
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
  typeText: PropTypes.bool,
};

Button.defaultProps = {
  onClick: noop,
  className: '',
  rounded: false,
  small: false,
  medium: true,
  large: false,
  children: '',
  icon: null,
  secondary: false,
  typeText: false,
};

export default Button;
