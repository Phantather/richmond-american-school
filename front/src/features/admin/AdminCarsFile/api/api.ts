import Cookies from 'js-cookie';

import { ApiResponseData, api } from '~shared/api';

import { ApiNewsData } from '~features/admin';

import { routes } from './routes';
import {
  ApiFileInfoData,
  ApiFileInfoRequest,
  ApiFilePriceData,
  ApiFilePriceRequest,
  ApiMainFileData,
  ApiMainFileRequest,
} from './types';

export const createFilePrice = async (
  data: ApiFilePriceRequest,
  id_vehicle: number,
  title: string
) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  try {
    return await api.post<unknown, ApiResponseData<ApiFilePriceData>>(
      routes.createFilePrice(id_vehicle, title),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const createFileInfo = async (data: ApiFileInfoRequest, id_vehicle: number) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  try {
    return await api.post<unknown, ApiResponseData<ApiFileInfoData>>(
      routes.createFileInfo(id_vehicle),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const createMainFile = async (data: ApiMainFileRequest) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();

  formData.append('id_vehicle', data.id_vehicle?.toString() || '');
  formData.append('id_guide', data.id_guide?.toString() || '');

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  for (const file of data.images) {
    formData.append('images', file);
  }

  try {
    return await api.post<unknown, ApiResponseData<ApiMainFileData>>(
      routes.createMainFile(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const updateFilePrice = async (data: ApiFilePriceRequest, id: number) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();
  formData.append('title', data?.title);

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  try {
    return await api.put<unknown, ApiResponseData<ApiFilePriceData>>(
      routes.updateFilePrice(id),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const updateMainFile = async (data: ApiMainFileRequest) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();
  formData.append('id_guide_files', data?.id_guide_files?.toString() || '');

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  for (const file of data.images) {
    formData.append('images', file);
  }

  try {
    return await api.put<unknown, ApiResponseData<ApiMainFileData>>(
      routes.updateMainFile(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const updateFilePriceTitle = async (data: ApiFilePriceRequest, id: number) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();
  formData.append('title', data?.title);

  try {
    return await api.put<unknown, ApiResponseData<ApiFilePriceData>>(
      routes.updateFilePriceTitle(id),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const updateFilePriceFile = async (data: ApiFilePriceRequest, id: number) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  try {
    return await api.put<unknown, ApiResponseData<ApiFilePriceData>>(
      routes.updateFilePriceFile(id),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const updateFileInfo = async (data: ApiFileInfoRequest, id: number) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const formData = new FormData();

  for (const file of data.file_name) {
    formData.append('file_name', file);
  }

  try {
    return await api.put<unknown, ApiResponseData<ApiFileInfoData>>(
      routes.updateFileInfo(id),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const deleteFilePrice = async (id: number) => {
  try {
    return await api.delete<unknown, ApiResponseData<ApiFilePriceData>>(routes.deleteFilePrice(id));
  } catch (error) {
    return error;
  }
};

export const deleteFileInfo = async (id: number) => {
  try {
    return await api.delete<unknown, ApiResponseData<ApiFileInfoData>>(routes.deleteFileInfo(id));
  } catch (error) {
    return error;
  }
};

export const deleteMainFile = async (id: number) => {
  try {
    return await api.delete<unknown, ApiResponseData<ApiMainFileData>>(routes.deleteMainFile(id));
  } catch (error) {
    return error;
  }
};
