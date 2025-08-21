export interface ApiFilePrice {
  file_name?: any;
  title?: any;
  id_file?: number;
}

export interface ApiFilePriceRequest {
  file_name?: any;
  title?: any;
  id_file?: number;
}

export interface ApiFileInfo {
  file_name?: any;
  id_file?: number;
}

export interface ApiFileInfoRequest {
  file_name?: any;
  id_file?: number;
}

export interface ApiMainFile {
  id_guide_files?: number;
  id_vehicle?: number;
  vehicle_name?: string;
  id_guide?: number;
  file_name?: any;
  images?: any;
}

export interface ApiMainFileRequest {
  id_guide_files?: number;
  id_vehicle?: number;
  vehicle_name?: string;
  id_guide?: number;
  file_name?: any;
  images?: any;
}

export interface ApiFilePriceData extends Array<ApiFilePrice> {}
export interface ApiFileInfoData extends Array<ApiFileInfo> {}
export interface ApiMainFileData extends Array<ApiMainFile> {}
