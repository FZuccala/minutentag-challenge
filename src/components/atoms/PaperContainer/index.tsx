import { Paper, styled, useTheme, useMediaQuery, Box } from '@mui/material';
import React  from 'react'
import { SxProps } from '@mui/material';
type Props = {
    children: React.ReactNode;
    sx?: SxProps
}
const StyledPaperContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: '100%',
    backgroundColor: "transparent",
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
      borderRadius: '12px',
      backgroundColor: theme.palette.background.paper,
      maxWidth: '1200px',
    }
  }));
const PaperContainer = ({children, sx = {}}: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box display="flex" justifyContent="center" sx={sx}>
        <StyledPaperContainer elevation={isMobile ? 0 : 2}>{children}</StyledPaperContainer>
    </Box>
  )
}

export default PaperContainer