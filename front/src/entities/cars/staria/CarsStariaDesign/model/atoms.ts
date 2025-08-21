import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { CarsStariaDesignList } from '~entities/cars/staria/CarsStariaDesign/model/types';
import {
  ICarsStariaDesignParams,
  getCarsStariaDesign,
} from '~entities/cars/staria/CarsStariaDesign/api';

export const carsStariaDesignAtom = atomWithDefault<CarsStariaDesignList | null>((_get) => null);

export const setCarsStariaDesignAtom = atom<
  CarsStariaDesignList | null,
  ICarsStariaDesignParams,
  Promise<void>
>(
  (get) => get(carsStariaDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsStariaDesign(params);

    if (response.data?.error) {
      set(carsStariaDesignAtom, null);
    } else if (response) {
      set(carsStariaDesignAtom, response);
    }
  }
);
