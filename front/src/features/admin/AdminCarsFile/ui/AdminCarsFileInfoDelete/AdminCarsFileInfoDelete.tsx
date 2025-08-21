import React, { FC, useCallback, useState } from 'react';

import { Button, Modal } from 'antd';

import { useNotification } from '~shared/ui';
import { deleteFileInfo } from '~features/admin/AdminCarsFile';

interface AdminCarsFileInfoDeleteProps {
  fileInfoItem?: any;
  reFetchFileInfo?: any;
  selectedVehicle: number;
}

export const AdminCarsFileInfoDelete: FC<AdminCarsFileInfoDeleteProps> = ({
  fileInfoItem,
  reFetchFileInfo,
  selectedVehicle,
}) => {
  const notification = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const handleDetele = async () => {
    setIsLoading(true);

    try {
      await deleteFileInfo(fileInfoItem?.id_file);

      notification.openNotification({ type: 'success', message: 'Новость успешна удалена' });
      reFetchFileInfo({ id_vehicle: selectedVehicle });
      setModalOpen(false);
    } catch (error) {
      notification.openNotification({ type: 'error', message: 'Не удалось удалить новость' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {notification.contextHolder}

      <Button
        onClick={handleModal}
        size="small"
        className="w-full border-none !p-5 flex justify-center items-center text-red !hover:text-red"
      >
        Удалить
      </Button>
      <Modal
        open={modalOpen}
        onCancel={handleModal}
        centered
        footer={false}
        width={470}
        key={fileInfoItem?.id_file}
      >
        <div>
          <h2 className="text-center text-[16px] font-medium mb-[40px]">
            Вы уверены, что хотите удалить новость?
          </h2>
          <div className="flex justify-center gap-[20px]">
            <Button
              className="!border !border-solid !border-primary !bg-transparent !text-primary"
              size="large"
              onClick={handleModal}
            >
              Отмена
            </Button>
            <Button
              loading={isLoading}
              className="!border !border-solid !border-red !bg-transparent !text-red"
              size="large"
              onClick={() => handleDetele()}
            >
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
