/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export const Button = ({ className, children, variant, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames(
        className,
        variant === 'outline' && 'border-primary-dark text-primary-dark',
        variant === 'condensed' && 'bg-primary-dark text-white',
        'font-semibold p-3 border rounded transition ease-in-out'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
