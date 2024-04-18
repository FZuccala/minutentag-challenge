import { Components, Theme } from '@mui/material';

export const MuiLink: Components<Omit<Theme, 'components'>>['MuiLink'] = {
  styleOverrides: {
    root: {
      cursor: 'pointer',
    },
  },
};
