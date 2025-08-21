import React, { FC, useCallback, useState } from 'react';

import { Button, Modal } from 'antd';

import { useNotification } from '~shared/ui';
import { deleteFilePrice, deleteMainFile } from '~features/admin/AdminCarsFile';

interface AdminCarsMainFileDeleteProps {
  mainFileItem?: any;
  reFetchMainFile?: any;
}

export const AdminCarsMainFileDelete: FC<AdminCarsMainFileDeleteProps> = ({
  mainFileItem,
  reFetchMainFile,
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
      await deleteMainFile(mainFileItem?.id_guide_files);

      notification.openNotification({ type: 'success', message: 'Новость успешна удалена' });
      reFetchMainFile();
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
        key={mainFileItem?.id_guide_files}
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
