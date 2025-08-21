import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsPalisadeDesignData, ICarsPalisadeDesignParams } from './types';

export const getCarsPalisadeDesign = async (params: ICarsPalisadeDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsPalisadeDesignData>>(
      routes.getCarsPalisadeDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
