import React from 'react';
import { render } from '@testing-library/react';

import HowContribute from './HowContribute';

jest.mock('next/router');

describe('<HowContribute />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HowContribute />);

    expect(getByText('Seja um Voluntário')).toBeInTheDocument();
    expect(getByText('aqui')).toBeInTheDocument();
    expect(getByText('Doe para o Projeto')).toBeInTheDocument();
    expect(getByText('pelo nosso formulário')).toBeInTheDocument();
    expect(getByText('Contribua com código')).toBeInTheDocument();
    expect(getByText('Github')).toBeInTheDocument();
  });
});
