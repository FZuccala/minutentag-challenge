import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { components } from './components';
import { typography } from './typography';
import { shadows } from './shadows';
import { breakpoints } from './breakpoints';

export const cobaltTheme = createTheme({
  breakpoints,
  palette,
  components,
  typography,
  shadows,
});

// !* Disable breakpoints and use "lg" for every viewport size (used for html2canvas PNG generation)
export const cobaltThemeNoBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 30000,
      xl: 30001,
    },
  },
  palette,
  components,
  typography,
  shadows,
});

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    lemon: true;
  }
}
