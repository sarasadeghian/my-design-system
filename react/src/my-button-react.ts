import { createComponent } from '@lit/react';
import * as React from 'react';
import { MyButton } from '@sara-sadeghian/my-design-system';
import type { ButtonVariant, ButtonSize } from '@sara-sadeghian/my-design-system';

type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;


export interface MyButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: CustomEvent<{ originalEvent: MouseEvent }>) => void;
}

export const MyButtonReact = createComponent({
  tagName: 'my-button',
  elementClass: MyButton,
  react: React,
  events: {
    onClick: 'buttonClick',
  },
}) as unknown as React.ComponentType<MyButtonProps>;