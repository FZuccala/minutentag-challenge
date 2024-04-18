import { Shadows } from '@mui/material';

const array = Array.from(Array(25).keys());
export const shadows = array.map((n: number) => (n > 0 ? `0px 0px 32px 0px rgba(0, 0, 0, ${n / 15})` : 'none')) as Shadows;
