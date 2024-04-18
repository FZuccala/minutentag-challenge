import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StoreKeys } from './config';
import { EFilter } from '@/types/enums/filter';


export interface IGlobal {
    filter: EFilter;
    search: string;
}

export interface IGlobalStore extends IGlobal {
    setFilter: (filter: EFilter) => void;
    setSearch: (search: string) => void;
}

export const useGlobalStore = create(
    persist<IGlobalStore>((set, get) => ({
        filter: EFilter.ALL,
        search: '',
        setSearch: (search: string) => set({ search }),
        setFilter: (filter: EFilter) => set({ filter }),
    }), {
        name: StoreKeys.GLOBAL,
        storage: createJSONStorage(() => localStorage)
    })
);
