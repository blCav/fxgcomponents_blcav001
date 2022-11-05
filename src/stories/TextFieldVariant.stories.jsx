import React from "react";
import "./style.css";

import { TextFieldVariant } from "../components/TextFieldVariant/TextFieldVariant";

export default {
  title: "Components-TP1/TextFieldVariant",
  component: TextFieldVariant,
  argTypes: {
    id: {
      name: "id",
      type: { name: "string", required: false },
      table: {
        type: {
          summary: "String",
        },
      },
    },
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Hello",
      description: "Title of button",
      table: {
        type: {
          summary: "String",
        },
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Type of variant",
      table: {
        type: {
          summary: "contained | outlined | standard",
        },
      },
    },
    placeholder: {
      name: "placeholder",
      type: { name: "string", required: false },
      description: "Something short",
      table: {
        type: {
            summary: "String",
        },
      },
    },
  },
};

const Template = (args) => <TextFieldVariant {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  id: "filled-basic",
  variant: "filled",
  label: "Filled",
  placeholder: "Default Value",
};

export const Outlined = Template.bind({});
Outlined.args = {
  id: "outlined-basic",
  variant: "outlined",
  label: "Outlined",
  placeholder: "Default Value",
};

export const Standard = Template.bind({});
Standard.args = {
  id: "standard-basic",
  variant: "standard",
  label: "Standard",
  placeholder: "Default Value",
};