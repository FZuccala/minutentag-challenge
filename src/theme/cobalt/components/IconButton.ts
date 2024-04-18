import { Components, Theme } from '@mui/material';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    dark: true;
  }
}

export const MuiIconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  styleOverrides: {
    colorPrimary: ({ theme }) => ({
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        background: theme.palette.primary.dark,
      },
      '&.Mui-disabled': {
        background: theme.palette.disabled?.main,
        color: theme.palette.disabled?.contrastText,
      },
    }),
    colorSecondary: ({ theme }) => ({
      border: `1px solid ${theme.palette.secondary.contrastText}`,
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        background: theme.palette.secondary.dark,
        color: theme.palette.secondary.light,
      },
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.disabled?.main}`,
        background: theme.palette.disabled?.contrastText,
        color: theme.palette.disabled?.main,
      },
    }),
  },
};
