import { FC } from 'react';

import comfort1 from '~shared/assets/mufasa/comfort1.png';
import comfort2 from '~shared/assets/mufasa/comfort2.png';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsMufasaComfortProps {}

export const CarsMufasaComfort: FC<CarsMufasaComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[44px] font-medium text-center">
        Интеллектуальная система приборной панели
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Большая панель с двумя экранами, объединяющая цифровую приборную панель и мультимедийный
        экран с сенсорным управлением. Четкое изображение и полноцветный режим полностью отображают
        новейшие технологии и обеспечивают максимально комфортное восприятие.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort1} alt="elantra" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[44px] font-medium text-center mt-[60px]">
        Крепление для планшета на сидениях
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Крепление для планшета на спинке переднего пассажира обеспечивает комфортное использование
        гаджетов во время поездки
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort2} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
