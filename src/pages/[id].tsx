import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct, fetchStockPrice } from '@/services'
import { useErrorNotification } from '@/hooks/useErrorNotification'
import ProductDetailsHeader from '@/components/molecules/ProductDetailHeader'
import DetailsPage from '@/components/pages/PageDetails'

type Props = {}

const ProductDetails = (props: Props) => {
    
    return (
      <DetailsPage />
  )
}

export default ProductDetails