/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BodyText from './BodyText';

export const BodyTextTemplate = (args) => <BodyText {...args} />;
BodyTextTemplate.args = {
  children: 'Portal Dados Abertos',
  size: 'medium',
};

export const Small = BodyTextTemplate.bind({});
Small.args = {
  ...BodyTextTemplate.args,
  size: 'small',
};

export const Medium = BodyTextTemplate.bind({});
Medium.args = {
  ...BodyTextTemplate.args,
  size: 'medium',
};

export default {
  title: 'Components/BodyText',
  component: BodyText,
};
