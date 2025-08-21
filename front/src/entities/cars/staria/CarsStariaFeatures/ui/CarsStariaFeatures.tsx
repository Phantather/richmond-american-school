import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight1 from '~shared/assets/staria/highlight1.png';
import highlight2 from '~shared/assets/staria/highlight2.jpg';
import highlight3 from '~shared/assets/staria/highlight3.jpg';
import highlight4 from '~shared/assets/staria/highlight4.png';

import swiper1 from '~shared/assets/staria/swiper1.jpg';
import swiper2 from '~shared/assets/staria/swiper2.jpg';
import swiper3 from '~shared/assets/staria/swiper3.jpg';
import swiper4 from '~shared/assets/staria/swiper4.jpg';
import swiper5 from '~shared/assets/staria/swiper5.jpg';
import swiper6 from '~shared/assets/staria/swiper6.jpg';
import swiper7 from '~shared/assets/staria/swiper7.jpg';
import swiper8 from '~shared/assets/staria/swiper8.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsStariaFeaturesProps {}

export const CarsStariaFeatures: FC<CarsStariaFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Hyundai STARIA - гигантский скачок в будущее минивэнов.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Приготовьтесь отправиться в дорогу с максимальным комфортом в абсолютно новом интерьере
        STARIA. Перед вами откроются безграничные возможности — настолько же разнообразные,
        насколько уникален каждый из нас. Один маленький шаг для STARIA, но гигантский скачок в
        будущее мобильности и многофункциональности.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        STARIA LUXE
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        От его футуристического дизайна, напоминающего роскошную современную зону для отдыха,
        невозможно оторвать взгляд. Вы чувствуете максимальный комфорт в салоне. Пространство,
        создающее удивительное ощущение открытости, свободы, а так же интеллектуальные технологии,
        которые значительно упростят ежедневные поездки.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        STARIA (Travel/ Business)
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Отличительной чертой данной комплектации является 8-ми местный салон, в котором вместо двух
        кресел установлен трехместный диван. Третий ряд по-прежнему может вместить трех пассажиров,
        а салон имеет огромное пространство, воздушность благодаря большой площади остекления.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight3} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        STARIA (VAN)
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        <b>Новые возможности для перевозки грузов.</b> <br /> Просторный и интеллектуальный фургон
        STARIA VAN предлагает все необходимое для эффективного и безопасного выполнения работ,
        обладая при этом особым стилем. Внутри вы найдете огромное пространство для грузов и хорошо
        оснащенный салон, который способен стать островком комфорта и отдыха для вас и ваших
        сотрудников.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight4} alt="elantra" className="w-full h-full" />
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
