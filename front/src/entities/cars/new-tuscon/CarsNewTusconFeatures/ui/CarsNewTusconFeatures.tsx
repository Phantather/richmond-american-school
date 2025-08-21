import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight1 from '~shared/assets/new-tuscon/highlight1.jpg';
import highlight2 from '~shared/assets/new-tuscon/highlight2.jpg';
import highlight3 from '~shared/assets/new-tuscon/highlight3.jpg';
import highlight4 from '~shared/assets/new-tuscon/highlight4.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsNewTusconFeaturesProps {}

export const CarsNewTusconFeatures: FC<CarsNewTusconFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Выходи за рамки привычного
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Новый TUCSON открывает дверь в новый день и новый стиль вождения. Он выделяется в городском
        потоке, расширяя границы возможного и предлагая совершенно новый взгляд на автомобиль. Его
        внешний вид привлекает внимание, а внутри вас ждет простор, комфорт и многофункциональность,
        которые превзойдут все ваши ожидания.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="new_tuscon" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Вдохновляющий дизайн
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Новый TUCSON с 3D-параметрической решёткой радиатора и сверкающими как драгоценности
        элементами, создан для тех, кто задаёт тренды и ценит футуристический дизайн. Его фирменный
        стиль "чувственная спортивность" и современные технологии делают его по-настоящему
        выдающимся в своем классе.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="new_tuscon" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Новый TUCSON устанавливает новые стандарты для кроссоверов.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        С инновационным дизайном и ценностью, превосходящей ожидания, он создан для того, чтобы
        доминировать в своем классе.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight3} alt="new_tuscon" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Первоклассная безопасность.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        С инновационным спортивным дизайном и просторным интерьером новый TUCSON также предлагает
        передовые функции безопасности и комфорта, которые вас приятно удивят.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight4} alt="new_tuscon" className="w-full h-full" />
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
                <img src={highlight1} alt="new_tuscon" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight2} alt="new_tuscon" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight3} alt="new_tuscon" className="w-full h-full overflow-hidden" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight4} alt="new_tuscon" className="w-full h-full overflow-hidden" />
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
                <img src={highlight1} alt="new_tuscon" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight2} alt="new_tuscon" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight3} alt="new_tuscon" className="!h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!max-h-[540px]">
                <img src={highlight4} alt="new_tuscon" className="!h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
