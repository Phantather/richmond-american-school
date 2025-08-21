import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsElantraDesignAtom,
  setCarsElantraDesignAtom,
} from '~entities/cars/elantra/CarsElantraDesign/model/atoms';

export const useCarsElantraDesign = () => {
  return useAtomValue(carsElantraDesignAtom);
};

export const useSetCarsElantraDesignr = () => {
  return useSetAtom(setCarsElantraDesignAtom);
};

export const useResetCarsElantraDesign = () => {
  return useResetAtom(carsElantraDesignAtom);
};
