/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RangeDateSelector from './RangeDateSelector';

export default {
  title: 'Molecules/RangeDateSelector',
  component: RangeDateSelector,
  argTypes: {
    onClickDropdownItem: { action: 'Item clicked!' },
    onClickExactDayOption: { action: 'Option exact day selected' },
    onClickRangeOption: { action: 'Option range selected' },
  },
} as ComponentMeta<typeof RangeDateSelector>;

const Template: ComponentStory<typeof RangeDateSelector> = (args) => (
  <RangeDateSelector {...args} />
);

export const PrimaryRanges = Template.bind({});

PrimaryRanges.args = {
  selectorTitle: 'Tiempo',
};
