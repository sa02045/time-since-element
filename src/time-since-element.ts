type Format = 'days' | 'months' | 'years' | 'full';

export class TimeSinceElement extends HTMLElement {
  static define(tag = 'time-since-element', registry = customElements) {
    registry.define(tag, this);
    return this;
  }

  connectedCallback(): void {
    this.update();
  }

  update() {
    const since = this.formatSince(
      this.calculateDaysSince(this.getSinceAttribute()),
      this.getFormat(),
    );

    this.#renderRoot.textContent = since;
  }

  getSinceAttribute() {
    return this.getAttribute('since') || '';
  }

  getFormat() {
    return (this.getAttribute('format') || 'full') as Format;
  }

  calculateDaysSince(since: string): number {
    const sinceDate = new Date(since);
    const today = new Date();
    const diff = today.getTime() - sinceDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  formatSince(days: number, format: Format): string {
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainDays = days % 30;

    if (format === 'days') {
      return `${days}`;
    }

    if (format === 'months') {
      return `${Math.floor(days / 30)}`;
    }

    if (format === 'years') {
      return `${years}.${months > 0 ? months : ''}`;
    }

    if (format === 'full') {
      if (months === 0) {
        return `${years}년 ${remainDays}일`;
      } else {
        return `${years}년 ${months}개월 ${remainDays}일`;
      }
    }

    return '';
  }

  #renderRoot: Node = this.shadowRoot
    ? this.shadowRoot
    : this.attachShadow
      ? this.attachShadow({ mode: 'open' })
      : this;
}
