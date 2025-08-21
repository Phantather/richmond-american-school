import { Empty, Select, Tabs } from 'antd';
import { FC, useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import { CarsSonataDesign } from '~entities/cars';
import { CarsSonataComfort } from '~entities/cars/sonata/CarsSonataComfort';
import { CarsSonataEfficiency } from '~entities/cars/sonata/CarsSonataEfficiency';
import { CarsSonataFeatures } from '~entities/cars/sonata/CarsSonataFeatures';
import { CarsSonataPrice } from '~entities/cars/sonata/CarsSonataPrice/ui/CarsSonataPrice';
import { CarsSonataSafety } from '~entities/cars/sonata/CarsSonataSafety';
import { CarsSonataSpecifications } from '~entities/cars/sonata/CarsSonataSpecifications';
import { useSetSonataFileInfo, useSonataFileInfo } from '~entities/shared/file-info/model';
import { useSetSonataFilePrice, useSonataFilePrice } from '~entities/shared/file-price/model';
import { CarsReq, DownLoadIcon, useWindowInnerWidth } from '~shared/ui';

import bg from '~shared/assets/sonata/banner.jpg';

export const CarsSonataData: FC = () => {
  const windowWidth = useWindowInnerWidth();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('1');
  const [isLoading, setIsLoading] = useState(false);

  const fileInfo = useSonataFileInfo();
  const setFileInfo = useSetSonataFileInfo();

  const filePrice = useSonataFilePrice();
  const setFilePrice = useSetSonataFilePrice();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!fileInfo) {
          await setFileInfo({ id_vehicle: 2 });
        }

        if (!filePrice) {
          await setFilePrice({ id_vehicle: 2 });
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
        <>
          <a
            href={fileInfo?.data[0].file_name}
            target="_blank"
            className="flex items-center gap-[8px] cursor-pointer !font-bold whitespace-nowrap"
            rel="noreferrer"
          >
            <DownLoadIcon />
            e-брошюра
          </a>
        </>
      );
    }

    return (
      <>
        <p className="flex items-center gap-[8px] cursor-pointer !font-bold whitespace-nowrap">
          <DownLoadIcon />
          e-брошюра
        </p>
      </>
    );
  };

  const filePriceListView = () => {
    if (filePrice?.data?.length) {
      return <CarsSonataPrice list={filePrice?.data} />;
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
        className="bg-no-repeat bg-cover bg-center p-[400px_0_60px] sm:p-[200px_0_60px] xs:p-[100px_0_60px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-[1024px] mx-auto w-full px-5">
          <h1 className="text-white text-[60px] xs:text-[50px] font-bold">SONATA</h1>
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
        {activeTab === 'features' && <CarsSonataFeatures />}
        {activeTab === 'prices' && <>{filePriceListView()}</>}
        {activeTab === 'design' && <CarsSonataDesign />}
        {activeTab === 'efficiency' && <CarsSonataEfficiency />}
        {activeTab === 'safety' && <CarsSonataSafety />}
        {activeTab === 'comfort' && <CarsSonataComfort />}
        {activeTab === 'specifications' && <CarsSonataSpecifications />}
      </div>
    </div>
  );
};
