import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  carsSantaFeDesignAtom,
  setCarsSantaFeDesignAtom,
} from '~entities/cars/santa-fe/CarsSantaFeDesign/model/atoms';

export const useCarsSantaFeDesign = () => {
  return useAtomValue(carsSantaFeDesignAtom);
};

export const useSetCarsSantaFeDesignr = () => {
  return useSetAtom(setCarsSantaFeDesignAtom);
};

export const useResetCarsSantaFeDesign = () => {
  return useResetAtom(carsSantaFeDesignAtom);
};
