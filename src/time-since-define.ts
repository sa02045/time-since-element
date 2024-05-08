import { TimeSinceELement } from './time-since.js';

const root = (
  typeof globalThis !== 'undefined' ? globalThis : window
) as typeof window;

type JSXBase = JSX.IntrinsicElements extends { div: unknown }
  ? JSX.IntrinsicElements
  : Record<string, Record<string, unknown>>;

declare global {
  interface Window {
    TimeSinceELement: typeof TimeSinceELement;
  }
  interface HTMLElementTagNameMap {
    'programming-since': TimeSinceELement;
  }
  namespace JSX {
    interface IntrinsicElements {
      ['programming-since']: JSXBase['div'];
    }
  }
}

try {
  root.TimeSinceELement = TimeSinceELement.define();
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

export default TimeSinceELement;
export * from './time-since.js';
