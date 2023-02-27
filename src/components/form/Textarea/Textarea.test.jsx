import { fireEvent, render, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import Textarea from './Textarea';

describe('textarea', () => {
  it('should renders Textarea component with required props', () => {
    const App = () => {
      const form = useForm();
      return (
        <Textarea
          name="username"
          label="Username"
          control={form.control}
          rules={{ required: true }}
        />
      );
    };

    const { getByPlaceholderText, container } = render(<App />);

    const input = getByPlaceholderText('Username');

    expect(container).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toBeInTheDocument();
  });

  it('should update value of Textarea component', () => {
    const App = () => {
      const form = useForm();
      return (
        <Textarea
          name="password"
          label="Password"
          control={form.control}
          rules={{ required: true }}
        />
      );
    };

    const { getByLabelText } = render(<App />);

    const input = getByLabelText('Password');

    fireEvent.input(input, { target: { value: 'password123' } });

    expect(input.value).toBe('password123');
  });

  it('should display error message of Textarea component', async () => {
    const App = () => {
      const form = useForm({ mode: 'onBlur' });

      return (
        <form>
          <Textarea
            name="email"
            label="Email"
            control={form.control}
            rules={{ required: 'email is required' }}
          />
        </form>
      );
    };

    const { getByLabelText, getByText } = render(<App />);

    const input = getByLabelText('Email');

    await waitFor(() => fireEvent.blur(input));

    const errorMessage = getByText(/email is required/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should does not display error message when textarea is valid', async () => {
    const App = () => {
      const form = useForm({ mode: 'onBlur' });

      return (
        <Textarea
          name="age"
          label="Age"
          control={form.control}
          rules={{
            validate: {
              min: (v) => parseInt(v, 10) >= 18 || 'age must be at least 18',
            },
          }}
        />
      );
    };

    const { getByPlaceholderText, queryByText } = render(<App />);

    const input = getByPlaceholderText('Age');

    await waitFor(() => {
      fireEvent.change(input, { target: { value: '19' } });
      fireEvent.blur(input);
    });

    const errorMessage = queryByText(/age must be at least 18/i);

    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should meet accessibility requirements of Textarea component', async () => {
    const App = () => {
      const form = useForm({ mode: 'onBlur' });

      return (
        <Textarea
          name="zipcode"
          label="Zipcode"
          control={form.control}
          rules={{ required: 'zipcode is required' }}
        />
      );
    };

    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Zipcode');

    expect(input).toHaveAttribute('aria-label', 'Zipcode');
    expect(input).toHaveAttribute('aria-invalid', 'false');

    await waitFor(() => fireEvent.blur(input));

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'zipcode is required');
  });
});
