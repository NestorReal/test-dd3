/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateDisplayList from './DateDisplayList';
import { conformRanges } from '../../../helpers/rangeDateHelpers';

export default {
  title: 'Molecules/DateDisplayList',
  component: DateDisplayList,
  argTypes: { onClick: { action: 'onClick callback called!' } },
} as ComponentMeta<typeof DateDisplayList>;

const Template: ComponentStory<typeof DateDisplayList> = (args) => <DateDisplayList {...args} />;

export const PrimaryRanges = Template.bind({});

PrimaryRanges.args = {
  options: conformRanges.preformed,
  listTitle: 'Tiempo',
};
