import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsSonataDesignAtom,
  setCarsSonataDesignAtom,
} from '~entities/cars/sonata/CarsSonataDesign/model/atoms';

export const useCarsSonataDesign = () => {
  return useAtomValue(carsSonataDesignAtom);
};

export const useSetCarsSonataDesignr = () => {
  return useSetAtom(setCarsSonataDesignAtom);
};

export const useResetCarsSonataDesign = () => {
  return useResetAtom(carsSonataDesignAtom);
};
