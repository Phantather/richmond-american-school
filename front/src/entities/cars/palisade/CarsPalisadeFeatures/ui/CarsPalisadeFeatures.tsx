import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight1 from '~shared/assets/palisade/highlight1.jpg';
import highlight2 from '~shared/assets/palisade/highlight2.jpg';
import highlight3 from '~shared/assets/palisade/highlight3.jpg';
import highlight4 from '~shared/assets/palisade/highlight4.jpg';

import swiper1 from '~shared/assets/palisade/swiper1.jpg';
import swiper2 from '~shared/assets/palisade/swiper2.jpg';
import swiper3 from '~shared/assets/palisade/swiper3.jpg';
import swiper4 from '~shared/assets/palisade/swiper4.jpg';
import swiper5 from '~shared/assets/palisade/swiper5.jpg';
import swiper6 from '~shared/assets/palisade/swiper6.jpg';
import swiper7 from '~shared/assets/palisade/swiper7.jpg';
import swiper8 from '~shared/assets/palisade/swiper8.jpg';
import swiper9 from '~shared/assets/palisade/swiper9.jpg';
import swiper10 from '~shared/assets/palisade/swiper10.jpg';
import swiper11 from '~shared/assets/palisade/swiper11.jpg';
import swiper12 from '~shared/assets/palisade/swiper12.jpg';
import swiper13 from '~shared/assets/palisade/swiper13.jpg';
import swiper14 from '~shared/assets/palisade/swiper14.jpg';
import swiper15 from '~shared/assets/palisade/swiper15.jpg';
import swiper16 from '~shared/assets/palisade/swiper16.jpg';
import swiper17 from '~shared/assets/palisade/swiper17.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsPalisadeFeaturesProps {}

export const CarsPalisadeFeatures: FC<CarsPalisadeFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Новый выразительный облик.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Благодаря роскошному и выразительному внешнему виду новый PALISADE с первого взгляда
        привлечет к себе внимание, куда бы вы ни направились. Его дизайн вызывает ощущение
        спокойствия и придает больше уверенности, ведь вы знаете, что самые современные технологии
        обеспечения безопасности способны защитить вас и ваших близких. Имеется просторный салон,
        возможность выбирать подходящую конфигурацию сидений, а также передовые технологии
        подключения превращают PALISADE в идеальную модель для семейного отдыха.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="palisade" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Роскошная внешность.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        PALISADE, флагманский SUV марки Hyundai, рожден, чтобы быть королем дорог, и демонстрирует
        все качества лидера. Этот автомобиль, атлетичный и элегантный одновременно, объединяет в
        себе эффектную внешность и незаурядные возможности, которые не останутся незамеченными.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="palisade" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Технологии нового уровня.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        С PALISADE вы всегда будете ждать следующей поездки. Его мощная силовая установка отличается
        тихой работой и быстрой реакцией, благодаря которым управление автомобилем доставляет
        невероятное удовольствие. PALISADE оснащен современными системами безопасности, способными
        защитить вас в непредвиденных обстоятельствах, благодаря им вы сможете наслаждаться
        ощущением абсолютного спокойствия и уверенности.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight3} alt="palisade" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Семейные ценности.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Время, проводимое с семьей, бесценно. PALISADE поможет использовать его максимально
        эффективно благодаря невероятно просторному салону, способному удовлетворить потребности
        семей с разным количеством людей в ней. Он стал еще более универсальным за счет возможности
        выбирать разные конфигурации сидений и большого количества отделений для хранения вещей.
        Сколько бы взрослых пассажиров, детей и багажа ни находилось в автомобиле, семейный PALISADE
        сможет подарить вам комфорт и доставить вас до места назначения.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight4} alt="palisade" className="w-full h-full" />
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
                <img src={swiper1} alt="palisade" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper2} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper3} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper4} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper5} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper6} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper7} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper8} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper9} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper10} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper11} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper12} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper13} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper14} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper15} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper16} alt="palisade" className="w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper17} alt="palisade" className="w-full h-full" />
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
                <img src={swiper1} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper2} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper3} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper4} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper5} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper6} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper7} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper8} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper9} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper10} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper11} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper12} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper13} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper14} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper15} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper16} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={swiper17} alt="palisade" className="!h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
