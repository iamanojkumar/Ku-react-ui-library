export const effects = {
  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },

  // Border widths
  borderWidth: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '4px',
  },

  // Border styles
  borderStyle: {
    none: 'none',
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },

  // Transitions
  transition: {
    none: 'none',
    all: 'all 0.2s ease-in-out',
    colors: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
    opacity: 'opacity 0.2s ease-in-out',
    shadow: 'box-shadow 0.2s ease-in-out',
    transform: 'transform 0.2s ease-in-out',
  },

  // Animation timings
  animation: {
    fast: '0.15s',
    base: '0.2s',
    slow: '0.3s',
    slower: '0.45s',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },

  // Focus ring styles
  focus: {
    ring: {
      width: '3px',
      color: 'rgba(66, 153, 225, 0.5)',
      offset: '2px',
    },
    outline: {
      width: '2px',
      style: 'solid',
      color: 'rgba(66, 153, 225, 0.5)',
      offset: '2px',
    },
  },

  // Opacity levels
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
}; 