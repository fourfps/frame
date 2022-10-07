import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: "toggle",
    loading: "toggle",
    width: "string"
  }
};

export const Standard = (args: any) => <Button {...args} />;
Standard.args = {
  label: "Text",
  type: "primary",
  disabled: false,
  loading: false,
  width: "auto"
}


export const SocialLogin = () => <Button socialLogin type={'primary'} label={'Continue with Apple'} />;