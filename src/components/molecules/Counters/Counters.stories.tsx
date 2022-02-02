/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counters from './Counters';

export default {
  title: 'Molecules/Counters',
  component: Counters,
} as ComponentMeta<typeof Counters>;

const Template: ComponentStory<typeof Counters> = (args) => <Counters {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  counters: {
    visitors: {
      value: 4049,
      secondary_value: 0,
      diff: 0,
    },
    transactions: {
      value: 222,
      secondary_value: null,
      diff: 0,
    },
    conversions: {
      value: 231,
      secondary_value: null,
      diff: 0,
    },
  },
};
