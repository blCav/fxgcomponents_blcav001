import React from "react";
import "./style.css";

import { MyAvatar } from "../lib/components/Avatar/Avatar";

export default {
  title: "Components-TP1/Avatar",
  component: MyAvatar

};

const Template = (args) => <MyAvatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: 24,
  height: 24,
  alt: "avatar's image",
  imagesurl: "assets/img/img_profil.jpg",
};

export const Medium = Template.bind({});
Medium.args = {
  width: 48,
  height: 48,
  alt: "avatar's image",
  imagesurl: "assets/img/img_profil.jpg",
};

export const Large = Template.bind({});
Large.args = {
  width: 56,
  height: 56,
  alt: "avatar's image",
  imagesurl: "assets/img/img_profil.jpg",
};