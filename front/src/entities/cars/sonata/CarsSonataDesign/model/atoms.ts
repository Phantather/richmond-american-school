import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { CarsSonataDesignList } from '~entities/cars/sonata/CarsSonataDesign/model/types';
import {
  ICarsSonataDesignParams,
  getCarsSonataDesign,
} from '~entities/cars/sonata/CarsSonataDesign/api';

export const carsSonataDesignAtom = atomWithDefault<CarsSonataDesignList | null>((_get) => null);

export const setCarsSonataDesignAtom = atom<
  CarsSonataDesignList | null,
  ICarsSonataDesignParams,
  Promise<void>
>(
  (get) => get(carsSonataDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsSonataDesign(params);

    if (response.data?.error) {
      set(carsSonataDesignAtom, null);
    } else if (response) {
      set(carsSonataDesignAtom, response);
    }
  }
);
