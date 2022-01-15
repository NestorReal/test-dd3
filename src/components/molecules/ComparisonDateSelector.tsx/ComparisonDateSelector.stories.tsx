/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ComparisonDateSelector from './ComparisonDateSelector';
import { TIME_RANGES_ID } from '../../../helpers/rangeDateHelpers';

export default {
  title: 'Molecules/ComparisonDateSelector',
  component: ComparisonDateSelector,
  argTypes: {
    onClickDropdownItem: { action: 'Item clicked!' },
    // onClickExactDayOption: { action: 'Option exact day selected' },
    // onClickRangeOption: { action: 'Option range selected' },
  },
} as ComponentMeta<typeof ComparisonDateSelector>;

const Template: ComponentStory<typeof ComparisonDateSelector> = (args) => (
  <ComparisonDateSelector {...args} />
);

export const PrimaryRanges = Template.bind({});

PrimaryRanges.args = {
  selectorTitle: 'Comparado con',
  optionId: TIME_RANGES_ID.lastMonth,
};
