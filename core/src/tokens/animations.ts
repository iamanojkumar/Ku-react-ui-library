export const animations = {
  // Duration tokens
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '1000ms'
  },

  // Timing function tokens
  timing: {
    linear: 'linear',
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'step-start': 'step-start',
    'step-end': 'step-end'
  },

  // Animation tokens
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 }
    },
    slideIn: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 }
    },
    slideOut: {
      from: { transform: 'translateY(0)', opacity: 1 },
      to: { transform: 'translateY(20px)', opacity: 0 }
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 }
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: 1 },
      to: { transform: 'scale(0.95)', opacity: 0 }
    }
  },

  // Animation presets
  presets: {
    fadeIn: {
      animation: 'fadeIn 250ms ease-in-out',
      keyframes: 'fadeIn'
    },
    fadeOut: {
      animation: 'fadeOut 250ms ease-in-out',
      keyframes: 'fadeOut'
    },
    slideIn: {
      animation: 'slideIn 250ms ease-out',
      keyframes: 'slideIn'
    },
    slideOut: {
      animation: 'slideOut 250ms ease-in',
      keyframes: 'slideOut'
    },
    scaleIn: {
      animation: 'scaleIn 200ms ease-out',
      keyframes: 'scaleIn'
    },
    scaleOut: {
      animation: 'scaleOut 200ms ease-in',
      keyframes: 'scaleOut'
    }
  }
} as const;

export type AnimationToken = keyof typeof animations;
export type AnimationPreset = keyof typeof animations.presets; 