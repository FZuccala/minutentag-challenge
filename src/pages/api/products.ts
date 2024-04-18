import type { NextApiRequest, NextApiResponse } from "next";
import products from './../../utils/products';
import { IResponse } from './../../types/interfaces/Response';
import { IProduct } from "@/types/interfaces/Products";
import stockPrice from "@/utils/stock-price";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse<IProduct[]>>,
) {
  const formattedProducts = products.map((product) => {
    const skus = product.skus.map((sku) => {
      return {
        ...sku,
        price: stockPrice[Number(sku.code) as keyof typeof stockPrice].price,
        stock: stockPrice[Number(sku.code) as keyof typeof stockPrice].stock,
      }
    })
    const prices = skus.map((sku) => sku.price);
    return {
      ...product,
      skus,
      price: Math.max(...prices),
    }
  });
  res.status(200).json({
    status: 200,
    data: formattedProducts,
  });
}
