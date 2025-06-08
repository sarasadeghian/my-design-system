import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { myButtonStyles } from './my-button.styles';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = myButtonStyles

  render() {
    return html`
      <button><slot></slot></button>
      `;
  }
}
