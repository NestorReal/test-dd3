/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonCard from './ButtonCard';

export default {
  title: 'Molecules/ButtonCard',
  component: ButtonCard,
} as ComponentMeta<typeof ButtonCard>;

const Template: ComponentStory<typeof ButtonCard> = (args) => <ButtonCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 'A',
  cardColor: 'rgba(106, 170, 100, 1)',
  textColor: 'rgba(0, 0, 0, 1)'
};
