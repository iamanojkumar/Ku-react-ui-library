import React from 'react';
import './Avatar.css';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The size of the avatar */
    size?: AvatarSize;
    /** The shape of the avatar */
    shape?: AvatarShape;
    /** The background color when no image is present */
    color?: AvatarColor;
    /** The image source URL */
    src?: string;
    /** Alt text for the image */
    alt?: string;
    /** Fallback content when image fails to load or no image is provided */
    fallback?: React.ReactNode;
    /** Text to display when no image or fallback is provided (usually initials) */
    initials?: string;
    /** Whether this avatar is part of a group */
    grouped?: boolean;
    /** Custom border color for grouped avatars */
    borderColor?: string;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Avatar.d.ts.map