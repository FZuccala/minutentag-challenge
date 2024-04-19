import React, { use, useState } from 'react';
import { Box, Stack, Typography, styled, useTheme, useMediaQuery, Button } from '@mui/material';
import { useGlobalStore } from '@/store/global';
import CustomChip from '@/components/atoms/CustomChip';
import TextTruncate from '@/components/atoms/TextTruncate';
import useWindowSize from '@/hooks/useWindowSize';
import Confetti from 'react-confetti'
import { toast } from 'sonner';

const StyledBrand = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '24x',
  fontWeight: 700,
}));
const StyledPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.colors.orange500,
  fontSize: '24px',
  fontWeight: 700,
}));
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px 12px 0 0',
  padding: '16px 12px',
  flex: 1,
}));
const StyledSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.colors.gray400,
  fontSize: '14px',
  fontWeight: 400,
}));
const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.colors.grey,
  fontSize: '16px',
  fontWeight: 700,
  marginBottom: '8px',
}));
const StyledBtnFilled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.colors.orange500,
  color: theme.palette.colors.white,
  borderRadius: '8px',
  padding: '8px 0',
  width: '200px',
  height: '54px',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    backgroundColor: theme.palette.colors.orange600,
  },
}));
type Props = {};

const ProductDetailsCard = (props: Props) => {
    const {width, height} = useWindowSize();
  const { selectedProduct, selectedSku, setSelectedSku, getProductPrice, getProductStock, isAddToCart, setIsAddToCart,  } = useGlobalStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickChip = (sku: string) => {
    setSelectedSku(sku);
  };
  const handleAddToCart = () => {
    const stock = getProductStock(selectedSku);
    if (stock === 0) {
      toast.error('Out of stock');
      return;
    }
    setIsAddToCart(true);
    setTimeout(() => {
        setIsAddToCart(false);
    }, 5000);
  }
  return (
    <>
            <StyledBox>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <StyledBrand variant="h5">{selectedProduct?.brand}</StyledBrand>
          <StyledSubTitle>
            Origin: {selectedProduct?.origin} | Stock: {getProductStock(selectedSku)}
          </StyledSubTitle>
        </Stack>
        <StyledPrice variant="h5">{getProductPrice(selectedSku)}</StyledPrice>
      </Stack>
      <Box my={4}>
        <StyledSectionTitle variant="h6">Description</StyledSectionTitle>
        <TextTruncate text={selectedProduct?.information || ''} />
      </Box>
      <Box>
        <StyledSectionTitle variant="h6">Size</StyledSectionTitle>
        <Stack direction="row" spacing={2}>
          {selectedProduct?.skus.map((sku) => (
            <CustomChip key={sku.code} label={sku.name} onClick={handleClickChip} isActive={selectedSku === sku.code} sku={sku.code} />
          ))}
        </Stack>
      </Box>
      {!isMobile && (
        <Stack direction="row-reverse">
          <StyledBtnFilled variant="contained" onClick={() => handleAddToCart()}>Add to cart</StyledBtnFilled>
        </Stack>
      )}
    </StyledBox>
    {isAddToCart && (
            <Confetti
            width={width}
            height={height}
          />
      )}
    </>
  );
};

export default ProductDetailsCard;
