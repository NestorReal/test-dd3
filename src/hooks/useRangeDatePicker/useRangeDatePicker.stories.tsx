/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import useDatePicker from '.';

const Template: Story = () => {
  const { openCalendarRange, CalendarRange } = useDatePicker();
  return (
    <>
      <button type="button" onMouseDown={openCalendarRange}>
        Click to open Calendar
      </button>
      <CalendarRange
        closeDropdown={() => {}}
        onClickFilter={(dates: Date) => console.log('Filtrar button clicked with:', dates)}
        setSelectedOption={() => {}}
        optionData={{}}
      />
      <div>Look at the console on date change</div>
    </>
  );
};

const meta: Meta = {
  title: 'Hooks/useRangeDatePicker',
  component: Template,
};

export default meta;

export const Default = Template.bind({});
