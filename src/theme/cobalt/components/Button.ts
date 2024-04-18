import { Components, Theme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 30,
      fontWeight: 700,
      '&.Mui-disabled': {
        background: theme.palette.disabled?.main,
        color: theme.palette.disabled?.contrastText,
      },
      textTransform: 'none',
      fontSize: '1rem',
      padding: '6px 24px',
    }),
    outlinedPrimary: ({ theme }) => ({
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        color: theme.palette.primary.dark,
        background: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.dark}`,
      },
      '&.Mui-disabled': {
        background: theme.palette.disabled?.contrastText,
        color: theme.palette.disabled?.main,
      },
    }),
  },
};
