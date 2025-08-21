import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { CarsSantaFeDesignList } from '~entities/cars/santa-fe/CarsSantaFeDesign/model/types';
import {
  ICarsSantaFeDesignParams,
  getCarsSantaFeDesign,
} from '~entities/cars/santa-fe/CarsSantaFeDesign/api';

export const carsSantaFeDesignAtom = atomWithDefault<CarsSantaFeDesignList | null>((_get) => null);

export const setCarsSantaFeDesignAtom = atom<
  CarsSantaFeDesignList | null,
  ICarsSantaFeDesignParams,
  Promise<void>
>(
  (get) => get(carsSantaFeDesignAtom),
  async (_get, set, params) => {
    const response = await getCarsSantaFeDesign(params);

    if (response.data?.error) {
      set(carsSantaFeDesignAtom, null);
    } else if (response) {
      set(carsSantaFeDesignAtom, response);
    }
  }
);
