import { Components, Theme } from '@mui/material';
import { colors } from '../colors';

export const MuiOutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: colors.gray300,
    },
  },
};
