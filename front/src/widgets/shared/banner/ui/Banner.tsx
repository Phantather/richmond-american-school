import React, { useLayoutEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { Spin } from 'antd';

import { useBanner, useSetBanner } from '~entities/shared/banner';

export const Banner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const banner = useBanner();
  const setBanner = useSetBanner();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!banner) {
          await setBanner();
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const bannerView = () => {
    if (banner) {
      return (
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="swiper"
        >
          {banner?.data?.map((bannerItem, index) => (
            <SwiperSlide
              key={`${bannerItem.id_banner}_${index}`}
              className="relative"
              style={{
                backgroundImage: `url(${bannerItem?.banner_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '540px',
              }}
            >
              <div className="max-w-[1024px] w-full h-full relative">
                <img
                  src={bannerItem?.banner_url}
                  alt={bannerItem?.banner_title}
                  width="1024"
                  height="540"
                  style={{ display: 'none' }} // скрываем изображение, так как оно используется в background
                />
                <h1 className="text-[40px] text-white absolute bottom-[60px] left-5">
                  {bannerItem.banner_title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }

    return null;
  };

  return (
    <>
      {isLoading ? (
        <div className="col-span-12 flex justify-center items-center w-full h-[540px]">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <> {bannerView()}</>
      )}
    </>
  );
};
