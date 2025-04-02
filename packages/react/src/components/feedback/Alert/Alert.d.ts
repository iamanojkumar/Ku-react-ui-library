import React from 'react';
import './Alert.css';
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
type BaseProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>;
export interface AlertProps extends BaseProps {
    /**
     * The variant of the alert that maps to different colors
     * @default 'info'
     */
    variant?: AlertVariant;
    /**
     * The title of the alert
     */
    title?: React.ReactNode;
    /**
     * Custom icon to display
     * If not provided, a default icon based on variant will be used
     */
    icon?: React.ReactNode;
    /**
     * Whether the alert can be dismissed
     * @default false
     */
    dismissible?: boolean;
    /**
     * Callback fired when the alert is dismissed
     */
    onDismiss?: () => void;
    /**
     * Actions to be displayed in the alert
     */
    actions?: React.ReactNode;
    /**
     * Whether to show the actions
     * @default true
     */
    showActions?: boolean;
    /**
     * Whether the alert should be full width on mobile
     * @default true
     */
    fullWidthOnMobile?: boolean;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export { Alert };
//# sourceMappingURL=Alert.d.ts.map