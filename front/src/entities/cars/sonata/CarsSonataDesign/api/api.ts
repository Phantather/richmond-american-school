import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsSonataDesignData, ICarsSonataDesignParams } from './types';

export const getCarsSonataDesign = async (params: ICarsSonataDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsSonataDesignData>>(
      routes.getCarsSonataDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
