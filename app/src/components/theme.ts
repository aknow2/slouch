
export const backgroundColor = '#e0e0e0';
export const spacing = (x: number = 1) => `${8 * x}px`
export const theme = {
  spacing,
  backgroundColor,
}

export type MyTheme = typeof theme
