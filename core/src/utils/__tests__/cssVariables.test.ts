import {
  getCssVariable,
  setCssVariable,
  getCssVariablesByPrefix,
  cssVarToJsVar,
  jsVarToCssVar,
  getColor,
  getSpacing,
  getShadow,
  getRadius,
  getTransition
} from '../cssVariables';

describe('CSS Variables Utilities', () => {
  describe('getCssVariable', () => {
    it('should get the value of an existing CSS variable', () => {
      expect(getCssVariable('color-primary-500')).toBe('#0066ff');
      expect(getCssVariable('font-size-base')).toBe('1rem');
      expect(getCssVariable('spacing-4')).toBe('1rem');
    });

    it('should return empty string for non-existent CSS variable', () => {
      expect(getCssVariable('non-existent-variable')).toBe('');
    });
  });

  describe('setCssVariable', () => {
    it('should set a CSS variable value', () => {
      setCssVariable('test-variable', 'test-value');
      expect(getCssVariable('test-variable')).toBe('test-value');
    });

    it('should update an existing CSS variable value', () => {
      setCssVariable('color-primary-500', '#ff0000');
      expect(getCssVariable('color-primary-500')).toBe('#ff0000');
    });
  });

  describe('getCssVariablesByPrefix', () => {
    it('should get all CSS variables with a specific prefix', () => {
      const colorVars = getCssVariablesByPrefix('color-primary');
      expect(colorVars).toHaveProperty('color-primary-500', '#0066ff');
      expect(colorVars).toHaveProperty('color-primary-600', '#0052cc');
    });

    it('should return empty object for non-existent prefix', () => {
      const vars = getCssVariablesByPrefix('non-existent-prefix');
      expect(vars).toEqual({});
    });
  });

  describe('cssVarToJsVar', () => {
    it('should convert CSS variable names to JavaScript variable names', () => {
      expect(cssVarToJsVar('--color-primary-500')).toBe('colorPrimary500');
      expect(cssVarToJsVar('--font-size-base')).toBe('fontSizeBase');
      expect(cssVarToJsVar('--spacing-4')).toBe('spacing4');
    });

    it('should handle variables without -- prefix', () => {
      expect(cssVarToJsVar('color-primary-500')).toBe('colorPrimary500');
    });
  });

  describe('jsVarToCssVar', () => {
    it('should convert JavaScript variable names to CSS variable names', () => {
      expect(jsVarToCssVar('colorPrimary500')).toBe('--color-primary-500');
      expect(jsVarToCssVar('fontSizeBase')).toBe('--font-size-base');
      expect(jsVarToCssVar('spacing4')).toBe('--spacing-4');
    });

    it('should handle variables with -- prefix', () => {
      expect(jsVarToCssVar('--color-primary-500')).toBe('--color-primary-500');
    });
  });

  describe('getColor', () => {
    it('should get color values', () => {
      expect(getColor('primary-500')).toBe('#0066ff');
      expect(getColor('success-500')).toBe('#4caf50');
      expect(getColor('text-primary')).toBe('#212121');
    });
  });

  describe('getSpacing', () => {
    it('should get spacing values', () => {
      expect(getSpacing('4')).toBe('1rem');
      expect(getSpacing('8')).toBe('2rem');
      expect(getSpacing('12')).toBe('3rem');
    });
  });

  describe('getShadow', () => {
    it('should get shadow values', () => {
      expect(getShadow('sm')).toBe('0 1px 2px 0 rgba(0, 0, 0, 0.05)');
      expect(getShadow('md')).toBe('0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)');
      expect(getShadow('lg')).toBe('0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)');
    });
  });

  describe('getRadius', () => {
    it('should get radius values', () => {
      expect(getRadius('sm')).toBe('0.125rem');
      expect(getRadius('md')).toBe('0.375rem');
      expect(getRadius('lg')).toBe('0.5rem');
    });
  });

  describe('getTransition', () => {
    it('should get transition values', () => {
      expect(getTransition('none')).toBe('none');
      expect(getTransition('all')).toBe('all 0.2s ease-in-out');
      expect(getTransition('colors')).toBe('background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out');
    });
  });
}); 