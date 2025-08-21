export interface ApiCarsSantaFeDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsSantaFeDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsSantaFeDesignData {
  data?: ApiCarsSantaFeDesign[];
  error?: boolean;
}
