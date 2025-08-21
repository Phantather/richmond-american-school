import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight1 from '~shared/assets/santa-fe/highlight1.png';
import highlight2 from '~shared/assets/santa-fe/highlight2.png';

import swiper1 from '~shared/assets/santa-fe/swiper1.jpg';
import swiper2 from '~shared/assets/santa-fe/swiper2.jpg';
import swiper3 from '~shared/assets/santa-fe/swiper3.jpg';
import swiper4 from '~shared/assets/santa-fe/swiper4.jpg';
import swiper5 from '~shared/assets/santa-fe/swiper5.jpg';
import swiper6 from '~shared/assets/santa-fe/swiper6.jpg';
import swiper7 from '~shared/assets/santa-fe/swiper7.jpg';
import swiper8 from '~shared/assets/santa-fe/swiper8.jpg';
import swiper9 from '~shared/assets/santa-fe/swiper9.jpg';
import swiper10 from '~shared/assets/santa-fe/swiper10.jpg';
import swiper11 from '~shared/assets/santa-fe/swiper11.jpg';
import swiper12 from '~shared/assets/santa-fe/swiper12.jpg';
import swiper13 from '~shared/assets/santa-fe/swiper13.jpg';
import swiper14 from '~shared/assets/santa-fe/swiper14.jpg';
import swiper15 from '~shared/assets/santa-fe/swiper15.jpg';
import swiper16 from '~shared/assets/santa-fe/swiper16.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsSantaFeFeaturesProps {}

export const CarsSantaFeFeatures: FC<CarsSantaFeFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Полностью переосмысленный дизайн, передовые технологии и комфорт, безопасность на высшем
        уровне и улучшенная производительность.
      </h2>
      {/*<p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">*/}
      {/*  Новый TUCSON открывает дверь в новый день и новый стиль вождения. Он выделяется в городском*/}
      {/*  потоке, расширяя границы возможного и предлагая совершенно новый взгляд на автомобиль. Его*/}
      {/*  внешний вид привлекает внимание, а внутри вас ждет простор, комфорт и многофункциональность,*/}
      {/*  которые превзойдут все ваши ожидания.*/}
      {/*</p>*/}
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Открыт для большего
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Откройте новые возможности вместе с новым SANTA FE. Он идеально сочетает в себе уверенность
        и тягу к приключениям, делая каждую поездку особенной.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="elantra" className="w-full h-full" />
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
                <img src={swiper2} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper3} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper4} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper5} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper6} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper7} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper8} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper9} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper10} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper11} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper12} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper13} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper14} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper15} alt="elantra" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper16} alt="elantra" className="w-full h-full" />
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
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper9} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper10} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper11} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper12} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper13} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper14} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper15} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper16} alt="elantra" className="!h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
