export interface NewsImage {
  id: number;
  image_name: string;
}

export interface ApiNews {
  active: boolean;
  date: string;
  description: string | null;
  id: number;
  id_type: number;
  image_name: string;
  title: string;
  type_name: string;
  updated_at: string;
  is_special_offer?: boolean;
}
export interface ApiNewsData {
  currentPage: number;
  data: ApiNews[];
  total: number;
  totalPages: number;
}
