/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from './Button';

export const ButtonTemplate = (args) => <Button {...args} />;
ButtonTemplate.args = { children: 'Button' };
ButtonTemplate.storyName = 'Default';

export const Small = ButtonTemplate.bind({});
Small.args = {
  ...ButtonTemplate.args,
  small: true,
};

export const Rounded = ButtonTemplate.bind({});
Rounded.args = {
  ...ButtonTemplate.args,
  rounded: true,
};

export default {
  title: 'Components/Button',
  component: Button,
};
