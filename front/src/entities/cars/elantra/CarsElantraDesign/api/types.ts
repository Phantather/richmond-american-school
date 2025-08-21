export interface ApiCarsElantraDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsElantraDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsElantraDesignData {
  data?: ApiCarsElantraDesign[];
  error?: boolean;
}
