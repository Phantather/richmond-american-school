import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsElantraDesignData, ICarsElantraDesignParams } from './types';

export const getCarsElantraDesign = async (params: ICarsElantraDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsElantraDesignData>>(
      routes.getCarsElantraDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
