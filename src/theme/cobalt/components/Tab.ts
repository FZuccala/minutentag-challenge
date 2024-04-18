import { Components, Theme } from '@mui/material';

export const MuiTab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      cursor: 'pointer',
      fontWeight: '700',
      textTransform: 'none',
      '&.Mui-selected': {
        backgroundColor: theme.palette.colors.cobalt200,
      },
    }),
  },
};
