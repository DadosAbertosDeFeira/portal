import React from "react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "responsive",
    },
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
};

export const Default = () => <Header />;
