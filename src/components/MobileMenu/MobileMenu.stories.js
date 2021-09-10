import React, { useState } from 'react';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

import MobileMenu from '.';

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
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

  return <MobileMenu handleClose={toggleMenu} />;
};

Default.args = {
  toggleMenu: () => {},
};
