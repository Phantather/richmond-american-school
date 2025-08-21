import { FC, useCallback, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

import axios from 'axios';

import { ReqIcon, useNotification } from '~shared/ui';
import { dayjs } from '~shared/lib/time/dayjs';

export interface CarsRequestProps {}

export const CarsRequest: FC<CarsRequestProps> = () => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://asiamotors.bitrix24.kz/rest/25195/uw2glcw980mcm9zy/crm.lead.add.json',
        {
          FIELDS: {
            TITLE: 'ОСТАВИТЬ ЗАПРОС',
            NAME: data.name,
            PHONE: [
              {
                VALUE: data.phone,
                VALUE_TYPE: 'MOBILE',
              },
            ],
            UF_CRM_1738732781: data.message,
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
        className="flex items-center gap-[8px] text-white bg-transparent border-none cursor-pointer"
      >
        <ReqIcon />
        Оставить запрос
      </button>
      <Modal
        open={modal}
        onCancel={handleModal}
        centered
        footer={false}
        width={500}
        className="modal"
      >
        <div className="p-[20px_24px] grid gap-[20px] xs:p-0">
          <Form form={form} onFinish={onSubmit} validateMessages={validateForm} autoComplete="off">
            <h2 className="text-center text-[40px] mb-10">Оставить запрос</h2>
            <div className="grid gap-[24px]">
              <Form.Item name="name" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Имя" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="phone" rules={[{ required: true }]} className="!mb-0">
                <Input placeholder="Телефон" size="large" className="!rounded-none" />
              </Form.Item>
              <Form.Item name="message" rules={[{ required: true }]} className="!mb-0">
                <Input.TextArea
                  placeholder="Ваш запрос"
                  size="large"
                  className="!h-[123px] !resize-none !rounded-none"
                />
              </Form.Item>
              <p className="text-[12px] text-[#808080] leading-[16px]">
                Ваша конфиденциальность важна для Hyundai Кыргызстан. Мы стремимся защитить вашу
                конфиденциальность, обеспечивая при этом приятную работу с сайтом, которая
                предоставляет актуальные и полезные для вас информацию, продукты и услуги. Целью
                настоящей Политики конфиденциальности Hyundai Motor ("Политика конфиденциальности")
                является уведомление и информирование вас о том, как мы собираем, используем и
                передаем информацию через наш веб-сайт.
              </p>
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
