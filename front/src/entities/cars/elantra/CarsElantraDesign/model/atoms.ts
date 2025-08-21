import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import {
  ICarsElantraDesignParams,
  getCarsElantraDesign,
} from '~entities/cars/elantra/CarsElantraDesign/api';
import { CarsElantraDesignList } from '~entities/cars/elantra/CarsElantraDesign/model/types';

export const carsElantraDesignAtom = atomWithDefault<CarsElantraDesignList | null>((_get) => null);

export const setCarsElantraDesignAtom = atom<
  CarsElantraDesignList | null,
  ICarsElantraDesignParams,
  Promise<void>
>(
  (get) => get(carsElantraDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsElantraDesign(params);

    if (response.data?.error) {
      set(carsElantraDesignAtom, null);
    } else if (response) {
      set(carsElantraDesignAtom, response);
    }
  }
);
