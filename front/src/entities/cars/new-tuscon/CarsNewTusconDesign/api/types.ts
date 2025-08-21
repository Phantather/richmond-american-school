export interface ApiCarsNewTusconDesign {
  id_car_image: number;
  image_name: string;
}

export interface ICarsNewTusconDesignParams {
  id_vehicle: number;
  id_color: number;
  id_size: number;
}

export interface ApiCarsNewTusconDesignData {
  data?: ApiCarsNewTusconDesign[];
  error?: boolean;
}
