import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiCarsSantaFeDesignData, ICarsSantaFeDesignParams } from './types';

export const getCarsSantaFeDesign = async (params: ICarsSantaFeDesignParams) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<ApiCarsSantaFeDesignData>>(
      routes.getCarsSantaFeDesign(params.id_vehicle, params.id_color, params.id_size)
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
