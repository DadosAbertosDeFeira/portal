import React from 'react';
import { render } from '@testing-library/react';

import Projects from './Projects';

describe('<Projects />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Projects />);

    expect(getByText('Projetos')).toBeInTheDocument();
    expect(getByText('Maria Quitéria')).toBeInTheDocument();
  });
});
