/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonKeyboard from './ButtonKeyboard';

export default {
  title: 'Molecules/ButtonKeyboard',
  component: ButtonKeyboard,
} as ComponentMeta<typeof ButtonKeyboard>;

const Template: ComponentStory<typeof ButtonKeyboard> = (args) => <ButtonKeyboard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 'A',
  cardColor: '#D3D6DA',
  textColor: '#56575E'
};
