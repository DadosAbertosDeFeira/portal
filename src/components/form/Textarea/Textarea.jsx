import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ name, label, required }) {
  return (
    <textarea
      className="input-field h-20"
      aria-label={label}
      placeholder={label}
      name={name}
      id={name}
      required={required}
    />
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  required: false,
};

export default Textarea;
