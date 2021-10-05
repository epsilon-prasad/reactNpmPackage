import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'Design System/Input'
};

export const placeholder = (args) => <Input {...args} />;

placeholder.args = {
  placeholder:'testing'
}