import React from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    width: "string"
  }
};

export const Standard = (args: any) => <Input {...args} />;
Standard.args = {
  label: "Text",
  placeholder: "Placeholder",
  type: "text",
  prefillValue: "",
  width: "auto"
}