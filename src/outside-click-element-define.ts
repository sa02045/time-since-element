import { OutsideClickElement } from './outside-click-element.js';

const root = (
  typeof globalThis !== 'undefined' ? globalThis : window
) as typeof window;

type JSXBase = JSX.IntrinsicElements extends { div: unknown }
  ? JSX.IntrinsicElements
  : Record<string, Record<string, unknown>>;

declare global {
  interface Window {
    OutsideClickElement: typeof OutsideClickElement;
  }
  interface HTMLElementTagNameMap {
    'outside-click': OutsideClickElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      ['outside-click']: JSXBase['div'] &
        Partial<Omit<OutsideClickElement, keyof HTMLElement>>;
    }
  }
}

try {
  root.OutsideClickElement = OutsideClickElement.define();
} catch (e: unknown) {
  if (
    !(
      root.DOMException &&
      e instanceof DOMException &&
      e.name === 'NotSupportedError'
    ) &&
    !(e instanceof ReferenceError)
  ) {
    throw e;
  }
}

export default OutsideClickElement;
export * from './outside-click-element.js';
