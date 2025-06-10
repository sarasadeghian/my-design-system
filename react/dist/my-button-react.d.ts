import * as React from 'react';
import type { ButtonVariant, ButtonSize } from '@sara-sadeghian/my-design-system';
type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
export interface MyButtonProps extends BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: (e: CustomEvent<{
        originalEvent: MouseEvent;
    }>) => void;
}
export declare const MyButtonReact: React.ComponentType<MyButtonProps>;
export {};
