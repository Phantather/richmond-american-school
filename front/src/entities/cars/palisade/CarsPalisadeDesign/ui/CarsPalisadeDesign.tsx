import { FC } from 'react';

import design1 from '~shared/assets/palisade/design1.jpg';
import design2 from '~shared/assets/palisade/design2.jpg';
import design3 from '~shared/assets/palisade/design3.jpg';
import design4 from '~shared/assets/palisade/design4.jpg';
import design5 from '~shared/assets/palisade/design5.jpg';
import design6 from '~shared/assets/palisade/design6.jpg';
import design7 from '~shared/assets/palisade/design7.jpg';
import design8 from '~shared/assets/palisade/design8.jpg';
import design9 from '~shared/assets/palisade/design9.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import { CarsSantaFeDesignViewer } from '~entities/cars/santa-fe';
import { CarsPalisadeDesignViewer } from '~entities/cars';

export const CarsPalisadeDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsPalisadeDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px] text-center mb-[28px]">Экстерьер</h2>
        <p className="text-center my-[30px]">
          PALISADE излучает солидность с любого ракурса. Все его детали — от выразительной решетки
          радиатора до футуристических легкосплавных колесных дисков — подчеркивают роскошь
          автомобиля, а благодаря уникальным дневным ходовым огням модель выглядит еще более широкой
          и устойчивой. Для достижения стилистического единства и особой гармонии дизайн задних
          фонарей перекликается с передними светодиодными модулями.
        </p>
        {/*<div className="h-[540px] sm:h-[400px]">*/}
        {/*  <img src={design1} alt="palisade design" className="w-full h-full object-cover" />*/}
        {/*</div>*/}
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Выразительный дизайн передней части.
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design1} alt="palisade" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Решетка радиатора из темного хрома</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design2} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Решетка радиатора из темного хрома</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Светодиодные фары</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design3} alt="palisade" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Мощный и широкий боковой профиль.
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design4} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">20-дюймовые легкосплавные диски</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">20-дюймовые легкосплавные диски</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">20-дюймовые легкосплавные диски (exclusive)</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design6} alt="palisade" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Приземистая посадка, четкий объем.
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design7} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Задние противотуманные фары</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design8} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Задние противотуманные фары</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Светодиодные задние фонари</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design9} alt="palisade" className="w-full h-full" />
      </div>
    </div>
  );
};
