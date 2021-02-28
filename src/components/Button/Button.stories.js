/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from './Button';

export const ButtonTemplate = (args) => <Button {...args} />;
ButtonTemplate.args = { children: 'Button' };
ButtonTemplate.storyName = 'Default';

export default {
  title: 'Components/Button',
  component: Button,
};
