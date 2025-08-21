import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsNewTusconDesignAtom,
  setCarsNewTusconDesignAtom,
} from '~entities/cars/new-tuscon/CarsNewTusconDesign/model/atoms';

export const useCarsNewTusconDesign = () => {
  return useAtomValue(carsNewTusconDesignAtom);
};

export const useSetCarsNewTusconDesignr = () => {
  return useSetAtom(setCarsNewTusconDesignAtom);
};

export const useResetCarsNewTusconDesign = () => {
  return useResetAtom(carsNewTusconDesignAtom);
};
