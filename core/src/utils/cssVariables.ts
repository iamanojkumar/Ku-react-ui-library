/**
 * Get the value of a CSS variable
 * @param name The name of the CSS variable (with or without -- prefix)
 * @returns The value of the CSS variable or empty string if not found
 */
export function getCssVariable(name: string): string {
  const cssVarName = name.startsWith('--') ? name : `--${name}`;
  return getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim();
}

/**
 * Set a CSS variable value
 * @param name The name of the CSS variable (with or without -- prefix)
 * @param value The value to set
 */
export function setCssVariable(name: string, value: string): void {
  const cssVarName = name.startsWith('--') ? name : `--${name}`;
  document.documentElement.style.setProperty(cssVarName, value);
}

/**
 * Get all CSS variables with a specific prefix
 * @param prefix The prefix to filter variables by
 * @returns Object containing all matching CSS variables and their values
 */
export function getCssVariablesByPrefix(prefix: string): Record<string, string> {
  const cssVarPrefix = prefix.startsWith('--') ? prefix : `--${prefix}`;
  const styles = getComputedStyle(document.documentElement);
  const variables: Record<string, string> = {};

  for (let i = 0; i < styles.length; i++) {
    const property = styles[i];
    if (property.startsWith(cssVarPrefix)) {
      variables[property.slice(2)] = styles.getPropertyValue(property).trim();
    }
  }

  return variables;
}

/**
 * Convert a CSS variable name to a JavaScript variable name
 * @param cssVar The CSS variable name (with or without -- prefix)
 * @returns The JavaScript variable name in camelCase
 */
export function cssVarToJsVar(cssVar: string): string {
  const name = cssVar.startsWith('--') ? cssVar.slice(2) : cssVar;
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Convert a JavaScript variable name to a CSS variable name
 * @param jsVar The JavaScript variable name in camelCase
 * @returns The CSS variable name with -- prefix
 */
export function jsVarToCssVar(jsVar: string): string {
  const name = jsVar.startsWith('--') ? jsVar.slice(2) : jsVar;
  return `--${name.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`)}`;
}

/**
 * Get a color value from CSS variables
 * @param key The color key (e.g., 'primary-500', 'success-500')
 * @returns The color value
 */
export function getColor(key: string): string {
  return getCssVariable(`color-${key}`);
}

/**
 * Get a spacing value from CSS variables
 * @param key The spacing key (e.g., '4', '8', '12')
 * @returns The spacing value
 */
export function getSpacing(key: string): string {
  return getCssVariable(`spacing-${key}`);
}

/**
 * Get a shadow value from CSS variables
 * @param key The shadow key (e.g., 'sm', 'md', 'lg')
 * @returns The shadow value
 */
export function getShadow(key: string): string {
  return getCssVariable(`shadow-${key}`);
}

/**
 * Get a border radius value from CSS variables
 * @param key The radius key (e.g., 'sm', 'md', 'lg')
 * @returns The radius value
 */
export function getRadius(key: string): string {
  return getCssVariable(`radius-${key}`);
}

/**
 * Get a transition value from CSS variables
 * @param key The transition key (e.g., 'none', 'all', 'colors')
 * @returns The transition value
 */
export function getTransition(key: string): string {
  return getCssVariable(`transition-${key}`);
} 