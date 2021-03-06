import React from 'react';

import Heading from '.';

export default {
  component: Heading,
  title: 'Design System/Input'
};

export const Headings = (args) => <Heading {...args} />;

Headings.args = {
    label:'Hello',
    subText: 'This is sub Text'
}