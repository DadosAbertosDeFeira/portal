import React from 'react';
import { render } from '@testing-library/react';

import Volunteers from './Volunteers';

describe('<Volunteers />', () => {
  it('renders correctly the component', () => {
    const { asFragment, getByText } = render(<Volunteers />);

    expect(getByText('Voluntários')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
