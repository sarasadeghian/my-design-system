import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from 'storybook/test';
import './my-button.ts';
import type { ButtonVariant, ButtonSize } from './my-button';

type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  onClick: (e: CustomEvent) => void;
};

const meta = {
  title: 'Components/Button',
  component: 'my-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    onClick: { action: 'clicked' }
  },
  render: (args: ButtonProps) => html`
    <my-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Button
    </my-button>
  `
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    onClick: fn()
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    onClick: fn()
  },
  render: (args) => html`
    <my-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Secondary Button
    </my-button>
  `
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    onClick: fn()
  },
  render: (args) => html`
    <my-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Outline Button
    </my-button>
  `
};

export const Small: Story = {
  args: {
    size: 'small',
    onClick: fn()
  },
  render: (args) => html`
    <my-button
      size=${args.size}
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Small Button
    </my-button>
  `
};

export const Large: Story = {
  args: {
    size: 'large',
    onClick: fn()
  },
  render: (args) => html`
    <my-button
      size=${args.size}
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Large Button
    </my-button>
  `
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: fn()
  },
  render: (args) => html`
    <my-button
      ?disabled=${args.disabled}
      @onClick=${args.onClick}
    >
      Disabled Button
    </my-button>
  `
};
