import React from 'react';

import SrcComponent from '../src/index';

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
