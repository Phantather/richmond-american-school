import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsPalisadeDesignAtom,
  setCarsPalisadeDesignAtom,
} from '~entities/cars/palisade/CarsPalisadeDesign/model/atoms';

export const useCarsPalisadeDesign = () => {
  return useAtomValue(carsPalisadeDesignAtom);
};

export const useSetCarsPalisadeDesignr = () => {
  return useSetAtom(setCarsPalisadeDesignAtom);
};

export const useResetCarsPalisadeDesign = () => {
  return useResetAtom(carsPalisadeDesignAtom);
};
