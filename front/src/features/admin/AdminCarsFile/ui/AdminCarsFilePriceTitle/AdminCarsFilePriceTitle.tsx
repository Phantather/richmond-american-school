import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

import { updateFilePriceTitle } from '~features/admin/AdminCarsFile/api/api';
import { useNotification } from '~shared/ui';

import { useSetVehiclesList, useVehiclesList } from '~entities/shared/vehicles/model';
import { FilePriceItem } from '~entities/shared/file-price/model';

export interface AdminCarsFilePriceTitleProps {
  filePriceItem?: any;
  reFetchFilePrice?: any;
  selectedVehicle: number;
}

export const AdminCarsFilePriceTitle: FC<AdminCarsFilePriceTitleProps> = ({
  filePriceItem,
  reFetchFilePrice,
  selectedVehicle,
}) => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const vehiclesList = useVehiclesList();
  const setVehiclesList = useSetVehiclesList();

  useEffect(() => {
    if (!vehiclesList) {
      setVehiclesList();
    }
  }, []);

  useEffect(() => {
    if (modal && filePriceItem) {
      const parsedInitialValues = {
        title: filePriceItem.title || '',
      };

      form.setFieldsValue(parsedInitialValues);
    }
  }, [modal, filePriceItem, form]);

  const onFinish = async (values: any) => {
    setIsLoading(true);

    try {
      await updateFilePriceTitle({ title: values.title }, filePriceItem?.id_file);

      notification.openNotification({
        type: 'success',
        message: 'Название успешно обновлено',
      });

      handleModal();
      reFetchFilePrice({ id_vehicle: selectedVehicle });
    } catch {
      notification.openNotification({
        type: 'error',
        message: 'Ошибка при обновлении названия',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
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
            <h2 className="text-primary text-[30px] mb-5">Изменение заголовка</h2>
            <Form.Item label="Заголовок" name="title" rules={[{ required: true }]}>
              <Input placeholder="Введите заголовок" size="large" />
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
