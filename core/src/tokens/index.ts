export * from './colors';
export * from './typography';
export * from './spacing';
export * from './effects';
export * from './semantic';
export * from './breakpoints';
export * from './theme-variants';
export * from './animations';
export * from './elevation';
export * from './radius';

import { lightColors, darkColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { effects } from './effects';
import { semanticTokens } from './semantic';
import { breakpoints } from './breakpoints';

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  typography,
  spacing,
  effects,
  semantic: semanticTokens,
  breakpoints,
} as const;

export type Tokens = typeof tokens;

// Helper types
export type ColorToken = keyof typeof lightColors;
export type TypographyToken = keyof typeof typography;
export type SpacingToken = keyof typeof spacing;
export type EffectToken = keyof typeof effects;
export type SemanticToken = keyof typeof semanticTokens;
export type BreakpointToken = keyof typeof breakpoints;

// Re-export commonly used types
export type {
  ColorToken,
  TypographyToken,
  SpacingToken,
  BreakpointToken,
  EffectToken,
  SemanticToken,
  ThemeVariant,
  AnimationToken,
  AnimationPreset,
  ElevationToken,
  ElevationPreset,
  RadiusToken,
  RadiusPreset
} from './types'; 