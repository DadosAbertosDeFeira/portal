/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  let sharedProps;

  beforeEach(() => {
    jest.resetAllMocks();

    sharedProps = {
      className: 'new-class',
      outline: false,
      onClick: jest.fn(),
    };
  });

  it('renders correctly with default properties', () => {
    const { asFragment } = render(<Button>Click Me!</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly outline button', () => {
    const { asFragment } = render(
      <Button {...sharedProps} outline>
        Click Me!
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('actions', () => {
    it('execute correct action when the user clicks', () => {
      const { getByRole } = render(<Button {...sharedProps}>Click Me!</Button>);
      fireEvent.click(getByRole('button'));

      expect(sharedProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
