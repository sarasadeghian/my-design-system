import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { myButtonStyles } from './my-button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = myButtonStyles;

  @property({ type: String })
  variant: ButtonVariant = 'primary';

  @property({ type: String })
  size: ButtonSize = 'medium';

  @property({ type: Boolean })
  disabled = false;

  handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent('buttonClick', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <button
        type="button"
        ?disabled=${this.disabled}
        class="variant-${this.variant} size-${this.size}"
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}
