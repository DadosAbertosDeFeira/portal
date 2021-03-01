import React, { useState } from 'react';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

import SearchDropdown from '.';

export default {
  title: 'Components/SearchDropdown',
  component: SearchDropdown,
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'responsive',
    },
  },
};

export const Default = () => {
  const [, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((state) => !state);
  };

  return <SearchDropdown toggleMenu={toggleMenu} />;
};
Default.args = {
  toggleMenu: () => {},
};
