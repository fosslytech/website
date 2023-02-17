import { ColorScheme, DefaultMantineColor, MantineThemeOverride } from '@mantine/core';

export const THEME_MANTINE = (): MantineThemeOverride => ({
  /** Put your mantine theme override here */
  colorScheme: 'dark',
  primaryColor: 'blue',
  fontFamily: `Inter, sans-serif`,
});
