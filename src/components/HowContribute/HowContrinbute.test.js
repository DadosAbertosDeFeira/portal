import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import HowContribute from './HowContribute';

jest.mock('next/router');

describe('<HowContribute />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HowContribute />);
    const descriptionText = `Essa é uma iniciativa voluntária, feita a muitas mãos, e qualquer pessoa interessada pode fazer parte!`;

    expect(getByText('Como contribuir')).toBeInTheDocument();
    expect(getByText(descriptionText)).toBeInTheDocument();
    expect(getByText('Veja como contribuir')).toBeInTheDocument();
  });

  describe('behavior', () => {
    let routerMock;
    beforeEach(() => {
      jest.resetAllMocks();
      routerMock = {
        push: jest.fn(),
      };

      useRouter.mockReturnValue(routerMock);
    });

    it('redirects to the right page when button is clicked by the user', () => {
      const { getByRole } = render(<HowContribute />);
      const button = getByRole('button');
      fireEvent.click(button);

      expect(routerMock.push).toHaveBeenCalledWith('/colabore');
    });
  });
});
