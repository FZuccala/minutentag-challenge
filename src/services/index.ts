import axios from 'axios';
import { IProduct } from '@/types/interfaces/Products';

export const fetchProductsList: () => Promise<{data: IProduct[]}> = async () => {
    try {
        const response = await axios.get('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products list: ', error);
    }
}