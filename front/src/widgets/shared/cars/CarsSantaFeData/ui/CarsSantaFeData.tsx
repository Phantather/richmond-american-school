import { Empty, Select, Tabs } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import {
  CarsSantaFeComfort,
  CarsSantaFeDesign,
  CarsSantaFeEfficiency,
  CarsSantaFeFeatures,
  CarsSantaFePrice,
  CarsSantaFeSafety,
  CarsSantaFeSpecifications,
} from '~entities/cars';
import { useSantaFeFileInfo, useSetSantaFeFileInfo } from '~entities/shared/file-info/model';
import { useSantaFeFilePrice, useSetSantaFeFilePrice } from '~entities/shared/file-price/model';
import { CarsReq, DownLoadIcon, useWindowInnerWidth } from '~shared/ui';

import bg from '~shared/assets/santa-fe/banner.png';

export const CarsSantaFeData: FC = () => {
  const windowWidth = useWindowInnerWidth();

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('1');
  const [isLoading, setIsLoading] = useState(false);

  const fileInfo = useSantaFeFileInfo();
  const setFileInfo = useSetSantaFeFileInfo();

  const filePrice = useSantaFeFilePrice();
  const setFilePrice = useSetSantaFeFilePrice();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!fileInfo) {
          await setFileInfo({ id_vehicle: 4 });
        }

        if (!filePrice) {
          await setFilePrice({ id_vehicle: 4 });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onChange = (key: string) => {
    setActiveTab(key);
    // Обновляем query параметр при изменении вкладки
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('part', key);
    setSearchParams(newSearchParams);
  };

  // Восстанавливаем вкладку из URL при монтировании
  useEffect(() => {
    const tabFromUrl = searchParams.get('part');

    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);

  const items: any = [
    {
      key: 'features',
      label: 'Особенности',
    },
    {
      key: 'prices',
      label: 'Цены',
    },
    {
      key: 'design',
      label: 'Дизайн',
    },
    {
      key: 'efficiency',
      label: 'Производительность',
    },
    {
      key: 'safety',
      label: 'Безопасность',
    },
    {
      key: 'comfort',
      label: 'Комфорт',
    },
    {
      key: 'specifications',
      label: 'Характеристики',
    },
  ];

  const fileInfoView = () => {
    if (fileInfo?.data.length) {
      return (
        <a
          href={fileInfo?.data[0].file_name}
          target="_blank"
          className="flex items-center gap-[8px] cursor-pointer !font-bold whitespace-nowrap"
          rel="noreferrer"
        >
          <DownLoadIcon />
          e-брошюра
        </a>
      );
    }

    return (
      <p className="flex items-center gap-[8px] cursor-pointer !font-bold whitespace-nowrap">
        <DownLoadIcon />
        e-брошюра
      </p>
    );
  };

  const filePriceLisView = () => {
    if (filePrice?.data?.length) {
      return <CarsSantaFePrice list={filePrice?.data} />;
    }

    return (
      <div className="grid grid-cols-12 pt-[60px]">
        <Empty className="col-span-12" />
      </div>
    );
  };

  return (
    <div className="pb-[100px]">
      <div
        className="bg-no-repeat bg-cover bg-center p-[450px_0_60px] sm:p-[200px_0_60px] xs:p-[100px_0_60px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-[1024px] mx-auto w-full px-5">
          <h1 className="text-white text-[60px] xs:text-[50px] font-bold">SANTA FE</h1>
        </div>
      </div>
      <CarsReq />
      <div className="border-b border-solid border-b-[#E9E9E9]">
        <div className="max-w-[1024px] mx-auto w-full flex items-center sm:flex-col sm:gap-y-5 justify-between cars-tabs p-[30px_20px_20px]">
          <div className="w-full">
            {windowWidth > 768 ? (
              <Tabs
                defaultActiveKey="1"
                tabPosition="top"
                tabBarGutter={windowWidth > 768 ? 20 : 10}
                items={items}
                onChange={onChange}
              />
            ) : (
              <Select value={activeTab} onChange={onChange} className="w-full select h-[44px]">
                {items.map((item: any) => (
                  <Select.Option key={item.key} value={item.key}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            )}
          </div>

          {fileInfoView()}
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto w-full px-5">
        {activeTab === 'features' && <CarsSantaFeFeatures />}
        {activeTab === 'prices' && <>{filePriceLisView()}</>}
        {activeTab === 'design' && <CarsSantaFeDesign />}
        {activeTab === 'efficiency' && <CarsSantaFeEfficiency />}
        {activeTab === 'safety' && <CarsSantaFeSafety />}
        {activeTab === 'comfort' && <CarsSantaFeComfort />}
        {activeTab === 'specifications' && <CarsSantaFeSpecifications />}
      </div>
    </div>
  );
};
