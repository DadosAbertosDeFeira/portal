import React from 'react';
import { render } from '@testing-library/react';

import Link from './Link';

describe('<Link />', () => {
  it('renders correctly external link', () => {
    const { asFragment } = render(
      <Link href="https://twitter.com" target="_blank" rel="noreferrer">
        Twitter
      </Link>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly internal link', () => {
    const { asFragment } = render(<Link href="/sobre">Sobre</Link>);

    expect(asFragment()).toMatchSnapshot();
  });
});
