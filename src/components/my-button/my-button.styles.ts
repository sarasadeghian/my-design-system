import { css } from 'lit';

export const myButtonStyles = css`
  button {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
  }

  /* Variants */
  button.variant-primary {
    background: var(--primary-color);
    color: var(--on-primary-color);
    box-shadow: var(--elevation-1);
  }
  button.variant-primary:hover {
    background: var(--primary-color-hover);
    box-shadow: var(--elevation-2);
  }
  button.variant-primary:active {
    background: var(--primary-color-active);
  }

  button.variant-secondary {
    background: var(--secondary-color);
    color: var(--on-secondary-color);
    box-shadow: var(--elevation-1);
  }
  button.variant-secondary:hover {
    /* background: var(--secondary-color-hover); */
    box-shadow: var(--elevation-2);
  }

  button.variant-outline {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  button.variant-outline:hover {
    background: var(--primary-color);
    color: var(--on-primary-color);
  }

  /* Sizes */
  button.size-small {
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
  }

  button.size-medium {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size);
  }

  button.size-large {
    padding: var(--space-md) var(--space-lg);
    font-size: var(--font-size-lg);
  }

  /* States */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;