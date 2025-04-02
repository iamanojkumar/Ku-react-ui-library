import React from 'react';
import './Card.css';
export type CardVariant = 'elevated' | 'outlined' | 'filled';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The variant of the card
     * @default 'elevated'
     */
    variant?: CardVariant;
    /**
     * Whether the card is clickable
     * @default false
     */
    clickable?: boolean;
    /**
     * Whether the card is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Optional media content to show at the top of the card
     */
    media?: React.ReactNode;
    /**
     * Optional actions to show at the bottom of the card
     */
    actions?: React.ReactNode;
    /**
     * Optional class name
     */
    className?: string;
}
export declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=Card.d.ts.map