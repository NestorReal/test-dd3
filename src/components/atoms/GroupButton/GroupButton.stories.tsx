/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GroupButton from './GroupButton';
import Button from '../Button';

export default {
  title: 'Atoms/GroupButton',
  component: GroupButton,
} as ComponentMeta<typeof GroupButton>;

const Template: ComponentStory<typeof GroupButton> = (args) => <GroupButton {...args} />;

export const Primary = Template.bind({});

const Buttons = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <Button primary={state === 0} onClick={() => { setState(0); }}>
        button1
      </Button>
      <Button primary={state === 1} onClick={() => { setState(1); }}>
        button2
      </Button>
      <Button primary={state === 2} onClick={() => { setState(2); }}>
        button3
      </Button>
    </>
  );
};

Primary.args = {
  width: 200,
  children: <Buttons />,
};
