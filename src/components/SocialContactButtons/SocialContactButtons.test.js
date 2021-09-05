import React from 'react';
import { useRouter } from 'next/router';
import { render, fireEvent } from '@testing-library/react';

import SocialContactButtons from './SocialContactButtons';

jest.mock('next/router');

describe('<SocialContactButtons />', () => {
  it('renders correctly all the buttons', () => {
    const { getByText, asFragment, getByAltText } = render(
      <SocialContactButtons />
    );

    expect(getByText('Twitter')).toBeInTheDocument();
    expect(getByText('Facebook')).toBeInTheDocument();
    expect(getByText('Instagram')).toBeInTheDocument();
    expect(getByText('Github')).toBeInTheDocument();

    expect(getByAltText('Twitter')).toBeInTheDocument();
    expect(getByAltText('Facebook')).toBeInTheDocument();
    expect(getByAltText('Instagram')).toBeInTheDocument();
    expect(getByAltText('Github')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  describe('behavior', () => {
    let routerMock;

    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
      routerMock = { push: jest.fn() };
      useRouter.mockReturnValue(routerMock);
    });

    it('redirects to Twitter when user clicks on the button', () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId('twitter-button'));

      expect(routerMock.push).toHaveBeenCalledWith(
        'https://twitter.com/DadosDeFeira'
      );
    });

    it('redirects to Facebook when user clicks on the button', () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId('facebook-button'));

      expect(routerMock.push).toHaveBeenCalledWith(
        'https://www.facebook.com/dadosabertosdefeira'
      );
    });

    it('redirects to Instagram when user clicks on the button', () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId('instagram-button'));

      expect(routerMock.push).toHaveBeenCalledWith(
        'https://www.instagram.com/dadosabertosdefeira/'
      );
    });

    it('redirects to Github when user clicks on the button', () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId('github-button'));

      expect(routerMock.push).toHaveBeenCalledWith(
        'https://github.com/DadosAbertosDeFeira'
      );
    });
  });
});
