/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const classNames = (size, bold) => {
  const classes = [];

  if (size === 'small') classes.push('text-xs tablet:text-base');
  else if (size === 'medium') classes.push('text-sm tablet:text-base');
  if (bold) classes.push('font-bold');

  return classes.join(' ');
};

const BodyText = ({ className, children, size, bold, testId, ...props }) => (
  <p
    data-testid={testId}
    className={`text-black ${classNames(size, bold)} ${className}`}
    {...props}
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
  testId: PropTypes.string,
};

BodyText.defaultProps = {
  className: '',
  size: 'medium',
  bold: false,
  children: '',
  testId: '',
};

export default BodyText;
