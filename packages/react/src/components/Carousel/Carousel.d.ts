import React from 'react';
import './Carousel.css';
export interface CarouselItem {
    id: string;
    content: React.ReactNode;
}
export interface CarouselProps {
    /**
     * Array of carousel items
     */
    items: CarouselItem[];
    /**
     * Whether to show navigation controls
     * @default true
     */
    showControls?: boolean;
    /**
     * Whether to show indicators
     * @default true
     */
    showIndicators?: boolean;
    /**
     * Whether to auto-play the carousel
     * @default false
     */
    autoPlay?: boolean;
    /**
     * Auto-play interval in milliseconds
     * @default 5000
     */
    autoPlayInterval?: number;
    /**
     * Whether to pause on hover
     * @default true
     */
    pauseOnHover?: boolean;
    /**
     * Whether to loop through items
     * @default true
     */
    loop?: boolean;
    /**
     * Optional class name
     */
    className?: string;
}
export declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map