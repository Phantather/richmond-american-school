import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsNewTusconDesignData, ICarsNewTusconDesignParams } from './types';

export const getCarsNewTusconDesign = async (params: ICarsNewTusconDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsNewTusconDesignData>>(
      routes.getCarsNewTusconDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
