import React, { FC } from 'react';

import { Dropdown, Image, Table, TableColumnsType } from 'antd';

import { FileIcon, MoreFileIcon } from '~shared/ui';
import { NewsItem } from '~entities/shared/news';
import { dayjs } from '~shared/lib/time/dayjs';
import { FilePrice, FilePriceItem } from '~entities/shared/file-price/model';

export interface AdminCarsFilePriceTableProps {
  list: FilePriceItem[];
  editTitleSlot?: React.ReactNode;
  editFileSlot?: React.ReactNode;
  deleteSlot?: React.ReactNode;
  setFilePriceItem?: any;
}

export const AdminCarsFilePriceTable: FC<AdminCarsFilePriceTableProps> = ({
  list,
  editTitleSlot,
  editFileSlot,
  deleteSlot,
  setFilePriceItem,
}) => {
  const generateButtonsMenu = () => {
    return [
      // {
      //   key: '1',
      //   label: <>{editSlot}</>,ы
      // },
      {
        key: '1',
        label: <>{deleteSlot}</>,
      },
    ];
  };

  const generateButtonsTitleMenu = () => {
    return [
      {
        key: '1',
        label: <>{editTitleSlot}</>,
      },
    ];
  };

  const generateButtonsFileMenu = () => {
    return [
      {
        key: '1',
        label: <>{editFileSlot}</>,
      },
    ];
  };

  const columns: TableColumnsType<FilePriceItem> = [
    {
      title: '№',
      width: 50,
      render: (_row, value, idx) => <p>{idx + 1}</p>,
    },
    {
      title: 'Название файла',
      width: 300,
      render: (_row, value) => (
        <p className="flex gap-2 items-center">
          {value?.title}
          <div onClick={() => setFilePriceItem(value)}>
            <Dropdown
              trigger={['click']}
              menu={{
                items: generateButtonsTitleMenu(),
              }}
              placement="bottomRight"
              className="cursor-pointer ![&>ul>li]:p-0"
            >
              <div className="border-none !bg-none">
                <MoreFileIcon />
              </div>
            </Dropdown>
          </div>
        </p>
      ),
    },
    {
      title: 'Файл',
      width: 200,
      render: (_row, value) => (
        <div className="flex gap-2 items-center">
          <a href={value?.file_name} target="_blank" rel="noreferrer">
            <FileIcon />
          </a>
          <div onClick={() => setFilePriceItem(value)}>
            <Dropdown
              trigger={['click']}
              menu={{
                items: generateButtonsFileMenu(),
              }}
              placement="bottomRight"
              className="cursor-pointer ![&>ul>li]:p-0"
            >
              <div className="border-none !bg-none">
                <MoreFileIcon />
              </div>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      align: 'end',
      width: 100,
      render: (_row, value) => (
        <div onClick={() => setFilePriceItem(value)}>
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
