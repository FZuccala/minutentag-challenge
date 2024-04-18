import { PaletteOptions } from '@mui/material';
import { colors, Colors, colorsObj } from './colors';

declare module '@mui/material/styles' {
  interface Palette {
    disabled?: Palette['primary'];
    dark?: Palette['primary'];
    colors: Colors;
  }
  interface PaletteOptions {
    disabled?: Partial<Palette['primary']>;
    dark?: Partial<Palette['primary']>;
    colors: Colors;
  }
}

export const palette: PaletteOptions = {
  primary: {
    light: colors.white,
    main: colors.gray100,
    dark: colors.gray200,
    contrastText: colors.gray600,
  },
  secondary: {
    light: colors.white,
    contrastText: colors.black,
    main: colors.white,
    dark: colors.cobalt500,
  },
  disabled: {
    main: colors.gray300,
    contrastText: colors.white,
  },
  dark: {
    main: colors.black,
    contrastText: colors.white,
  },
  error: {
    main: colors.red500,
    contrastText: colors.white,
  },
  success: {
    main: colors.green500,
    contrastText: colors.white,
  },
  background: {
    default: colors.gray100,
  },
  colors,
  ...colorsObj,
};
