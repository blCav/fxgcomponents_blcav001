import React from "react";
import "./style.css";

import { Accordion } from "../components/Accordion/Accordion";

export default {
  title: "Components-TP1/Accordion",
  component: Accordion
};

const Template = (args) => <Accordion {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    bordered: true,
    show: false,
};

export const Variant = Template.bind({});
Variant.args = {
    bordered: false,
    show: true,
};

export const Open = Template.bind({});
Open.args = {
    item: "1",
    bordered: true,
    show: true,
};