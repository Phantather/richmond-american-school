import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { CarsPalisadeDesignList } from '~entities/cars/palisade/CarsPalisadeDesign/model/types';
import {
  ICarsPalisadeDesignParams,
  getCarsPalisadeDesign,
} from '~entities/cars/palisade/CarsPalisadeDesign/api';

export const carsPalisadeDesignAtom = atomWithDefault<CarsPalisadeDesignList | null>(
  (_get) => null
);

export const setCarsPalisadeDesignAtom = atom<
  CarsPalisadeDesignList | null,
  ICarsPalisadeDesignParams,
  Promise<void>
>(
  (get) => get(carsPalisadeDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsPalisadeDesign(params);

    if (response.data?.error) {
      set(carsPalisadeDesignAtom, null);
    } else if (response) {
      set(carsPalisadeDesignAtom, response);
    }
  }
);
