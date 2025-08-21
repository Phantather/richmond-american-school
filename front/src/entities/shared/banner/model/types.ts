export interface BannerItem {
  id_banner: number;
  banner_title: string;
  banner_url: string;
}

export interface BannerList extends Array<BannerItem> {}
