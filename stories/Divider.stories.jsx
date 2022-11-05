import React from "react";
import "./style.css";

import { MyDivider } from "../lib/components/Divider";

export default {
    title: "Components-TP1/Divider",
    component: MyDivider
};

const Template = (args) => <MyDivider {...args} />;

export const Left = Template.bind({});
Left.args = {
    orientation: "left",
    text: "Left",
};

export const Right = Template.bind({});
Right.args = {
    orientation: "right",
    text: "Right",
};

export const Default = Template.bind({});
Default.args = {
    text: "Center",
};