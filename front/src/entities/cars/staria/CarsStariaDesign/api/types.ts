export interface ApiCarsStariaDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsStariaDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsStariaDesignData {
  data?: ApiCarsStariaDesign[];
  error?: boolean;
}
