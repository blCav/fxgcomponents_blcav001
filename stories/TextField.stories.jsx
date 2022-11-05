import React from "react";
import "./style.css";

import { MyTextField } from "../lib/components/TextField/TextField";

export default {
  title: "Components-TP1/TextField",
  component: MyTextField,

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
      defaultValue: "label",
      description: "Title of label",
      table: {
        type: {
          summary: "String",
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

const Template = (args) => <MyTextField {...args} />;

export const Label = Template.bind({});
Label.args = {
  id: "label",
  label: "Label",
  placeholder: "Default Value",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: "",
  id:"noLabel",  
  placeholder: "Default Value",
};

export const LabelTextHelper= Template.bind({});
LabelTextHelper.args = {
  id:"labelTextHelper",  
  label: "label",
  placeholder: "Default Value",
  helperText: "Some important text",
};