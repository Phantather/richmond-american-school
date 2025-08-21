import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Form, Image, Modal, Upload, message } from 'antd';
import { UploadFile } from 'antd/es/upload/interface';

import { createBanner, updateBanner } from '~features/admin/AdminBanner/api/api';
import { Input, UploadIcon, useNotification } from '~shared/ui';
import { BannerItem } from '~entities/shared/banner';

export interface AdminBannerSaveProps {
  type: 'add' | 'edit';
  bannerItem?: BannerItem | null;
  reFetchBannerList?: any;
}

export const AdminBannerSave: FC<AdminBannerSaveProps> = ({
  type = 'add',
  bannerItem,
  reFetchBannerList,
}) => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === 'edit' && modal && bannerItem) {
      const parsedInitialValues = {
        banner_title: bannerItem.banner_title || '',
      };

      form.setFieldsValue(parsedInitialValues);
    }
  }, [type, modal, bannerItem, form]);

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
    setImageFile(null);
  }, []);

  const handleImageChange = ({ file }: { file: UploadFile }) => {
    const isImage = file.type?.startsWith('image/');

    if (!isImage) {
      message.error('Вы можете загружать только файлы изображений!');

      return;
    }

    setImageFile(file);
  };

  const beforeUploadImage = (file: UploadFile) => {
    const isLt100M = file.size !== undefined && file.size / 1024 / 1024 < 100;
    const isImage = file.type?.startsWith('image/');

    if (!isImage) {
      message.error('Вы можете загружать только файлы изображений!');
    }

    if (!isLt100M) {
      message.error('Выбранная картинка должна быть не более 100MB!');
    }

    return isImage && isLt100M;
  };

  const onFinish = async (values: any) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', values.banner_title);

      if (imageFile && imageFile.originFileObj) {
        formData.append('image', imageFile.originFileObj);
      }

      if (type === 'add') {
        await createBanner(formData);
      } else if (type === 'edit' && bannerItem) {
        await updateBanner(bannerItem.id_banner, formData);
      }

      notification.openNotification({
        type: 'success',
        message: `Баннер успешно ${type === 'add' ? 'сохранен' : 'обновлен'}`,
      });

      handleModal();
      form.resetFields();
      reFetchBannerList();
      setImageFile(null);
    } catch {
      notification.openNotification({
        type: 'error',
        message: `Ошибка при ${type === 'add' ? 'сохранении' : 'обновлении'} баннера`,
      });
    } finally {
      setIsLoading(false);
    }
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
          Добавить баннер
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
      <Modal open={modal} onCancel={handleModal} footer={false} width={1200}>
        <div className="p-[16px_12px] grid gap-[20px]">
          <Form form={form} layout="vertical" autoComplete="off" onFinish={onFinish}>
            <h2 className="text-primary text-[30px] mb-5">
              {type === 'add' ? 'Добавление баннера' : 'Изменение баннера'}
            </h2>
            <Form.Item
              label="Заголовок"
              name="banner_title"
              rules={[{ min: 3, message: 'Минимальная длина заголовка - 3 символов' }]}
            >
              <Input placeholder="Введите заголовок" size="large" />
            </Form.Item>
            <Form.Item
              label="Изображение"
              name="image"
              rules={[{ required: type === 'add', message: 'Пожалуйста, загрузите изображение' }]}
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

              {imageFile && (
                <div className="mt-[16px]">
                  <Image
                    width={100}
                    height={100}
                    src={
                      imageFile.url ||
                      (imageFile.originFileObj && URL.createObjectURL(imageFile.originFileObj))
                    }
                    alt={imageFile.name}
                  />
                  <Button onClick={() => setImageFile(null)} className="text-red border-red mt-2">
                    Удалить
                  </Button>
                </div>
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
