import { useState, useEffect } from 'react';
import {
  getCssVariable,
  setCssVariable,
  getColor,
  getSpacing,
  getShadow,
  getRadius,
  getTransition
} from '../utils/cssVariables';

/**
 * Hook for reading and writing CSS variables
 * @param variableName - The name of the CSS variable (without the -- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useCssVariable(name: string, initialValue?: string): [string, (value: string) => void] {
  const [value, setValue] = useState(() => {
    if (initialValue !== undefined) {
      setCssVariable(name, initialValue);
      return initialValue;
    }
    return getCssVariable(name);
  });

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          setValue(getCssVariable(name));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    return () => observer.disconnect();
  }, [name]);

  const updateValue = (newValue: string) => {
    setCssVariable(name, newValue);
    setValue(newValue);
  };

  return [value, updateValue];
}

/**
 * Hook for reading and writing color CSS variables
 * @param colorName - The name of the color variable (without the color- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useColorVariable(key: string, initialValue?: string): [string, (value: string) => void] {
  return useCssVariable(`color-${key}`, initialValue);
}

/**
 * Hook for reading and writing spacing CSS variables
 * @param spacingName - The name of the spacing variable (without the spacing- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useSpacingVariable(key: string, initialValue?: string): [string, (value: string) => void] {
  return useCssVariable(`spacing-${key}`, initialValue);
}

/**
 * Hook for reading and writing shadow CSS variables
 * @param shadowName - The name of the shadow variable (without the shadow- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useShadowVariable(key: string, initialValue?: string): [string, (value: string) => void] {
  return useCssVariable(`shadow-${key}`, initialValue);
}

/**
 * Hook for reading and writing radius CSS variables
 * @param radiusName - The name of the radius variable (without the radius- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useRadiusVariable(key: string, initialValue?: string): [string, (value: string) => void] {
  return useCssVariable(`radius-${key}`, initialValue);
}

/**
 * Hook for reading and writing transition CSS variables
 * @param transitionName - The name of the transition variable (without the transition- prefix)
 * @param initialValue - Optional initial value to set
 * @returns [value, setValue] tuple
 */
export function useTransitionVariable(key: string, initialValue?: string): [string, (value: string) => void] {
  return useCssVariable(`transition-${key}`, initialValue);
} 