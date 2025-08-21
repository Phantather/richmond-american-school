import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiVehicleData } from './types';

export const getVehicles = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiVehicleData>>(routes.getVehicles());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
