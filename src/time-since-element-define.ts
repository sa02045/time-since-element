import { TimeSinceElement } from './time-since-element';

const root = (
  typeof globalThis !== 'undefined' ? globalThis : window
) as typeof window;
try {
  root.TimeSinceElement = TimeSinceElement.define();
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

type JSXBase = JSX.IntrinsicElements extends { div: unknown }
  ? JSX.IntrinsicElements
  : Record<string, Record<string, unknown>>;

declare global {
  interface Window {
    TimeSinceElement: typeof TimeSinceElement;
  }
  interface HTMLElementTagNameMap {
    'time-since-element': TimeSinceElement;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['time-since-element']: JSXBase['div'];
    }
  }
}

try {
  root.TimeSinceElement = TimeSinceElement.define();
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

export default TimeSinceElement;
export * from './time-since-element';
