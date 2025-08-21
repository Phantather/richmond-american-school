import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Form, List, Modal, Upload, message } from 'antd';
import { UploadFile } from 'antd/es/upload/interface';

import { createMainFile, updateMainFile } from '~features/admin/AdminCarsFile/api/api';
import { UploadIcon, useNotification } from '~shared/ui';
import { VehiclesSelector } from '~entities/shared/vehicles';
import { useSetVehiclesList, useVehiclesList } from '~entities/shared/vehicles/model';
import { MainFileItem } from '~entities/shared/main-file/model';
import { useGuideList, useSetGuidesList } from '~entities/shared/guide/model';
import { GuideSelector } from '~entities/shared/guide';

export interface AdminCarsMainFileSaveProps {
  type: 'add' | 'edit';
  mainFileItem?: MainFileItem | null;
  reFetchMainFile?: any;
}

export const AdminCarsMainFileSave: FC<AdminCarsMainFileSaveProps> = ({
  type = 'add',
  mainFileItem,
  reFetchMainFile,
}) => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const vehiclesList = useVehiclesList();
  const setVehiclesList = useSetVehiclesList();

  const guideList = useGuideList();
  const setGuideList = useSetGuidesList();

  useEffect(() => {
    if (!vehiclesList) {
      setVehiclesList();
    }
  }, []);

  useEffect(() => {
    if (!guideList) {
      setGuideList();
    }
  }, []);

  useEffect(() => {
    if (type === 'edit' && modal && mainFileItem) {
      const parsedInitialValues = {
        id_vehicle: mainFileItem.id_vehicle || '',
        id_guide: mainFileItem.id_guide || '',
      };

      form.setFieldsValue(parsedInitialValues);
    }
  }, [type, modal, mainFileItem, form]);

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
    setFileList([]);
    setImageFile(null);
  }, []);

  const handleImageChange = ({ file }: { file: UploadFile }) => {
    const isImage = file.type?.startsWith('image/'); // Проверяем, является ли файл изображением

    if (!isImage) {
      message.error('Вы можете загружать только файлы изображений!');

      return;
    }

    setImageFile(file);
  };

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values: any) => {
    setIsLoading(true);

    try {
      const updatedFileList = fileList.map((file: any) =>
        file.originFileObj ? file.originFileObj : file.url
      );

      const formData: any = {
        id_vehicle: values.id_vehicle,
        id_guide: values.id_guide,
        file_name: updatedFileList,
        images: imageFile ? [imageFile.originFileObj] : [],
      };

      // Validate file and image requirements
      const isFileValid = fileList.every((file) => beforeUploadFile(file));
      const isImageValid = imageFile ? beforeUploadImage(imageFile) : true;

      if (!isFileValid || !isImageValid) {
        setIsLoading(false);

        return;
      }

      if (type === 'add') {
        await createMainFile(formData);
      } else if (type === 'edit' && mainFileItem) {
        await updateMainFile({
          id_guide_files: mainFileItem.id_guide_files,
          file_name: updatedFileList,
          images: imageFile ? [imageFile.originFileObj] : [],
        });
      }

      notification.openNotification({
        type: 'success',
        message: `Файл успешно ${type === 'add' ? 'сохранен' : 'обновлен'}`,
      });

      handleModal();
      form.resetFields();
      reFetchMainFile();
      setFileList([]);
    } catch {
      notification.openNotification({
        type: 'error',
        message: `Ошибка при ${type === 'add' ? 'сохранении' : 'обновлении'} файла`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const beforeUploadFile = (file: UploadFile) => {
    const isPDF = file.type === 'application/pdf';
    const isLt100M = file.size !== undefined && file.size / 1024 / 1024 < 100;

    if (!isPDF) {
      message.error('Формат выбранного файла должен быть PDF!');
    }

    if (!isLt100M) {
      message.error('Выбранный файл должен быть не более 100MB!');
    }

    return isPDF && isLt100M;
  };

  const beforeUploadImage = (file: UploadFile) => {
    const isLt100M = file.size !== undefined && file.size / 1024 / 1024 < 100;
    const isImage = file.type?.startsWith('image/'); // Проверяем, является ли файл изображением

    if (!isImage) {
      message.error('Вы можете загружать только файлы изображений!');
    }

    if (!isLt100M) {
      message.error('Выбранная картинка должна быть не более 100MB!');
    }

    return isImage && isLt100M;
  };

  return (
    <>
      {notification.contextHolder}
      {type === 'add' ? (
        <Button
          className="!border !border-solid !border-primary mb-[32px]"
          type="primary"
          size="large"
          onClick={handleModal}
        >
          Добавить файл
        </Button>
      ) : (
        <Button
          onClick={handleModal}
          size="small"
          className="w-full border-none !p-5 flex justify-center items-center"
        >
          Изменить
        </Button>
      )}
      <Modal open={modal} onCancel={handleModal} footer={false} width={800}>
        <div className="p-[16px_12px] grid gap-[20px]">
          <Form form={form} layout="vertical" autoComplete="off" onFinish={handleSubmit}>
            <h2 className="text-primary text-[30px] mb-5">
              {type === 'add' ? 'Добавление файла' : 'Изменение файла'}
            </h2>
            {type === 'add' && (
              <>
                <Form.Item
                  label="Название автомобиля"
                  name="id_vehicle"
                  rules={[{ required: true }]}
                >
                  <VehiclesSelector vehiclesList={vehiclesList} />
                </Form.Item>

                <Form.Item label="Тип" name="id_guide" rules={[{ required: true }]}>
                  <GuideSelector guideList={guideList} />
                </Form.Item>
              </>
            )}

            <Form.Item
              label="Файл"
              name="file_name"
              rules={[{ required: type === 'edit', message: 'Пожалуйста, загрузите файл' }]}
            >
              <Upload
                listType="picture"
                fileList={fileList}
                beforeUpload={beforeUploadFile}
                onChange={handleFileChange}
                maxCount={1}
                itemRender={() => <div></div>}
              >
                <Button className="p-5 flex items-center">
                  <UploadIcon />
                  Загрузить файл
                </Button>
              </Upload>
              {fileList?.length > 0 && (
                <List
                  className="mt-[16px]"
                  size="small"
                  bordered
                  dataSource={fileList}
                  renderItem={(file: any) => (
                    <List.Item key={file.uid || file.name} className="!flex !justify-between">
                      <div>{file.name}</div>
                    </List.Item>
                  )}
                />
              )}
            </Form.Item>

            <Form.Item
              label="Изображение"
              name="image"
              rules={[{ required: type === 'edit', message: 'Пожалуйста, загрузите изображение' }]}
            >
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={beforeUploadImage}
                onChange={handleImageChange}
              >
                <Button className="p-5 flex items-center">
                  <UploadIcon />
                  Загрузить изображение
                </Button>
              </Upload>
              {imageFile && <div className="mt-[16px]">{imageFile.name}</div>}
            </Form.Item>

            <Button
              type="primary"
              size="large"
              className="px-5"
              htmlType="submit"
              loading={isLoading}
            >
              Сохранить
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};
