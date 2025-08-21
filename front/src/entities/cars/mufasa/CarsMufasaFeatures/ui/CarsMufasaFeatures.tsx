import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import highlight1 from '~shared/assets/mufasa/highlight1.png';
import highlight2 from '~shared/assets/mufasa/highlight2.png';
import highlight3 from '~shared/assets/mufasa/highlight3.png';
import highlight4 from '~shared/assets/mufasa/highlight4.png';
import highlight5 from '~shared/assets/mufasa/highlight5.png';
import highlight6 from '~shared/assets/mufasa/highlight6.png';

import swiper1 from '~shared/assets/staria/swiper1.jpg';
import swiper2 from '~shared/assets/staria/swiper2.jpg';
import swiper3 from '~shared/assets/staria/swiper3.jpg';
import swiper4 from '~shared/assets/staria/swiper4.jpg';
import swiper5 from '~shared/assets/staria/swiper5.jpg';
import swiper6 from '~shared/assets/staria/swiper6.jpg';
import swiper7 from '~shared/assets/staria/swiper7.jpg';
import swiper8 from '~shared/assets/staria/swiper8.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsMufasaFeaturesProps {}

export const CarsMufasaFeatures: FC<CarsMufasaFeaturesProps> = () => {
  const windowWidth = useWindowInnerWidth();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Герой городских джунглей.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        В городских джунглях, где каждый день – это новый вызов, поиск идеального спутника
        становится настоящей охотой. Hyundai MUFASA - воплощение дерзости и стиля на дороге. С
        первого взгляда Hyundai MUFASA завораживает своим неповторимым обликом.
      </p>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center">
        Выразительные линии и современные элементы создают ощущение несокрушимой мощи:
      </p>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center">
        Величественная решетка радиатора - центральная деталь, словно львиная грива. Её уникальная
        структура с острыми контурами символизирует силу и динамичность.
      </p>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[12px]">
        Выразительные фары в вертикальном формате, напоминают глаза хищника – всегда настороже и
        готовые к действию.
      </p>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[12px]">
        Hyundai MUFASA — не просто автомобиль, это стиль жизни тех, кто стремится оставлять след в
        каждом дне.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[44px] font-medium text-center mt-[60px]">
        Стиль и инновации для современной жизни
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Hyundai MUFASA – это городской SUV, который сочетает в себе смелый дизайн, передовые
        технологии и практичность. Этот стильный и технологичный автомобиль идеально подходит для
        активных горожан, которые ценят комфорт, инновации и стиль в повседневной жизни и
        путешествиях.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Современный дизайн
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Hyundai MUFASA отличается уникальной параметрической решеткой Diamond, которая подчеркивает
        выразительный облик передней части автомобиля. Спортивный передний бампер и вертикальные
        светодиодные фары формируют стильный и выразительный внешний вид. Трехмерные боковые линии и
        пятиспицевые диски Fengchi усиливают динамическую эстетику дизайна, идеально сочетая мощь и
        элегантность.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight3} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[60px]">
        Multi Zone
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Дизайн интерьера Multi Zone призван создавать индивидуальную «умную комнату» для водителя и
        его пассажиров. Салон содержит спортивное сиденье для водителя, стильное пассажирское кресло
        впереди и чрезвычайно удобное заднее пространство. Всего в автомобиле имеется 31 место для
        хранения вещей, чтобы удовлетворить даже самые строгие требования любого члена семьи.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight4} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[44px] font-medium text-center mt-[60px]">
        Система безопасности Hyundai Smartsense
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Hyundai MUFASA оснащен интеллектуальными функциями помощи водителю. Система безопасности
        обеспечивает всестороннее удобство вождения и безопасность водителя, пассажиров и других
        участников дорожного движения.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight5} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[44px] font-medium text-center mt-[60px]">
        Интеллектуальная система приборной панели
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
        Большая панель с двумя экранами, объединяющая цифровую приборную панель и мультимедийный
        экран с сенсорным управлением. Четкое изображение и полноцветный режим полностью отображают
        новейшие технологии и обеспечивают максимально комфортное восприятие.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={highlight6} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
