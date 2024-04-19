import React, { useEffect } from 'react'
import ProductDetailsHeader from '@/components/molecules/ProductDetailHeader'
import { IProduct } from '@/types/interfaces/Products'
import { IStockPrice } from '@/types/interfaces/StockPrice'
import { Box, styled } from '@mui/material';
import { useGlobalStore } from '@/store/global'
import ProductDetailsCard from '@/components/molecules/ProductDetailsCard'

const StyledImage = styled('img')(({ theme }) => ({
  height: '100%'
  }))
const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
})
const StyledImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    height: '150px',
    maxWidth: '60px',
    margin: '0 auto',
    marginBottom: '16px',
    [theme.breakpoints.up('sm')]: {
        height: '300px',
        maxWidth: '120px',
    },
}))
type Props = {
    product: IProduct
    stockPrice: IStockPrice[]
}

const ProductDetailsOrganism = ({
    product,
    stockPrice
}: Props) => {
  const { setSelectedProduct, setSelectedProductPriceStocks, setSelectedSku } = useGlobalStore()
  useEffect(() => {
    setSelectedProduct(product)
    setSelectedProductPriceStocks(stockPrice)
    setSelectedSku(stockPrice[0].sku)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, stockPrice])
    return (
    <StyledContainer>
      <ProductDetailsHeader />
        <StyledImageContainer>
        <StyledImage 
      src={`/assets/images${product.image}`} 
      alt={product.brand}/>
        </StyledImageContainer>
      <ProductDetailsCard />
    </StyledContainer>
  )
}

export default ProductDetailsOrganism