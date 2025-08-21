// export interface ApiNews {
//   id_type?: number;
//   title: string;
//   description: string;
//   images: any;
//   images_to_delete?: any;
//   date?: any;
// }
//
// export interface ApiNewsRequest {
//   id_type?: number;
//   title: string;
//   description: string;
//   images: any;
//   images_to_delete?: any;
//   date?: any;
// }

export interface ApiNewsContent {
  description: string;
  images: any[];
}

export interface ApiNews {
  id_type?: number;
  title: string;
  contents: ApiNewsContent[];
  main_images: any[];
  images_to_delete?: any;
  is_special_offer?: boolean;
  date?: any;
}

export interface ApiNewsRequest {
  id_type?: number;
  title: string;
  contents: ApiNewsContent[];
  main_images: any[];
  main_image_to_delete?: any; // Изменим тип на number[]
  contents_to_delete?: any; // Изменим тип на number[]
  contents_to_update?: any;
  images_to_delete?: any;
  new_contents?: any;
  is_special_offer?: boolean;
  date?: any;
}

export interface ApiNewsData extends Array<ApiNews> {}
