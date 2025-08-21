export interface ApiCarsPalisadeDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsPalisadeDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsPalisadeDesignData {
  data?: ApiCarsPalisadeDesign[];
  error?: boolean;
}
