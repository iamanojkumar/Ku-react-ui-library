import React from 'react';
import './Image.css';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * The source URL of the image
     */
    src?: string;
    /**
     * Alternative text for the image
     */
    alt?: string;
    /**
     * Width of the image
     */
    width?: number | string;
    /**
     * Height of the image
     */
    height?: number | string;
    /**
     * Aspect ratio of the image (e.g., '16:9', '4:3', '1:1')
     */
    aspectRatio?: string;
    /**
     * High-resolution image sources for different screen densities
     */
    srcSet?: string;
    /**
     * Image sizes for responsive design
     */
    sizes?: string;
    /**
     * Custom fallback element when image fails to load
     */
    fallback?: React.ReactNode;
    /**
     * Whether the image is decorative (if true, alt text will be empty)
     */
    isDecorative?: boolean;
    /**
     * Object-fit property for the image
     */
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom error message when image fails to load
     */
    errorMessage?: string;
}
export declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
//# sourceMappingURL=Image.d.ts.map