import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, label, type, required }) {
  return (
    <input
      aria-label={label}
      className="input-field"
      name={name}
      id={name}
      type={type}
      placeholder={label}
      required={required}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  required: false,
};

export default Input;
