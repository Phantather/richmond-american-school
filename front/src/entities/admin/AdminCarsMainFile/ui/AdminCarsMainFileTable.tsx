import React, { FC } from 'react';

import { Dropdown, Image, Table, TableColumnsType } from 'antd';

import { FileIcon, MoreFileIcon } from '~shared/ui';
import { NewsItem } from '~entities/shared/news';
import { dayjs } from '~shared/lib/time/dayjs';
import { MainFileItem } from '~entities/shared/main-file/model';

export interface AdminCarsMainFileTableProps {
  list: MainFileItem[];
  editTitleSlot?: React.ReactNode;
  editFileSlot?: React.ReactNode;
  editSlot?: React.ReactNode;
  deleteSlot?: React.ReactNode;
  setMainFileItem?: any;
}

export const AdminCarsMainFileTable: FC<AdminCarsMainFileTableProps> = ({
  list,
  editTitleSlot,
  editFileSlot,
  editSlot,
  deleteSlot,
  setMainFileItem,
}) => {
  const generateButtonsMenu = () => {
    return [
      {
        key: '1',
        label: <>{editSlot}</>,
      },
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

  const columns: TableColumnsType<MainFileItem> = [
    {
      title: '№',
      width: 50,
      render: (_row, value, idx) => <p>{idx + 1}</p>,
    },
    {
      title: 'Модель',
      width: 300,
      render: (_row, value) => (
        <p className="flex gap-2 items-center">
          {value?.vehicle_name}
          {/*<div onClick={() => setMainFileItem(value)}>*/}
          {/*  <Dropdown*/}
          {/*    trigger={['click']}*/}
          {/*    menu={{*/}
          {/*      items: generateButtonsTitleMenu(),*/}
          {/*    }}*/}
          {/*    placement="bottomRight"*/}
          {/*    className="cursor-pointer ![&>ul>li]:p-0"*/}
          {/*  >*/}
          {/*    <div className="border-none !bg-none">*/}
          {/*      <MoreFileIcon />*/}
          {/*    </div>*/}
          {/*  </Dropdown>*/}
          {/*</div>*/}
        </p>
      ),
    },
    {
      title: 'Файл',
      width: 200,
      render: (_row, value) => (
        <div className="flex gap-2 items-center">
          <a href={value?.file_name} target="_blank" className="flex items-center gap-2">
            <FileIcon />
            {value?.id_guide === 1 ? 'Руководство' : 'Брошюра'}
          </a>
          {/*<div onClick={() => setMainFileItem(value)}>*/}
          {/*  <Dropdown*/}
          {/*    trigger={['click']}*/}
          {/*    menu={{*/}
          {/*      items: generateButtonsFileMenu(),*/}
          {/*    }}*/}
          {/*    placement="bottomRight"*/}
          {/*    className="cursor-pointer ![&>ul>li]:p-0"*/}
          {/*  >*/}
          {/*    <div className="border-none !bg-none">*/}
          {/*      <MoreFileIcon />*/}
          {/*    </div>*/}
          {/*  </Dropdown>*/}
          {/*</div>*/}
        </div>
      ),
    },
    {
      title: 'Картинка',
      width: 200,
      render: (_row, value) => (
        <div className="flex gap-2 items-center">
          <Image width={50} src={value?.image?.image_name} alt={value?.file_name || 'file_image'} />
          {/*<div onClick={() => setMainFileItem(value)}>*/}
          {/*  <Dropdown*/}
          {/*    trigger={['click']}*/}
          {/*    menu={{*/}
          {/*      items: generateButtonsFileMenu(),*/}
          {/*    }}*/}
          {/*    placement="bottomRight"*/}
          {/*    className="cursor-pointer ![&>ul>li]:p-0"*/}
          {/*  >*/}
          {/*    <div className="border-none !bg-none">*/}
          {/*      <MoreFileIcon />*/}
          {/*    </div>*/}
          {/*  </Dropdown>*/}
          {/*</div>*/}
        </div>
      ),
    },
    {
      align: 'end',
      width: 100,
      render: (_row, value) => (
        <div onClick={() => setMainFileItem(value)}>
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
