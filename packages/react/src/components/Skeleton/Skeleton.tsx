import React from 'react';
import './Skeleton.css';

export type SkeletonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SkeletonShape = 'text' | 'circle' | 'rectangle' | 'avatar';
export type SkeletonVariant = 'default' | 'button' | 'input' | 'card';

export interface SkeletonProps {
  /**
   * The size of the skeleton
   */
  size?: SkeletonSize;
  /**
   * The shape of the skeleton
   */
  shape?: SkeletonShape;
  /**
   * The variant of the skeleton
   */
  variant?: SkeletonVariant;
  /**
   * Whether to show the animation
   */
  animate?: boolean;
  /**
   * Custom width of the skeleton
   */
  width?: string | number;
  /**
   * Custom height of the skeleton
   */
  height?: string | number;
  /**
   * Whether to repeat the skeleton multiple times
   */
  repeat?: number;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
}

function Skeleton({
  size = 'md',
  shape = 'rectangle',
  variant = 'default',
  animate = true,
  width,
  height,
  repeat = 1,
  className,
  style: styleProp,
  ...props
}: SkeletonProps) {
  const getSkeletonStyle = () => {
    const style: React.CSSProperties = { ...styleProp };
    
    if (width) {
      style.width = typeof width === 'number' ? `${width}px` : width;
    }
    
    if (height) {
      style.height = typeof height === 'number' ? `${height}px` : height;
    }
    
    return style;
  };

  const renderSkeleton = (key?: number) => (
    <div
      key={key}
      className={[
        'ku-skeleton',
        `ku-skeleton--${size}`,
        `ku-skeleton--${shape}`,
        `ku-skeleton--${variant}`,
        animate && 'ku-skeleton--animate',
        className
      ].filter(Boolean).join(' ')}
      style={getSkeletonStyle()}
      {...props}
    />
  );

  if (repeat > 1) {
    return (
      <div className="ku-skeleton__group">
        {Array.from({ length: repeat }, (_, index) => renderSkeleton(index))}
      </div>
    );
  }

  return renderSkeleton();
}

Skeleton.displayName = 'Skeleton';

// Compound components for common use cases
export function SkeletonText(props: Omit<SkeletonProps, 'shape'>) {
  return <Skeleton shape="text" {...props} />;
}

export function SkeletonCircle(props: Omit<SkeletonProps, 'shape'>) {
  return <Skeleton shape="circle" {...props} />;
}

export function SkeletonAvatar(props: Omit<SkeletonProps, 'shape'>) {
  return <Skeleton shape="avatar" {...props} />;
}

SkeletonText.displayName = 'SkeletonText';
SkeletonCircle.displayName = 'SkeletonCircle';
SkeletonAvatar.displayName = 'SkeletonAvatar';

export { Skeleton }; 