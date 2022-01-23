/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateDisplay from './DateDisplay';
import { conformRanges } from '../../../helpers/rangeDateHelpers';

export default {
  title: 'Atoms/DateDisplay',
  component: DateDisplay,
} as ComponentMeta<typeof DateDisplay>;

const Template: ComponentStory<typeof DateDisplay> = (args) => <DateDisplay {...args} />;

export const Yesterday = Template.bind({});

export const CurrentWeek = Template.bind({});

export const LastYear = Template.bind({});

const [yesterday, currentWeek, , , , , , , lastYear] = conformRanges.preformed;
Yesterday.args = {
  range: {
    ...yesterday,
  },
};

CurrentWeek.args = {
  range: {
    ...currentWeek,
  },
};

LastYear.args = {
  range: {
    ...lastYear,
  },
};
