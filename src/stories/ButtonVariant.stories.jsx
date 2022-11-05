import React from "react";
import "./style.css";

import { ButtonVariant
 } from "../components/ButtonVariant/ButtonVariant";

export default {
  title: "Components-TP1/ButtonVariant",
  component: ButtonVariant,
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Hello",
      description: "Title of button",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: { summary: "Button" },
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Type of variant",
      table: {
        type: {
          summary: "contained | outlined | text",
        },
        defaultValue: { summary: "Contained" },
      },
    },
  },
};

const Template = (args) => <ButtonVariant {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Text",
};
