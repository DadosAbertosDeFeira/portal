/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';

import Headline from './Headline';

describe('<Headline />', () => {
  let sharedProps;

  beforeEach(() => {
    sharedProps = {
      testId: 'headline',
    };
  });

  it('renders correctly by default', () => {
    const { asFragment } = render(
      <Headline {...sharedProps}>Testing</Headline>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly large size', () => {
    const { asFragment } = render(
      <Headline {...sharedProps} size="large">
        Testing
      </Headline>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly small size', () => {
    const { asFragment } = render(
      <Headline {...sharedProps} size="small">
        Testing
      </Headline>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly medium size', () => {
    const { asFragment } = render(
      <Headline {...sharedProps} size="medium">
        Testing
      </Headline>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
