/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rangesColors, formatDayWeekAverageResults } from '../../../helpers/graphsHelpers/heatMap';
import { data } from './mocks/data';

import Heatmap from './Heatmap';

export default {
  title: 'Organisms/Heatmap',
  component: Heatmap,
} as ComponentMeta<typeof Heatmap>;

const Template: ComponentStory<typeof Heatmap> = (args) => <Heatmap {...args} />;

export const Primary = Template.bind({});

const formattedData = formatDayWeekAverageResults(data);
Primary.args = {
  data: formattedData,
  colorScale: rangesColors(formattedData),
  isLoading: false,
  categories: ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'],
  height: 300,
};
