import { renderHook, act } from '@testing-library/react';
import {
  useCssVariable,
  useColorVariable,
  useSpacingVariable,
  useShadowVariable,
  useRadiusVariable,
  useTransitionVariable
} from '../useCssVariables';

describe('CSS Variables React Hooks', () => {
  describe('useCssVariable', () => {
    it('should get and set CSS variable values', () => {
      const { result } = renderHook(() => useCssVariable('test-variable', 'initial-value'));

      expect(result.current[0]).toBe('initial-value');

      act(() => {
        result.current[1]('new-value');
      });

      expect(result.current[0]).toBe('new-value');
    });

    it('should use existing CSS variable value if no initial value provided', () => {
      const { result } = renderHook(() => useCssVariable('color-primary-500'));

      expect(result.current[0]).toBe('#0066ff');
    });
  });

  describe('useColorVariable', () => {
    it('should get and set color variable values', () => {
      const { result } = renderHook(() => useColorVariable('primary-500', '#000000'));

      expect(result.current[0]).toBe('#000000');

      act(() => {
        result.current[1]('#ffffff');
      });

      expect(result.current[0]).toBe('#ffffff');
    });

    it('should use existing color variable value if no initial value provided', () => {
      const { result } = renderHook(() => useColorVariable('primary-500'));

      expect(result.current[0]).toBe('#0066ff');
    });
  });

  describe('useSpacingVariable', () => {
    it('should get and set spacing variable values', () => {
      const { result } = renderHook(() => useSpacingVariable('4', '2rem'));

      expect(result.current[0]).toBe('2rem');

      act(() => {
        result.current[1]('4rem');
      });

      expect(result.current[0]).toBe('4rem');
    });

    it('should use existing spacing variable value if no initial value provided', () => {
      const { result } = renderHook(() => useSpacingVariable('4'));

      expect(result.current[0]).toBe('1rem');
    });
  });

  describe('useShadowVariable', () => {
    it('should get and set shadow variable values', () => {
      const { result } = renderHook(() => useShadowVariable('sm', 'none'));

      expect(result.current[0]).toBe('none');

      act(() => {
        result.current[1]('0 1px 2px 0 rgba(0, 0, 0, 0.05)');
      });

      expect(result.current[0]).toBe('0 1px 2px 0 rgba(0, 0, 0, 0.05)');
    });

    it('should use existing shadow variable value if no initial value provided', () => {
      const { result } = renderHook(() => useShadowVariable('sm'));

      expect(result.current[0]).toBe('0 1px 2px 0 rgba(0, 0, 0, 0.05)');
    });
  });

  describe('useRadiusVariable', () => {
    it('should get and set radius variable values', () => {
      const { result } = renderHook(() => useRadiusVariable('sm', '0'));

      expect(result.current[0]).toBe('0');

      act(() => {
        result.current[1]('0.125rem');
      });

      expect(result.current[0]).toBe('0.125rem');
    });

    it('should use existing radius variable value if no initial value provided', () => {
      const { result } = renderHook(() => useRadiusVariable('sm'));

      expect(result.current[0]).toBe('0.125rem');
    });
  });

  describe('useTransitionVariable', () => {
    it('should get and set transition variable values', () => {
      const { result } = renderHook(() => useTransitionVariable('none', 'all 0.2s'));

      expect(result.current[0]).toBe('all 0.2s');

      act(() => {
        result.current[1]('none');
      });

      expect(result.current[0]).toBe('none');
    });

    it('should use existing transition variable value if no initial value provided', () => {
      const { result } = renderHook(() => useTransitionVariable('none'));

      expect(result.current[0]).toBe('none');
    });
  });
}); 