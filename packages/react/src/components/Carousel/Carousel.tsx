import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@ku-design-system/core';
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

export const Carousel: React.FC<CarouselProps> = ({
  items,
  showControls = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  pauseOnHover = true,
  loop = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle touch/mouse events for drag scrolling
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        navigate('prev');
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigate('next');
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(items.length - 1);
        break;
    }
  };

  // Navigation functions
  const goToSlide = React.useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const itemWidth = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  }, []);

  const navigate = React.useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + items.length) % items.length
      : (currentIndex + 1) % items.length;
    
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  // Handle scroll events
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const itemWidth = containerRef.current.offsetWidth;
    const newIndex = Math.round(containerRef.current.scrollLeft / itemWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      if (loop || currentIndex < items.length - 1) {
        navigate('next');
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, isPaused, loop, items.length, autoPlayInterval, navigate]);

  return (
    <div
      className={classNames('ku-carousel', className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="ku-carousel__container"
        role="presentation"
        onScroll={handleScroll}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="ku-carousel__item"
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} of ${items.length}`}
          >
            {item.content}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            className="ku-carousel__control ku-carousel__control--prev"
            onClick={() => navigate('prev')}
            aria-label="Previous slide"
            disabled={!loop && currentIndex === 0}
          >
            {React.createElement(ChevronLeftIcon, {
              size: 24,
              stroke: 2
            })}
          </button>
          <button
            className="ku-carousel__control ku-carousel__control--next"
            onClick={() => navigate('next')}
            aria-label="Next slide"
            disabled={!loop && currentIndex === items.length - 1}
          >
            {React.createElement(ChevronRightIcon, {
              size: 24,
              stroke: 2
            })}
          </button>
        </>
      )}

      {showIndicators && (
        <div className="ku-carousel__indicators" role="tablist">
          {items.map((_, index) => (
            <button
              key={index}
              className={classNames('ku-carousel__indicator', {
                'ku-carousel__indicator--active': index === currentIndex,
              })}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';

export default Carousel; 