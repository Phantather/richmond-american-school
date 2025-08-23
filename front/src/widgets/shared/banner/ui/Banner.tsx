import React, { useLayoutEffect, useRef, useState } from 'react';
import { Skeleton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

import { useBanner, useSetBanner } from '~entities/shared/banner';
import { NextIcon, PrevIcon } from '~shared/ui';

export const Banner = () => {
  const banner = useBanner();
  const setBanner = useSetBanner();

  const [isLoading, setIsLoading] = useState(false);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

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

  useLayoutEffect(() => {
    if (swiperRef.current && navigationPrevRef.current && navigationNextRef.current) {
      swiperRef.current.params.navigation.prevEl = navigationPrevRef.current;
      swiperRef.current.params.navigation.nextEl = navigationNextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [banner]);

  const bannerView = () => {
    if (banner) {
      return (
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-5 py-5">
          <div className="grid col-span-8 md:col-span-8 sm:col-span-4 relative">
            <button
              ref={navigationPrevRef}
              className="absolute top-1/2 translate-y-[-50%] left-5 z-10 w-[35px] h-[35px] flex items-center justify-center bg-white hover:bg-secondary [&>svg]:hover:stroke-white e transition rounded border-none cursor-pointer"
            >
              <PrevIcon />
            </button>

            <Swiper
              freeMode
              loop
              modules={[FreeMode, Navigation]}
              onSwiper={(swiper: unknown) => {
                swiperRef.current = swiper;
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
                    height: '400px',
                  }}
                >
                  <div className="max-w-[1024px] w-full h-full relative">
                    <h1 className="text-[40px] text-white absolute bottom-[60px] left-5">
                      {bannerItem.banner_title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={navigationNextRef}
              className="absolute top-1/2 translate-y-[-50%] right-5 z-10 w-[35px] h-[35px] flex items-center justify-center bg-white hover:bg-secondary [&>svg]:hover:stroke-white transition rounded border-none cursor-pointer"
            >
              <NextIcon />
            </button>
          </div>

          <div className="grid col-span-4 md:col-span-8 sm:col-span-4 bg-white">
            <div>asdasd</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-5 py-5 w-full my-skeleton">
          {/* Левая часть (баннеры) */}
          <Skeleton.Image
            active
            className="col-span-8 md:col-span-8 sm:col-span-4 my-skeleton rounded"
            style={{ width: '100%', height: 200 }}
          />

          {/* Правая часть */}
          <Skeleton.Node
            active
            className="col-span-4 md:col-span-8 sm:col-span-4 rounded"
            style={{ width: '100%', height: 200 }}
          >
            <div />
          </Skeleton.Node>
        </div>
      ) : (
        bannerView()
      )}
    </>
  );
};
