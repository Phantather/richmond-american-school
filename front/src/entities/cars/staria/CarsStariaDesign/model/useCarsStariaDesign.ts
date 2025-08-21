import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsStariaDesignAtom,
  setCarsStariaDesignAtom,
} from '~entities/cars/staria/CarsStariaDesign/model/atoms';

export const useCarsStariaDesign = () => {
  return useAtomValue(carsStariaDesignAtom);
};

export const useSetCarsStariaDesignr = () => {
  return useSetAtom(setCarsStariaDesignAtom);
};

export const useResetCarsStariaDesign = () => {
  return useResetAtom(carsStariaDesignAtom);
};
