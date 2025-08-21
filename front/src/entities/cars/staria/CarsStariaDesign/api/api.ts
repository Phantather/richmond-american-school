import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsStariaDesignData, ICarsStariaDesignParams } from './types';

export const getCarsStariaDesign = async (params: ICarsStariaDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsStariaDesignData>>(
      routes.getCarsStariaDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
