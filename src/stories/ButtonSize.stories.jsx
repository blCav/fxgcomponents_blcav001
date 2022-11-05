import React from "react";
import "./style.css";

import { ButtonSize } from "../components/ButtonSize/ButtonSize";

export default {
  title: "Components-TP1/ButtonSize",
  component: ButtonSize,

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
      },
    },
    size: {
      name: "size",
      type: { name: "string", required: false },
      description: "Ajust size",
      table: {
        type: {
          summary: "small | medium | large",
        },
      },
    },
  },
};

const Template = (args) => <ButtonSize {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};
