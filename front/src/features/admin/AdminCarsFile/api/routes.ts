export const routes = {
  createFilePrice: (id_vehicle: number, title: string) =>
    `/storage/save?id_vehicle=${id_vehicle}&title=${title}`,
  updateFilePrice: (id: number) => `/storage/update/${id}`,
  updateFilePriceTitle: (id: number) => `/storage/update/title/${id}`,
  updateFilePriceFile: (id: number) => `/storage/update/${id}`,
  deleteFilePrice: (id: number) => `/storage/delete/${id}`,
  createFileInfo: (id_vehicle: number) => `/storage/save/info?id_vehicle=${id_vehicle}`,
  updateFileInfo: (id: number) => `/storage/update/${id}`,
  deleteFileInfo: (id: number) => `/storage/delete/${id}`,

  createMainFile: () => `/vehicle/save`,
  updateMainFile: () => `/vehicle/update-files`,
  deleteMainFile: (id: number) => `/vehicle/delete/${id}`,
};
