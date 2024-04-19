import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import { styled } from '@mui/material';
const StyledBottomNavigation = styled(BottomNavigation)(({theme}) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    zIndex: theme.zIndex.appBar,
    height: '72px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
}));
type Props = {
  children?: React.ReactNode
}

const BottomBar = ({children}: Props) => {
  return (
    <StyledBottomNavigation>
      {children}
  </StyledBottomNavigation>
  )
}

export default BottomBar