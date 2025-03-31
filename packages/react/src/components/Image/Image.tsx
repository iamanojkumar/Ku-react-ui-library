import React, { useState, useEffect, forwardRef } from 'react';
import { IconPhotoOff } from '@tabler/icons-react';
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

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = '',
      width,
      height,
      aspectRatio,
      srcSet,
      sizes,
      fallback,
      isDecorative = false,
      objectFit = 'cover',
      className = '',
      errorMessage = 'Image failed to load',
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setHasError(false);
      setIsLoading(true);
    }, [src]);

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const getAspectRatioStyle = () => {
      if (!aspectRatio) return {};

      const [width, height] = aspectRatio.split(':').map(Number);
      return {
        aspectRatio: `${width}/${height}`,
      };
    };

    const containerStyle = {
      width: width || '100%',
      height: height || 'auto',
      ...getAspectRatioStyle(),
    };

    if (hasError || !src) {
      return (
        <div
          className={`ku-image-container ku-image-fallback ${className}`}
          style={containerStyle}
          role={!isDecorative ? 'img' : undefined}
          aria-label={!isDecorative ? alt : undefined}
        >
          {fallback || (
            <div className="ku-image-fallback-content">
              <IconPhotoOff size={24} stroke={2} />
              <span className="ku-image-error-text">{errorMessage}</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className={`ku-image-container ${className}`} style={containerStyle}>
        {isLoading && (
          <div className="ku-image-loading">
            <div className="ku-image-loading-spinner" />
          </div>
        )}
        <img
          ref={ref}
          src={src}
          alt={isDecorative ? '' : alt}
          srcSet={srcSet}
          sizes={sizes}
          className="ku-image"
          style={{ objectFit }}
          onError={handleError}
          onLoad={handleLoad}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = 'Image'; 