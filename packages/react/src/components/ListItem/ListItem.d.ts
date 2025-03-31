import React, { ReactNode } from 'react';
import './ListItem.css';
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The main text content of the list item */
    children: ReactNode;
    /** Optional subtext to display below the main text */
    subText?: string;
    /** Whether to show subtext */
    showSubText?: boolean;
    /** Leading icon component */
    leadingIcon?: ReactNode;
    /** Whether to show the leading icon */
    showLeadingIcon?: boolean;
    /** First trailing icon component */
    trailingIcon1?: ReactNode;
    /** Whether to show the first trailing icon */
    showTrailingIcon1?: boolean;
    /** Second trailing icon component */
    trailingIcon2?: ReactNode;
    /** Whether to show the second trailing icon */
    showTrailingIcon2?: boolean;
    /** Whether to show a checkbox */
    showCheckbox?: boolean;
    /** Whether the checkbox is checked */
    checked?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether the item is in loading state */
    loading?: boolean;
    /** Whether the item is clickable */
    clickable?: boolean;
    /** Callback when the item is clicked */
    onClick?: () => void;
    /** Additional CSS class */
    className?: string;
    /** Whether the item is selected/active */
    selected?: boolean;
}
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ListItem.d.ts.map