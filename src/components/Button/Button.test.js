/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FiActivity } from 'react-icons/fi';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly by default', () => {
    const { asFragment } = render(<Button>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly as secondary', () => {
    const { asFragment } = render(<Button secondary>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with text type', () => {
    const { asFragment } = render(<Button typeText>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly rounded', () => {
    const { asFragment } = render(<Button rounded>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly small size', () => {
    const { asFragment } = render(<Button small>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly medium size', () => {
    const { asFragment } = render(<Button medium>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly large size', () => {
    const { asFragment } = render(<Button large>Dados Abertos</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with an icon and text', () => {
    const { asFragment } = render(
      <Button icon={FiActivity}>Dados Abertos</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correclty just with an icon', () => {
    const { asFragment } = render(<Button icon={FiActivity} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly using html attributes', () => {
    const { asFragment } = render(
      <Button name="dados-button">Dados Abertos</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('events', () => {
    it('handle the when user clicks', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button onClick={onClick}>Dados Abertos</Button>
      );
      fireEvent.click(getByTestId('button'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
