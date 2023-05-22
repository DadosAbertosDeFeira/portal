/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';

import SEO from './SEO';

describe('<SEO />', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'Dados Abertos Feira',
    };
  });

  it('renders correctly with title', () => {
    const { asFragment } = render(<SEO {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with description', () => {
    const { asFragment } = render(
      <SEO {...props} description="Dados abertos para toda população" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const { asFragment } = render(<SEO {...props} image="dados-abertos.png" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without suffix', () => {
    const { asFragment } = render(<SEO {...props} shouldExcludeTitleSuffix />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without indexing the page', () => {
    const { asFragment } = render(<SEO {...props} shouldIndexPage={false} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
