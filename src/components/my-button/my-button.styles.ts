import { css } from 'lit';

export const myButtonStyles = css`
  button {
    background: var(--primary-color);
    color: var(--on-primary-color);
    border: none;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    box-shadow: var(--elevation-1);
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
  }
  button:hover {
    background: var(--primary-color-hover);
    box-shadow: var(--elevation-2);
  }
  button:active {
    background: var(--primary-color-active);
  }
  button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  `