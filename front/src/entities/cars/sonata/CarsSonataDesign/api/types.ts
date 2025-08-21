export interface ApiCarsSonataDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsSonataDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsSonataDesignData {
  data?: ApiCarsSonataDesign[];
  error?: boolean;
}
