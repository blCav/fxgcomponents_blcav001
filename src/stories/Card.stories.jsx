import React from "react";
import "./style.css";

import { MyCard } from "../components/Card/Card";

export default {
  title: "Components-TP1/Card",
  component: MyCard
};

const Template = (args) => <MyCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Basic Card",
};

export const Small = Template.bind({});
Small.args = {
    title: "Small Card",
    size: "small",
};

export const NoTitle = Template.bind({});
NoTitle.args = {
    size: "small",
};