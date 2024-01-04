import { OutsideClickElement } from "./outside-click-element";

const root = (
  typeof globalThis !== "undefined" ? globalThis : window
) as typeof window;

try {
  root.OutsideClickElement = OutsideClickElement.define();
} catch (e: unknown) {
  if (
    !(
      root.DOMException &&
      e instanceof DOMException &&
      e.name === "NotSupportedError"
    ) &&
    !(e instanceof ReferenceError)
  ) {
    throw e;
  }
}

declare global {
  interface Window {
    OutsideClickElement: typeof OutsideClickElement;
  }
  interface HTMLElementTagNameMap {
    "outside-click": OutsideClickElement;
  }
}

export default OutsideClickElement;
export * from "./outside-click-element";
