import React from 'react';

import SrcComponent from '../src/index';
import CjsDevComponent from '../dist/cjs/dev';
import CjsProdComponent from '../dist/cjs/prod';
import EsmDevComponent from '../dist/esm/dev';
import EsmProdComponent from '../dist/esm/prod';

const props = {
  transaction: '12',
  type: 'window',
  payment: 'http://localhost:4001',
};

export default {
  title: 'Window',
  component: SrcComponent,
  argTypes: {onClick: {action: 'onClick'}, onSuccess: {action: 'onSuccess'}},
  args: props,
};

export const Src = (args) => (
  <SrcComponent {...args}>Pay with crypto</SrcComponent>
);

export const CjsDev = (args) => (
  <CjsDevComponent {...args}>Pay with crypto</CjsDevComponent>
);

export const CjsProd = (args) => (
  <CjsProdComponent {...args}>Pay with crypto</CjsProdComponent>
);

export const EsmDev = (args) => (
  <EsmDevComponent {...args}>Pay with crypto</EsmDevComponent>
);

export const EsmProd = (args) => (
  <EsmProdComponent {...args}>Pay with crypto</EsmProdComponent>
);
