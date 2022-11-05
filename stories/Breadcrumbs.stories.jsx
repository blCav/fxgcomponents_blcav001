import React from "react";
import "./style.css";

import { MyBasicBreadcrumbs } from "../lib/components/Breadcrumbs/Breadcrumbs";

export default {
  title: "Components-TP1/Breadcrumbs",
  component: MyBasicBreadcrumbs,
  argTypes: {
    separator: {
      name: 'separator',
      type: { name: 'string', required: false },
      // defaultValue: '/',
      description: 'Choose a separator',
      table: {
        type: {
          summary: '/ | ›',
        },
      },
    },
    url: {
      name: 'url',
      type: { name: 'string', required: false },
      // defaultValue: '/',
      description: 'Define a url of a link',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    item: {
      name: 'item',
      type: { name: 'number', required: false },
      // defaultValue: '/',
      description: 'Choose a number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  }
};

const Template = (args) => <MyBasicBreadcrumbs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  separator: "/",
  url: "/",
  item: 5,
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: "›",
  url: "/",
  item: 5,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  separator: "/",
  url: "/",
  item: 3,
};
