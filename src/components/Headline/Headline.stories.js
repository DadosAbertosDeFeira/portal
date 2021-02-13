/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Headline from './Headline';

export const HeadlineTemplate = (args) => <Headline {...args} />;
HeadlineTemplate.args = {
  children: 'Portal Dados Abertos',
  size: 'medium',
};
HeadlineTemplate.storyName = 'Default';

export const Small = HeadlineTemplate.bind({});
Small.args = {
  ...HeadlineTemplate.args,
  size: 'small',
};

export const Medium = HeadlineTemplate.bind({});
Medium.args = {
  ...HeadlineTemplate.args,
  size: 'medium',
};

export const Large = HeadlineTemplate.bind({});
Large.args = {
  ...HeadlineTemplate.args,
  size: 'large',
};

export default {
  title: 'Components/Headline',
  component: Headline,
};
