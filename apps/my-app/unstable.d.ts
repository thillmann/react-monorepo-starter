import { Renderer } from 'react-dom';
import {
  DOMAttributes,
  DOMElement,
  ReactElement,
  Component,
  ComponentState
} from 'react';

import * as ReactDOM from 'react-dom';

declare module 'react-dom' {
  export function unstable_createRoot<P>(
    domElement: Element | null
  ): {
    render(
      element: ReactElement<P>
    ): Component<P, ComponentState> | Element | void;
  };
}
