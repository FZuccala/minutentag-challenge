import type { NextApiRequest, NextApiResponse } from 'next'
import products from '@/utils/products';
import { IResponse } from './../../../types/interfaces/Response';
import { IProduct } from '@/types/interfaces/Products';
import stockPrice from '@/utils/stock-price';

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponse<IProduct>>) {
  const { id } = req.query;
const product = products?.find((product) => product.id === Number(id));
if(!product) {
    return res.status(404).json({
        status: 404,
        message: 'Product not found',
        data: null,
    });
}
  const skus = product.skus.map((sku) => {
    return {
      ...sku,
      price: stockPrice[Number(sku.code) as keyof typeof stockPrice].price,
      stock: stockPrice[Number(sku.code) as keyof typeof stockPrice].stock,
    }
  });
  const formattedProduct = {
    ...product,
    skus,
    price: Math.max(...skus.map((sku) => sku.price)),
  }
  res.status(200).json({
    status: 200,
    data: formattedProduct,
  })
}