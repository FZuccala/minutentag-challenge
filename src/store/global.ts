import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StoreKeys } from './config';
import { EFilter } from '@/types/enums/filter';
import { IProduct } from '@/types/interfaces/Products';
import { IStockPrice } from '@/types/interfaces/StockPrice';
import { intlPrice } from '@/utils/conversion';

export interface IGlobal {
  filter: EFilter;
  search: string;
  selectedProduct: IProduct | null;
  selectedProductPriceStocks: IStockPrice[] | null;
  selectedSku: string;
  isAddToCart: boolean;
}

export interface IGlobalStore extends IGlobal {
  setFilter: (filter: EFilter) => void;
  setSearch: (search: string) => void;
  setSelectedProduct: (product: IProduct) => void;
  setSelectedProductPriceStocks: (stockPrice: IStockPrice[]) => void;
  getProductPrice: (productId: string) => string | number;
  getProductStock: (productId: string) => string | number;
  setSelectedSku: (sku: string) => void;
  setIsAddToCart: (isAddToCart: boolean) => void;
}

export const useGlobalStore = create(
  persist<IGlobalStore>(
    (set, get) => ({
      filter: EFilter.ALL,
      search: '',
      selectedProduct: null,
      selectedProductPriceStocks: null,
      selectedSku: '',
      isAddToCart: false,
      setIsAddToCart: (isAddToCart: boolean) => set({ isAddToCart }),
      setSelectedSku: (selectedSku: string) => set({ selectedSku }),
      setSearch: (search: string) => set({ search }),
      setFilter: (filter: EFilter) => set({ filter }),
      setSelectedProduct: (selectedProduct: IProduct) => set({ selectedProduct }),
      setSelectedProductPriceStocks: (selectedProductPriceStocks: IStockPrice[]) => set({ selectedProductPriceStocks }),
      getProductPrice: (productId: string) => {
        const productStockPrice = get().selectedProductPriceStocks;
        if (!productStockPrice) return 0;
        const stockPrice = productStockPrice.find((stockPrice) => stockPrice.sku === productId);
        return intlPrice(stockPrice?.price || 0);
      },
      getProductStock: (productId: string) => {
        const productStockPrice = get().selectedProductPriceStocks;
        if (!productStockPrice) return 0;
        const stockPrice = productStockPrice.find((stockPrice) => stockPrice.sku === productId);
        return stockPrice?.stock || 0;
      },
    }),
    {
      name: StoreKeys.GLOBAL,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
