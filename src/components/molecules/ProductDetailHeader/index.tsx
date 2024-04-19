import React from 'react'
import { Box, IconButton, styled, Typography } from '@mui/material'
import { HiArrowLeft } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRouter } from 'next/router';
const StyledContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
})
const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 700,
    color: theme.palette.colors.grey,
    display: 'flex',
    alignItems: 'center',
}))
const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.colors.black,
    backgroundColor: theme.palette.colors.white,
    '&:hover': {
        backgroundColor: theme.palette.colors.gray100,
    }
}))
type Props = {}

const ProductDetailsHeader = (props: Props) => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
    <StyledContainer>
        <StyledIconButton onClick={handleBack}>
            <HiArrowLeft />
        </StyledIconButton>
        <StyledTitle variant="h2">Details</StyledTitle>
        <StyledIconButton>
            <HiOutlineDotsHorizontal />
        </StyledIconButton>
    </StyledContainer>
  )
}

export default ProductDetailsHeader