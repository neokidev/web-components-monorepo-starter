import React from 'react';
import { HelloWorld as HelloWorldWC } from '@web-components-monorepo-starter/hello-world'
import { createComponent } from '@lit/react';

export const HelloWorld = createComponent({
  react: React,
  tagName: 'hello-world',
  elementClass: HelloWorldWC,
  displayName: 'HellWorld',
});
