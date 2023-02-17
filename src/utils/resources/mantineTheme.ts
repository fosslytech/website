import { MantineThemeOverride } from '@mantine/core';

import { THEME_MANTINE } from './themes/mantine';

export const getMantineTheme = (): MantineThemeOverride => {
  return THEME_MANTINE();
};
