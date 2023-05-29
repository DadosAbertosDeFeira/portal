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
        'font-semibold p-3 rounded transition ease-in-out flex justify-center items-center',
        variant === 'outline' && 'border border-primary-dark text-primary-dark',
        variant === 'condensed' && 'bg-primary-dark text-white'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
