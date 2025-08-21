import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Form, Image, Input, List, Modal, Upload } from 'antd';

import {
  createFilePrice,
  updateFilePrice,
  updateFilePriceFile,
} from '~features/admin/AdminCarsFile/api/api';
import { UploadIcon, useNotification } from '~shared/ui';
import { VehiclesSelector } from '~entities/shared/vehicles';
import { useSetVehiclesList, useVehiclesList } from '~entities/shared/vehicles/model';
import { FilePriceItem } from '~entities/shared/file-price/model';

export interface AdminCarsFilePriceFileProps {
  filePriceItem?: any;
  reFetchFilePrice?: any;
  selectedVehicle: number;
}

export const AdminCarsFilePriceFile: FC<AdminCarsFilePriceFileProps> = ({
  filePriceItem,
  reFetchFilePrice,
  selectedVehicle,
}) => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();
  const [fileList, setFileList] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const vehiclesList = useVehiclesList();
  const setVehiclesList = useSetVehiclesList();

  useEffect(() => {
    if (!vehiclesList) {
      setVehiclesList();
    }
  }, []);

  const onFinish = async () => {
    setIsLoading(true);

    try {
      const updatedFileList = fileList.map((file: any) =>
        file.originFileObj ? file.originFileObj : file.url
      );

      const formData: any = {
        file_name: updatedFileList,
      };

      await updateFilePriceFile(formData, filePriceItem.id_file);

      notification.openNotification({
        type: 'success',
        message: 'Файл успешно обновлен',
      });

      handleModal();
      reFetchFilePrice({ id_vehicle: selectedVehicle });
    } catch {
      notification.openNotification({
        type: 'error',
        message: 'Ошибка при обновлении файла',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const beforeUpload = (file: File) => {
    const isPdf = file.type === 'application/pdf';

    if (!isPdf) {
      notification.openNotification({
        type: 'error',
        message: 'You can only upload PDF files!',
      });

      return Upload.LIST_IGNORE;
    }

    const isLt20M = file.size / 1024 / 1024 < 40;

    if (!isLt20M) {
      notification.openNotification({
        type: 'error',
        message: 'File must be smaller than 20MB!',
      });

      return Upload.LIST_IGNORE;
    }

    if (fileList.length >= 1) {
      notification.openNotification({
        type: 'error',
        message: 'You can only upload one file!',
      });

      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleChange = ({ fileList }: any) => {
    const updatedFileList = fileList.map((file: any) => {
      if (!file.thumbUrl && file.originFileObj) {
        file.thumbUrl = URL.createObjectURL(file.originFileObj);
      }

      return file;
    });

    setFileList(updatedFileList);
  };

  const removeFile = (file: any) => {
    setFileList((prev: any) => prev.filter((item: any) => item.uid !== file.uid));
  };

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
    setFileList([]);
  }, []);

  return (
    <>
      {notification.contextHolder}

      <Button
        onClick={handleModal}
        size="small"
        className="w-full border-none !p-5 flex justify-center items-center"
      >
        Изменить
      </Button>

      <Modal open={modal} onCancel={handleModal} footer={false} width={800}>
        <div className="p-[16px_12px] grid gap-[20px]">
          <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
            Изменение файла
            <Form.Item label="Файл" name="file_name">
              <Upload
                listType="picture"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onChange={handleChange}
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
                      <div className="flex gap-5 items-center">
                        <Image
                          width={50}
                          height={50}
                          src={file.thumbUrl || file.url}
                          alt={file.name}
                        />
                        {file.name}
                      </div>
                      <Button onClick={() => removeFile(file)} className="text-red border-red">
                        Удалить
                      </Button>
                    </List.Item>
                  )}
                />
              )}
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
