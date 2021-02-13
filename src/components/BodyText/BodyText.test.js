/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';

import BodyText from './BodyText';

describe('<BodyText />', () => {
  let sharedProps;

  beforeEach(() => {
    sharedProps = {
      testId: 'paragraph',
    };
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <BodyText {...sharedProps}>Testing</BodyText>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly default size and bold', () => {
    const { asFragment } = render(
      <BodyText {...sharedProps} bold>
        Testing
      </BodyText>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly small', () => {
    const { asFragment } = render(
      <BodyText {...sharedProps} size="small">
        Testing
      </BodyText>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly small and bold', () => {
    const { asFragment } = render(
      <BodyText {...sharedProps} bold size="small">
        Testing
      </BodyText>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with html alternative attributes', () => {
    const { asFragment } = render(
      <BodyText {...sharedProps} tabIndex={0}>
        Testing
      </BodyText>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
