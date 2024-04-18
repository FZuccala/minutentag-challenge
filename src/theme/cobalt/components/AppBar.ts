import { Components, Theme } from '@mui/material';

export const MuiAppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: theme.zIndex.appBar,
      borderRadius: '0',
      boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.08)',
    }),
  },
};
