import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { setVehiclesListAtom, vehiclesListAtom } from './atoms';

export const useVehiclesList = () => {
  return useAtomValue(vehiclesListAtom);
};

export const useSetVehiclesList = () => {
  return useSetAtom(setVehiclesListAtom);
};

export const useResetVehiclesList = () => {
  return useResetAtom(vehiclesListAtom);
};
