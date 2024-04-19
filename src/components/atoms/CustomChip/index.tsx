import React from 'react'
import { Box, Theme, styled, useTheme } from '@mui/material'

type Props = {
    label: string,
    isActive: boolean,
    onClick: (sku:string) => void,
    sku: string
}
const StyledBox = styled(Box)(({theme, isActive}: {theme: Theme, isActive: boolean}) => ({
    backgroundColor: theme.palette.colors.white,
    color: isActive ? theme.palette.colors.orange500 : theme.palette.colors.gray500,
    padding: '4px 16px',
    borderRadius: '16px',
    border: isActive ? `1px solid ${theme.palette.colors.orange500}` : `1px solid ${theme.palette.colors.gray500}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
        border: `1px solid ${theme.palette.colors.orange500}`,
        color: theme.palette.colors.orange500
    }
}))
const CustomChip = ({
    label,
    isActive,
    onClick,
    sku
}: Props) => {
    const theme = useTheme()
    const handleClick = () => {
        onClick(sku)
    }
  return (
    <StyledBox theme={theme} onClick={handleClick} isActive={isActive}>{label}</StyledBox>
  )
}

export default CustomChip