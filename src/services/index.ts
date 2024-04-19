import axios from 'axios';
import { IProduct } from '@/types/interfaces/Products';
import { IStockPrice } from './../types/interfaces/StockPrice';

export const fetchProductsList: () => Promise<{ data: IProduct[] }> = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};
export const fetchProduct: (id: string) => Promise<{ data: IProduct }> = async (id) => {
  try {
    const response = await axios.get(`/api/product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product details');
  }
};

export const fetchStockPrice: (id: string) => Promise<{ data: IStockPrice[] }> = async (id) => {
  try {
    const response = await axios.get(`/api/stock-price/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stock price');
  }
};
