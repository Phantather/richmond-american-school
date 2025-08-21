import { FC } from 'react';

import design1 from '~shared/assets/new-tuscon/design-1.png';
import design2 from '~shared/assets/new-tuscon/design-2.jpg';
import design3 from '~shared/assets/new-tuscon/design-3.jpg';
import design4 from '~shared/assets/new-tuscon/design-4.jpg';
import design5 from '~shared/assets/new-tuscon/design-5.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import { CarsNewTusconDesignViewer } from '~entities/cars/new-tuscon';

export const CarsNewTusconDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsNewTusconDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px] text-center mb-[28px]">
          Уникальный дизайн: решетка радиатора в виде крыльев, широкий и выразительный внешний вид.
        </h2>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design1} alt="new_tuscon design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Спортивный профиль с ярко выраженными линиями
        </h2>

        <div className="h-[540px] sm:max-h-[400px]">
          <img src={design2} alt="new_tuscon design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Максимальная динамичность благодаря новому дизайну колес
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design3} alt="new_tuscon" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">LED-поворотник в наружном зеркале</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design4} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">LED-поворотник в наружном зеркале</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Рейлинги на крыше / Панорамная крыша</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="new_tuscon" className="w-full h-full" />
      </div>
    </div>
  );
};
