export class OutsideClickElement extends HTMLElement {
  static define(tag = 'outside-click', registry = customElements) {
    registry.define(tag, this);
    return this;
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.textContent = `:host {display: block;}`;
      this.shadowRoot!.append(style, document.createElement('slot'));
    }

    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleOutsideClick(event: MouseEvent) {
    if (event.composedPath().find((node) => node === this)) {
      return;
    }

    this.dispatchEvent(new Event('outside-click'));
  }
}
