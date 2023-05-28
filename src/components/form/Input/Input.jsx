/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

function Input({ name, label, control, rules }) {
  const { field: input, fieldState: state } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    <label htmlFor={name}>
      <input
        className="w-full p-2 pl-4 bg-white rounded border text-gray-dark font-medium "
        placeholder={label}
        aria-errormessage={state.error?.message}
        aria-invalid={state.invalid}
        aria-label={label}
        {...input}
      />

      {state.error && (
        <span
          key={state.error}
          className="text-alert text-sm anima-input-error-message"
        >
          {state.error.message}
        </span>
      )}
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  rules: PropTypes.objectOf(PropTypes.any),
};

Input.defaultProps = {
  rules: {},
};

export { Input };
