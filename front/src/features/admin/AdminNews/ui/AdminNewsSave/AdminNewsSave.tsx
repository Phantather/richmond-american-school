import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Image, Input, List, Modal, Upload } from 'antd';
import ReactQuill from 'react-quill';

import { ApiNewsRequest, createNews, updateNews } from '~features/admin/AdminNews';
import { DatePicker, UploadIcon, useNotification } from '~shared/ui';
import { dayjs } from '~shared/lib/time/dayjs';
import 'react-quill/dist/quill.snow.css';
import { useNewsDetail, useSetNewsDetail } from '~entities/news';

const Quill = ReactQuill.Quill;
const FontAttributor = Quill.import('attributors/class/font');
const SizeAttributor = Quill.import('attributors/class/size');

FontAttributor.whitelist = [
  'inter',
  'arial',
  'times-new-roman',
  'courier-new',
  'georgia',
  'verdana',
  'sofia',
  'roboto',
];

Quill.register(FontAttributor, true);
SizeAttributor.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px'];
Quill.register(SizeAttributor, true);

interface Description {
  id: number;
  value: string;
  fileList: {
    uid: number;
    name: string;
    url: string;
    status: string;
  }[];
}

export interface AdminNewsSaveProps {
  type: 'add' | 'edit';
  reFetchNewsList?: any;
  newsItem?: any;
}

const modules = {
  toolbar: [
    [{ header: [false, 2, 3, 4, 5, 6] }],
    [{ font: FontAttributor.whitelist }],
    [{ size: SizeAttributor.whitelist }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'link',
];

export const AdminNewsSave: FC<AdminNewsSaveProps> = ({
  type = 'add',
  newsItem,
  reFetchNewsList,
}) => {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const notification = useNotification();
  const [fileList, setFileList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [descriptions, setDescriptions] = useState([{ id: 1, value: '', fileList: [] }]);
  const [contentsToDelete, setContentsToDelete] = useState<number[]>([]);
  const [mainImagesToDelete, setMainImagesToDelete] = useState<number[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<number[]>([]);

  const newDetail = useNewsDetail();
  const setNewsDetail = useSetNewsDetail();

  useEffect(() => {
    if (type === 'edit' && modal && newsItem) {
      setNewsDetail({ id: newsItem?.id });
    }
  }, [type, modal, newsItem, setNewsDetail]);

  useEffect(() => {
    if (newDetail && type === 'edit') {
      form.setFieldsValue({
        title: newDetail.title,
        date: dayjs(newDetail.date),
        is_special_offer: newDetail.is_special_offer,
      });

      const mainFileList = newDetail.main_images?.map((image) => ({
        uid: image.id,
        name: `main_${image.id}`,
        url: image.url,
        status: 'done',
      }));

      setFileList(mainFileList || []);

      if (newDetail.content?.length > 0) {
        const contentDescriptions = newDetail.content.map((content, index) => ({
          id: content.id || index + 1,
          value: content.description || '',
          fileList: content.images.map((img) => ({
            uid: img.id,
            name: img.name,
            url: img.url,
            status: 'done',
          })),
        }));

        setDescriptions(contentDescriptions as any);
      } else {
        setDescriptions([{ id: 1, value: '', fileList: [] }]);
      }
    } else if (type === 'add') {
      form.resetFields();
      setFileList([]);
      setDescriptions([{ id: 1, value: '', fileList: [] }]);
    }
  }, [newDetail, type, modal, form]);

  const onFinish = async (values: any) => {
    setIsLoading(true);

    try {
      const newMainFiles = fileList
        .filter((file: any) => file.originFileObj)
        .map((file: any) => file.originFileObj);

      const contents = descriptions.map((desc) => {
        const contentFiles = desc.fileList
          .filter((file: any) => file.originFileObj)
          .map((file: any) => file.originFileObj);

        return {
          id: desc.id,
          description: desc.value,
          images: contentFiles,
        };
      });

      const contentsToUpdate =
        type === 'edit'
          ? descriptions
              .filter((desc) => {
                const originalContent = newDetail?.content?.find((c) => c.id === desc.id);

                return (
                  desc.id && // Убедиться, что ID существует
                  originalContent && // Убедиться, что есть оригинальное описание
                  desc.value.trim() !== originalContent.description.trim() // Проверить, что описание изменилось
                );
              })
              .map((desc) => ({
                id_content: desc.id,
                description: desc.value,
              }))
          : [];

      const newContents =
        type === 'edit'
          ? descriptions
              .filter((desc) => !newDetail?.content?.some((c) => c.id === desc.id))
              .map((desc) => ({
                description: desc.value,
                images: desc.fileList
                  .filter((file: any) => file.originFileObj)
                  .map((file: any) => file.originFileObj),
              }))
          : [];

      const formData: ApiNewsRequest = {
        title: values.title,
        contents,
        main_images: newMainFiles,
        date: dayjs(values.date).format('YYYY-MM-DD'),
        id_type: 1,
        is_special_offer: values.is_special_offer || false,
      };

      if (type === 'edit') {
        formData.main_image_to_delete = mainImagesToDelete;
        formData.images_to_delete = imagesToDelete;
        formData.contents_to_delete = contentsToDelete;
        formData.contents_to_update = contentsToUpdate;
        formData.new_contents = newContents;
      }

      if (type === 'edit' && newsItem) {
        await updateNews(newsItem?.id, formData);
      } else {
        await createNews(formData);
      }

      notification.openNotification({
        type: 'success',
        message: 'Новость успешно сохранена',
      });

      handleModal();
      setContentsToDelete([]);
      setMainImagesToDelete([]);
      setImagesToDelete([]);
      reFetchNewsList({ page: 1, offset: 12 });
    } catch (error) {
      console.error('Error saving news:', error);

      notification.openNotification({
        type: 'error',
        message: 'Ошибка при сохранении',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      notification.openNotification({
        type: 'error',
        message: 'Можно загружать только JPG/PNG файлы!',
      });

      return false;
    }

    const isLt20M = file.size / 1024 / 1024 < 20;

    if (!isLt20M) {
      notification.openNotification({
        type: 'error',
        message: 'Размер изображения должен быть меньше 20MB!',
      });

      return false;
    }

    return true;
  };

  const handleChange = useCallback(({ fileList }: any) => {
    const updatedFileList = fileList.map((file: any) => {
      if (!file.thumbUrl && file.originFileObj) {
        file.thumbUrl = URL.createObjectURL(file.originFileObj);
      }

      return file;
    });

    setFileList(updatedFileList);
  }, []);

  const handleModal = useCallback(() => {
    setModal((prev) => !prev);
    form.resetFields();
    setFileList([]);
    setContentsToDelete([]);
    setMainImagesToDelete([]);
    setImagesToDelete([]);
  }, [form]);

  const handleRemoveMainImage = (uid: number) => {
    setMainImagesToDelete((prev: number[]) => [...prev, uid]);
    setFileList((prev: any[]) => prev.filter((file: any) => file.uid !== uid));
  };

  const handleQuillChange = useCallback((content: string, id: number) => {
    setDescriptions((prev) =>
      prev.map((desc) => (desc.id === id ? { ...desc, value: content } : desc))
    );
  }, []);

  const handleDescriptionFileChange = useCallback((fileList: any, id: number) => {
    setDescriptions((prev) => prev.map((desc) => (desc.id === id ? { ...desc, fileList } : desc)));
  }, []);

  const handleDescriptionFileRemove = (file: any, id: number) => {
    setImagesToDelete((prev) => [...prev, file.uid]); // Добавляем id удалённой картинки

    setDescriptions((prev) =>
      prev.map((desc) =>
        desc.id === id
          ? { ...desc, fileList: desc.fileList.filter((item: any) => item.uid !== file.uid) }
          : desc
      )
    );
  };

  const addDescription = useCallback(() => {
    setDescriptions((prev) => [...prev, { id: prev.length + 1, value: '', fileList: [] }]);
  }, []);

  const removeDescription = (id: number) => {
    setContentsToDelete((prev) => [...prev, id]);

    setDescriptions((prev) => prev.filter((desc) => desc.id !== id));
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
          Добавить новость
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
          <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
            <h2 className="text-primary text-[30px] mb-5">Добавление новости</h2>
            <Form.Item
              label="Заголовок"
              name="title"
              rules={[
                { required: true, message: 'Пожалуйста, введите заголовок' },
                { min: 7, message: 'Минимальная длина заголовка - 7 символов' },
              ]}
            >
              <Input placeholder="Введите заголовок" size="large" />
            </Form.Item>
            <Form.Item label="Изображения" name="main_images">
              <Upload
                listType="picture"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                multiple
                itemRender={() => <div></div>}
              >
                <Button className="p-5 flex items-center">
                  <UploadIcon />
                  Загрузить изображения
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
                      <Button
                        onClick={() => handleRemoveMainImage(file.uid)}
                        className="text-red border-red"
                      >
                        Удалить
                      </Button>
                    </List.Item>
                  )}
                />
              )}
            </Form.Item>
            {descriptions.map((desc) => (
              <div
                key={desc.id}
                className="border border-solid border-[#E5E5E5] rounded-[8px] p-5 relative"
              >
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeDescription(desc.id)}
                >
                  X
                </button>
                <div className="mb-4">
                  <label htmlFor={`description_${desc.id}`} className="block mb-2 font-bold">
                    Описание
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={desc.value}
                    onChange={(content) => handleQuillChange(content, desc.id)}
                    modules={modules}
                    formats={formats}
                    className="custom-quill"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold">Изображения</label>
                  <Upload
                    listType="picture"
                    fileList={desc.fileList}
                    beforeUpload={beforeUpload}
                    onChange={({ fileList }) => handleDescriptionFileChange(fileList, desc.id)}
                    multiple
                    itemRender={() => <div></div>}
                  >
                    <Button className="p-5 flex items-center">
                      <UploadIcon />
                      Загрузить изображения
                    </Button>
                  </Upload>
                  {desc.fileList?.length > 0 && (
                    <List
                      className="mt-[16px]"
                      size="small"
                      bordered
                      dataSource={desc.fileList}
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
                          <Button
                            onClick={() => handleDescriptionFileRemove(file, desc.id)}
                            className="text-red border-red"
                          >
                            Удалить
                          </Button>
                        </List.Item>
                      )}
                    />
                  )}
                </div>
              </div>
            ))}
            <Button type="dashed" onClick={addDescription} className="w-full mb-5">
              Добавить еще описание
            </Button>
            <Form.Item label="Дата" name="date" rules={[{ required: true }]}>
              <DatePicker placeholder="Укажите дату" size="large" className="w-full" />
            </Form.Item>
            <Form.Item name="is_special_offer" valuePropName="checked">
              <Checkbox>Дублировать на Спецпредложения</Checkbox>
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
