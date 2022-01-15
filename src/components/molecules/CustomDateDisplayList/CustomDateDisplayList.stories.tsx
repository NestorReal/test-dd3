/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomDateDisplayList from './CustomDateDisplayList';

import { conformRanges } from '../../../helpers/rangeDateHelpers';
import { conformComparations } from '../../../helpers/compareTimeHelpers';

export default {
  title: 'Molecules/CustomDateDisplayList',
  component: CustomDateDisplayList,
  argTypes: {
    onClickExactDayOption: { action: 'onClickExactDayOption called' },
    onClickRangeOption: { action: 'onClickRangeOptionn called' },
    openCalendar: { action: 'openCalendar called' },
    openCalendarRange: { action: 'openCalendarRange' },
    closeCalendarRange: { action: 'closeCalendarRange' },
    closeCalendar: { action: 'closeCalendar called' },
    onClickNormalItem: { action: 'onClickNormalItem called' },
  },
} as ComponentMeta<typeof CustomDateDisplayList>;

const Template: ComponentStory<typeof CustomDateDisplayList> = (args) => (
  <CustomDateDisplayList {...args} />
);

export const DateRanges = Template.bind({});
export const ComparisonRanges = Template.bind({});

DateRanges.args = {
  customOptions: conformRanges.custom,
};

ComparisonRanges.args = {
  customOptions: conformComparations[9],
};
