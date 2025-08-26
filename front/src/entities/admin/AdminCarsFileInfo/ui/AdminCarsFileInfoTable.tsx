import React, { FC } from 'react';

import { Dropdown, Image, Table, TableColumnsType } from 'antd';

import { FileIcon, MoreFileIcon } from '~shared/ui';
import { NewsItem } from '~entities/shared/news';
import { dayjs } from '~shared/lib/time/dayjs';
import { FileInfoItem } from '~entities/shared/file-info/model';

export interface AdminCarsFileInfoTableProps {
  list: FileInfoItem[];
  editSlot?: React.ReactNode;
  deleteSlot?: React.ReactNode;
  setFileInfoItem?: any;
}

export const AdminCarsFileInfoTable: FC<AdminCarsFileInfoTableProps> = ({
  list,
  editSlot,
  deleteSlot,
  setFileInfoItem,
}) => {
  const generateButtonsMenu = () => {
    return [
      {
        key: '1',
        label: <>{editSlot}</>,
      },
      {
        key: '2',
        label: <>{deleteSlot}</>,
      },
    ];
  };

  const columns: TableColumnsType<FileInfoItem> = [
    {
      title: '№',
      width: 50,
      render: (_row, value, idx) => <p>{idx + 1}</p>,
    },
    {
      title: 'Файл',
      width: 200,
      render: (_row, value) => (
        <>
          <a href={value?.file_name} target="_blank" rel="noreferrer">
            <FileIcon />
          </a>
        </>
      ),
    },
    {
      align: 'end',
      width: 100,
      render: (_row, value) => (
        <div onClick={() => setFileInfoItem(value)}>
          <Dropdown
            trigger={['click']}
            menu={{
              items: generateButtonsMenu(),
            }}
            placement="bottomRight"
            className="cursor-pointer ![&>ul>li]:p-0"
          >
            <div className="border-none !bg-none">
              <MoreFileIcon />
            </div>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <div className="col-span-12 max-w-[800px]">
      <Table columns={columns} dataSource={list} pagination={false} />
    </div>
  );
};
