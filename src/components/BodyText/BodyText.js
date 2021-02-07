import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './BodyText.module.scss';

const BodyText = ({ className, children, size, bold }) => (
  <p
    className={classnames(
      styles.bodyText,
      { [styles.medium]: size === 'medium' },
      { [styles.small]: size === 'small' },
      { [styles.bold]: bold },
      className
    )}
  >
    {children}
  </p>
);

BodyText.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
    PropTypes.object,
  ]),
};

BodyText.defaultProps = {
  className: '',
  size: 'medium',
  bold: false,
  children: '',
};

export default BodyText;
