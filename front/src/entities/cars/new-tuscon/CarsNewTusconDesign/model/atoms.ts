import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { CarsNewTusconDesignList } from '~entities/cars/new-tuscon/CarsNewTusconDesign/model/types';
import {
  ICarsNewTusconDesignParams,
  getCarsNewTusconDesign,
} from '~entities/cars/new-tuscon/CarsNewTusconDesign/api';

export const carsNewTusconDesignAtom = atomWithDefault<CarsNewTusconDesignList | null>(
  (_get) => null
);

export const setCarsNewTusconDesignAtom = atom<
  CarsNewTusconDesignList | null,
  ICarsNewTusconDesignParams,
  Promise<void>
>(
  (get) => get(carsNewTusconDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsNewTusconDesign(params);

    if (response.data?.error) {
      set(carsNewTusconDesignAtom, null);
    } else if (response) {
      set(carsNewTusconDesignAtom, response);
    }
  }
);
