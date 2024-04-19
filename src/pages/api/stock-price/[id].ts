import { IStockPrice } from './../../../types/interfaces/StockPrice';
import type { NextApiRequest, NextApiResponse } from 'next';
import products from '@/utils/products';
import { IResponse } from './../../../types/interfaces/Response';
import stockPrice from '@/utils/stock-price';

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponse<IStockPrice[]>>) {
  const { id } = req.query;
  const product = products?.find((product) => product.id === Number(id));
  if (!product) {
    return res.status(404).json({
      status: 404,
      message: 'Product not found',
      data: null,
    });
  }
  const skus: IStockPrice[] = product.skus.map((sku) => {
    return {
      price: stockPrice[Number(sku.code) as keyof typeof stockPrice].price,
      stock: stockPrice[Number(sku.code) as keyof typeof stockPrice].stock,
      sku: sku.code,
    };
  });
  res.status(200).json({
    status: 200,
    data: skus,
  });
}
