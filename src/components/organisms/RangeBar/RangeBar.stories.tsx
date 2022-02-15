/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { dataClassification } from '../../../helpers/graphsHelpers/rangeBar';
import { data } from './mocks/data';

import RangeBar from './RangeBar';

export default {
  title: 'Organisms/RangeBar',
  component: RangeBar,
} as ComponentMeta<typeof RangeBar>;

const Template: ComponentStory<typeof RangeBar> = (args) => <RangeBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: dataClassification(data),
  colors: ['#ba59aa', '#003566'],
  isLoading: false,
  valueAxis: 10000,
};
