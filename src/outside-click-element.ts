export class OutsideClickElement extends HTMLElement {
  static define(tag = "outside-click", registry = customElements) {
    registry.define(tag, this);
    return this;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  connectedCallback() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick(event: any) {
    if (!this.contains(event.target)) {
      this.dispatchEvent(new CustomEvent("outside-click"));
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
        </style>
        <slot></slot>
      `;
    }
  }
}
