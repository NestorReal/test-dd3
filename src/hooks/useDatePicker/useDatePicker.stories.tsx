/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import useDatePicker from '.';

const Template: Story = () => {
  const { lowDate, openCalendar, Calendar } = useDatePicker();

  console.log('lowDate', lowDate);

  return (
    <>
      <button type="button" onMouseDown={openCalendar}>
        Click to open Calendar
      </button>
      <Calendar
        closeDropdown={() => {}}
        onClickFilter={(date: Date) => console.log('Filtrar button clicked with:', date)}
        setSelectedOption={() => {}}
        optionData={{}}
      />
      <div>Look at the console on date change</div>
    </>
  );
};

const meta: Meta = {
  title: 'Hooks/useDatePicker',
  component: Template,
};

export default meta;

export const Default = Template.bind({});
