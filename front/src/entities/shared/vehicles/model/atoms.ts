import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { getVehicles } from '~entities/shared/vehicles';
import { VehiclesList } from '~entities/shared/vehicles/model/types';

export const vehiclesListAtom = atomWithDefault<VehiclesList | null>((_get) => null);

export const setVehiclesListAtom = atom<VehiclesList | null, undefined, Promise<void>>(
  (get) => get(vehiclesListAtom),
  async (_get, set) => {
    const response = await getVehicles();

    if (response.data?.error) {
      set(vehiclesListAtom, null);
    } else if (response.data) {
      set(vehiclesListAtom, response.data);
    }
  }
);
