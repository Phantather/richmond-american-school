import { FC, useCallback, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

import axios from 'axios';

import { DatePicker, ReqIcon, useNotification } from '~shared/ui';
import { dayjs } from '~shared/lib/time/dayjs';

export interface CarsServiceSigningProps {}

export const CarsServiceSigning: FC<CarsServiceSigningProps> = () => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://asiamotors.bitrix24.kz/rest/25195/ogpkwplga05g8rf7/crm.lead.add.json',
        {
          FIELDS: {
            TITLE: 'Запись на сервис',
            NAME: data.name,
            PHONE: [
              {
                VALUE: data.phone,
                VALUE_TYPE: 'MOBILE',
              },
            ],
            UF_CRM_1738733284: data.vehicle,
            UF_CRM_1738733075: dayjs(data.year).format('DD-MM-YYYY'),
            UF_CRM_1738733145: data.mileage,
            UF_CRM_1738732781: data.message,
            UF_CRM_1738733274: data.master,
            ASSIGNED_BY_ID: 771,
          },
        }
      );

      console.log('Success:', response.data);

      notification.openNotification({
        type: 'success',
        message: `Заявка отправлена`,
        description: 'Ожидаем вас в ближайшее время',
      });

      setIsLoading(false);
      setModal(false);
      form.resetFields();
    } catch (error) {
      console.error('Error:', error);

      notification.openNotification({
        type: 'error',
        message: `Пожалуйста, попробуйте еще раз или свяжитесь с нами`,
        description: 'Пожалуйста, попробуйте еще раз или свяжитесь с нами',
      });
    }
  };

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
  }, []);

  const validateForm = {
    required: 'Это поле обязательна к заполнению',
  };

  return (
    <>
      {notification.contextHolder}
      <button
        onClick={handleModal}
        className="bg-primary border border-solid border-primary  text-white p-[15px_75px] cursor-pointer"
      >
        Запись на сервис
      </button>
      <Modal
        open={modal}
        onCancel={handleModal}
        footer={false}
        centered
        width={500}
        className="modal"
      >
        <div className="p-[20px_24px] grid gap-[20px] xs:p-0">
          <Form form={form} onFinish={onSubmit} validateMessages={validateForm} autoComplete="off">
            <h2 className="text-center text-[40px] mb-10">Оставить запрос</h2>
            <div className="grid gap-[24px]">
              <Form.Item name="name" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Ваше имя" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="phone" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Телефон" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="vehicle" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Авто" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="year" rules={[{ required: true }]} className="!mb-0">
                <DatePicker
                  placeholder="Год выпуска"
                  size="large"
                  className="w-full !rounded-none"
                />
              </Form.Item>
              <Form.Item name="mileage" className="!mb-0">
                <Input
                  placeholder="Пробег (необязательно)"
                  size="large"
                  className="!rounded-none"
                />
              </Form.Item>
              <Form.Item name="master" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Мастер" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="message" rules={[{ required: true }]} className="!mb-0">
                <Input.TextArea
                  placeholder="Cуть обращения"
                  size="large"
                  className="!h-[123px] !resize-none !rounded-none"
                />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                className="px-5 bg-primary text-white !rounded-none"
                htmlType="submit"
                loading={isLoading}
              >
                Отправить
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
