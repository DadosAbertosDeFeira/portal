import { fireEvent, render, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';

describe('input', () => {
  const makeSut = ({
    useFormProps,
    rules,
    name = 'input',
    label = 'input',
  }) => {
    const App = () => {
      const form = useForm(useFormProps);
      return (
        <Input name={name} label={label} control={form.control} rules={rules} />
      );
    };

    return render(<App />);
  };

  it('should renders Input component with required props', () => {
    const { getByPlaceholderText, container } = makeSut({
      name: 'username',
      label: 'Username',
    });

    const input = getByPlaceholderText('Username');

    expect(container).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toBeInTheDocument();
  });

  it('should update value of Input component', () => {
    const { getByLabelText } = makeSut({
      name: 'password',
      label: 'Password',
      rules: { required: true },
    });

    const input = getByLabelText('Password');

    fireEvent.input(input, { target: { value: 'password123' } });

    expect(input.value).toBe('password123');
  });

  it('should display error message of Input component', async () => {
    const { getByLabelText, getByText } = makeSut({
      name: 'email',
      label: 'Email',
      rules: { required: 'email is required' },
      useFormProps: { mode: 'onBlur' },
    });

    const input = getByLabelText('Email');

    await waitFor(() => fireEvent.blur(input));

    const errorMessage = getByText(/email is required/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should does not display error message when input is valid', async () => {
    const { getByPlaceholderText, queryByText } = makeSut({
      name: 'age',
      label: 'Age',
      rules: {
        validate: {
          min: (v) => parseInt(v, 10) >= 18 || 'age must be at least 18',
        },
      },
    });

    const input = getByPlaceholderText('Age');

    await waitFor(() => {
      fireEvent.change(input, { target: { value: '19' } });
      fireEvent.blur(input);
    });

    const errorMessage = queryByText(/age must be at least 18/i);

    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should meet accessibility requirements of Input component', async () => {
    const { getByPlaceholderText } = makeSut({
      name: 'zipcode',
      label: 'Zipcode',
      rules: { required: 'zipcode is required' },
      useFormProps: { mode: 'onBlur' },
    });

    const input = getByPlaceholderText('Zipcode');

    expect(input).toHaveAttribute('aria-label', 'Zipcode');
    expect(input).toHaveAttribute('aria-invalid', 'false');

    await waitFor(() => fireEvent.blur(input));

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'zipcode is required');
  });
});
