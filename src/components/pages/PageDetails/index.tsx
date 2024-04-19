import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { EPageTitles } from '@/types/enums/pageTitles'
import ProductDetailsOrganism from '@/components/organisms/ProductDetails'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct, fetchStockPrice } from '@/services'
import { useErrorNotification } from '@/hooks/useErrorNotification'
import { Button, Stack, styled } from '@mui/material'
import IconBagActive from '@/components/atoms/icons/bagActive'
import { useGlobalStore } from '@/store/global'
import { toast } from 'sonner'

type Props = {}
const StyledBtnOutlined = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.colors.orange500}`,
  borderRadius: '8px',
  padding: '8px 0',
  width: '54px',
  height: '54px',
  ':hover': {
    border: `1px solid ${theme.palette.colors.orange500}`,
  },
}))
const StyledBtnFilled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.colors.orange500,
  color: theme.palette.colors.white,
  borderRadius: '8px',
  padding: '8px 0',
  width: '80%',
  height: '54px',
  ':hover': {
    backgroundColor: theme.palette.colors.orange600,
  },
}))
const DetailsPage = (props: Props) => {
    const router = useRouter()
    const { setIsAddToCart, getProductStock, selectedSku } = useGlobalStore()
    const { id } = router.query
    const uniqueId = (id as string)?.split('-')?.[0]
    const { data: product, isError } = useQuery({
        queryKey: ['product', uniqueId],
        queryFn: () => fetchProduct(uniqueId),
        retry: false,
    })
    const { data: stockPrice } = useQuery({
        queryKey: ['stockPrice', uniqueId],
        queryFn: () => fetchStockPrice(uniqueId),
        staleTime: 5000, // 5 seconds
        refetchInterval: 5000, // 5 seconds
    })
    useErrorNotification({ isError, message: 'Error fetching product details' })
    
    const handleAddToCart = () => {
      const stock = getProductStock(selectedSku);
      if (stock === 0) {
        toast.error('Out of stock');
        return;
      }
        setIsAddToCart(true)
        toast.success('Product added to cart');
        setTimeout(() => {
            setIsAddToCart(false)
        }, 5000)
    }
    if(!product || !stockPrice) return null
  return (
    <DefaultLayout
    hideTopBar
    title={EPageTitles.PRODUCT_DETAILS}
    bottomBarSlot={ <Stack direction="row" spacing="12px" padding="12px" width="100%">
      <StyledBtnOutlined variant="outlined"><IconBagActive /></StyledBtnOutlined>
      <StyledBtnFilled variant="outlined" onClick={() => handleAddToCart()}>Add to cart</StyledBtnFilled>
    </Stack>}
    >
        <ProductDetailsOrganism product={product.data} stockPrice={stockPrice.data}/>
    </DefaultLayout>
  )
}

export default DetailsPage