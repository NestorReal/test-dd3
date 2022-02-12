/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { labelFormatData, formatHourAverageResults } from '../../../helpers/graphsHelpers/graphBar';
import { data } from './mocks/data';

import GraphBar from './GraphBar';

export default {
  title: 'Organisms/GraphBar',
  component: GraphBar,
} as ComponentMeta<typeof GraphBar>;

const Template: ComponentStory<typeof GraphBar> = (args) => <GraphBar {...args} />;

export const Primary = Template.bind({});

const formattedData = formatHourAverageResults(data);

Primary.args = {
  data: formattedData,
  colors: ['#8c4380', '#ff9f2d', '#168fff'],
  labels: labelFormatData(formattedData),
  isLoading: false,
};
