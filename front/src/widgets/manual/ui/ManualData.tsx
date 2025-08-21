import { useLayoutEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Breadcrumb, Empty, Spin } from 'antd';

import { useMainFile, useSetMainFile } from '~entities/shared/main-file/model';
import { RoutesUrls } from '~shared/lib/router';

export const ManualData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const mainFileList = useMainFile();
  const setMainFileList = useSetMainFile();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!mainFileList?.result) {
          await setMainFileList();
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const breadcrumbItems = [
    {
      title: (
        <NavLink to={RoutesUrls.root} className="text-black cursor-pointer text-[14px]">
          Главная
        </NavLink>
      ),
    },
    {
      title: <div className="text-black text-[14px]">Руководства и каталоги</div>,
    },
  ];

  const mainFileListViewView = () => {
    if (mainFileList?.result?.length) {
      return (
        <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[46px]">
          {mainFileList?.result?.map((item, idx) => (
            <div
              key={`${item?.id_guide_files}_${idx}`}
              className="col-span-4 sm:col-span-4 text-center"
            >
              <div className="w-full flex flex flex-col gap-[10px]">
                <img
                  src={item?.image?.image_name}
                  alt="car"
                  className="!w-[100%] h-[205px] sm:h-[230px] xs:h-[300px] object-cover"
                />
                <p>{item?.vehicle_name}</p>
                <a
                  href={item?.file_name}
                  target="_blank"
                  className="border border-solid border-primary py-2 text-primary"
                >
                  {item?.id_guide === 1 ? 'Скачать руководство' : 'Скачать брошюру'}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <>
        <Empty className="col-span-12 sm:col-span-8 xs:col-span-4" />
      </>
    );
  };

  return (
    <div className="pb-[100px]">
      {/*<div className="bg-[url('~shared/assets/manual/banner.jpg')] bg-no-repeat bg-cover bg-center p-[400px_0_300px] sm:p-[200px_0_60px] xs:p-[100px_0_60px]"></div>*/}
      <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[60px] p-[60px_20px_100px] max-w-[1024px] mx-auto w-full">
        <Breadcrumb
          separator="/"
          items={breadcrumbItems}
          className="col-span-12 sm:col-span-8 xs:col-span-4  [&>ol]:flex [&>ol]:items-center"
        />
        <h1 className="col-span-12 sm:col-span-8 xs:col-span-4 text-center text-[58px] font-semibold">
          Руководства и каталоги
        </h1>
        {isLoading ? (
          <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex justify-center items-center">
            <Spin size="large"></Spin>
          </div>
        ) : (
          <>{mainFileListViewView()}</>
        )}
      </div>
    </div>
  );
};
