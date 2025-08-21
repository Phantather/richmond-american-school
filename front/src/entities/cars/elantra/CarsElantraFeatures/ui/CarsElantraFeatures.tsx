import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight from '~shared/assets/elantra/elantra-highlights-1.png';
import highlightSecond from '~shared/assets/elantra/elantra-highlights-2.png';
import highlightThird from '~shared/assets/elantra/elantra-highlights-3.png';
import swiper1 from '~shared/assets/elantra/swiper-1.jpg';
import swiper2 from '~shared/assets/elantra/swiper-2.jpg';
import swiper3 from '~shared/assets/elantra/swiper-3.jpg';
import swiper4 from '~shared/assets/elantra/swiper-4.jpg';
import swiper5 from '~shared/assets/elantra/swiper-5.jpg';
import swiper6 from '~shared/assets/elantra/swiper-6.jpg';
import swiper7 from '~shared/assets/elantra/swiper-7.jpg';
import swiper8 from '~shared/assets/elantra/swiper-8.jpg';
import { useWindowInnerWidth } from '~shared/ui';

export interface CarsElantraFeaturesProps {}

export const CarsElantraFeatures: FC<CarsElantraFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Сила наследия и передовых технологий
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Новая ELANTRA – смелая и утонченная, с еще более стильными изменениями.
      </p>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center">
        Утонченная спортивность, изысканный дизайн интерьера, передовые функции безопасности и
        удобства создают новый стиль жизни для тех, кто бросает вызов будущему на собственных
        условиях.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Изменения к лучшему</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новая передняя решетка подчеркивает спортивные черты новой ELANTRA. Новые линии и фары
            гармонично создают облик спортивной машины.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={highlightSecond} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Изменения к лучшему</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новая передняя решетка подчеркивает спортивные черты новой ELANTRA. Новые линии и фары
            гармонично создают облик спортивной машины.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Атмосферная подсветка </h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Атмосферная подсветка дает Вам возможность выбрать освещение под Ваше настроение
        </p>
      </div>
      <div className="col-span-6  sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={highlightThird} alt="elantra" className="w-full h-full" />
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 ">
        <h2 className="text-[48px] text-center m-[60px_0_40px]">Галерея</h2>
        <div>
          <Swiper
            spaceBetween={10}
            loop
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            autoplay={{
              delay: 2500,
            }}
            className="xmySwiper2"
          >
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper1} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper2} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper3} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper4} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper5} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper6} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper7} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper8} alt="elantra" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            // spaceBetween={10}
            loop
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            autoplay={{
              delay: 2500,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper1} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper2} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper3} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper4} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper5} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper6} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper7} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper8} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
