import React from 'react';
import { render } from '@testing-library/react';

import Tag from './Tag';

describe('<Tag />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Tag>Twitter</Tag>);

    expect(getByText('Twitter')).toBeInTheDocument();
  });

  it('renders correctly with className', () => {
    const { asFragment } = render(<Tag className="social">Twitter</Tag>);

    expect(asFragment()).toMatchSnapshot();
  });
});
