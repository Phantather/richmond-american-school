export interface NewsDetailImage {
  id: number;
  url: string;
}

export interface NewsDetailContentImage {
  id: number;
  name: string;
  url: string;
}

export interface NewsDetailContent {
  description: string;
  id: number;
  images: NewsDetailContentImage[];
}

export interface ApiNewsDetail {
  id: number;
  id_type: number;
  type_name: string;
  title: string;
  content: NewsDetailContent[];
  date: string;
  updated_at: string;
  active: boolean;
  main_images: NewsDetailImage[];
  is_special_offer: boolean;
}

export interface INewsDetailParams {
  id: number | null;
}

export interface ApiNewsDetailData {
  data?: ApiNewsDetail;
  error?: boolean;
}
