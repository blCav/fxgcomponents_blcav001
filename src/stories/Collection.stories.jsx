import React from 'react';
import './style.css'

import { Collection } from '../components/Collection/Collection';

export default {
  title: 'Components-TP1/Collection',
  component: Collection
};

const Template = (args) => <Collection {...args} />;

var img = [];

img.push('assets/img/macareux.jpg');
img.push('assets/img/sterne_artique1.jpg');
img.push('assets/img/sterne_artique2.jpg');


export const Small = Template.bind({});
Small.args = {
  imagesurl: img,
  width: 100
};

export const Medium = Template.bind({});
Medium.args = {
  imagesurl: img,
  width: 200
};

export const Large = Template.bind({});
Large.args = {
  imagesurl: img,
  width: 300
};