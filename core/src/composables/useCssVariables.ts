import { ref, onMounted, watch } from 'vue';
import { getCssVariable, setCssVariable } from '../utils/cssVariables';

/**
 * Composable for reading and writing CSS variables
 * @param variableName - The name of the CSS variable (without the -- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useCssVariable = (
  variableName: string,
  initialValue?: string
) => {
  const value = ref<string>('');

  const setValue = (newValue: string) => {
    setCssVariable(variableName, newValue);
    value.value = newValue;
  };

  onMounted(() => {
    const currentValue = getCssVariable(variableName);
    if (initialValue) {
      setValue(initialValue);
    } else if (currentValue) {
      value.value = currentValue;
    }
  });

  return {
    value,
    setValue
  };
};

/**
 * Composable for reading and writing color CSS variables
 * @param colorName - The name of the color variable (without the color- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useColorVariable = (
  colorName: string,
  initialValue?: string
) => {
  return useCssVariable(`color-${colorName}`, initialValue);
};

/**
 * Composable for reading and writing spacing CSS variables
 * @param spacingName - The name of the spacing variable (without the spacing- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useSpacingVariable = (
  spacingName: string,
  initialValue?: string
) => {
  return useCssVariable(`spacing-${spacingName}`, initialValue);
};

/**
 * Composable for reading and writing shadow CSS variables
 * @param shadowName - The name of the shadow variable (without the shadow- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useShadowVariable = (
  shadowName: string,
  initialValue?: string
) => {
  return useCssVariable(`shadow-${shadowName}`, initialValue);
};

/**
 * Composable for reading and writing radius CSS variables
 * @param radiusName - The name of the radius variable (without the radius- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useRadiusVariable = (
  radiusName: string,
  initialValue?: string
) => {
  return useCssVariable(`radius-${radiusName}`, initialValue);
};

/**
 * Composable for reading and writing transition CSS variables
 * @param transitionName - The name of the transition variable (without the transition- prefix)
 * @param initialValue - Optional initial value to set
 * @returns { value: Ref<string>, setValue: (value: string) => void }
 */
export const useTransitionVariable = (
  transitionName: string,
  initialValue?: string
) => {
  return useCssVariable(`transition-${transitionName}`, initialValue);
}; 