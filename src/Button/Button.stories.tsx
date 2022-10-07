import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: "toggle",
    loading: "toggle"
  }
};

export const Standard = (args: any) => <Button {...args} />;
Standard.args = {
  label: "Text",
  type: "primary",
  disabled: false,
  loading: false
}