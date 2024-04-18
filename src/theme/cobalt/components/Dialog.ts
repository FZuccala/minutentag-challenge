import { Components, Theme } from '@mui/material';

export const MuiDialog: Components<Omit<Theme, 'components'>>['MuiDialog'] = {
  defaultProps: {
    componentsProps: {
      backdrop: {
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        },
      },
    },
  },
};
