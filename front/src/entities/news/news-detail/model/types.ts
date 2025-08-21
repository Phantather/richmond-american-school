export interface INewsDetailImage {
  id: number;
  url: string;
}

export interface INewsDetailContentImage {
  id: number;
  name: string;
  url: string;
}

export interface INewsDetailContent {
  description: string;
  id: number;
  images: INewsDetailContentImage[];
}

export interface NewsDetailItem {
  id: number;
  id_type: number;
  type_name: string;
  title: string;
  content: INewsDetailContent[];
  date: string;
  updated_at: string;
  active: boolean;
  main_images: INewsDetailImage[];
  is_special_offer: boolean;
}

export interface NewsDetailList extends NewsDetailItem {}
