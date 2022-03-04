/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  dataClassificationGrouped,
  labelClassificationGrouped,
} from '../../../helpers/graphsHelpers/groupedGraph';
import { data } from './mocks/data';

import GroupedGraph from './GroupedGraph';

export default {
  title: 'Organisms/GroupedGraph',
  component: GroupedGraph,
} as ComponentMeta<typeof GroupedGraph>;

const Template: ComponentStory<typeof GroupedGraph> = (args) => <GroupedGraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: dataClassificationGrouped(data, 'genders'),
  optionsData: labelClassificationGrouped(data),
  isLoading: false,
  horizontal: false,
  colors: ['#ff9f2d', '#168fff', '#ff9f2d', '#f74141', '#e96fd5', '#9b51e0', '#797979'],
  dateLabelFromFilter: 'Mes actual',
};
