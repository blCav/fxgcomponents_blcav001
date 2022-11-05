import React from "react";
import "./style.css";

import { MyPopover} from "../lib/components/Popover/Popover";

export default {
    title: "Components-TP1/Popover",
    component: MyPopover
};

const Template = (args) => <MyPopover {...args} />;

export const Hover = Template.bind({});
Hover.args = {
  trigger: "hover",
  label: "Hover",
};

export const Focus = Template.bind({});
Focus.args = {
  trigger: "focus",
  label: "Focus",
};

export const Click = Template.bind({});
Click.args = {
  trigger: "click",
  label: "Click me",
};