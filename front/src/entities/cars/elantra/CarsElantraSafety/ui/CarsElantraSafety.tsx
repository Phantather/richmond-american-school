import { FC } from 'react';

import safety1 from '~shared/assets/elantra/safety-1.png';
import safety2 from '~shared/assets/elantra/safety-2.png';
import safety3 from '~shared/assets/elantra/safety-3.png';
import safety4 from '~shared/assets/elantra/safety-4.png';
import safety5 from '~shared/assets/elantra/safety-5.png';
import { useWindowInnerWidth } from '~shared/ui';

export interface CarsElantraSafetyProps {}

export const CarsElantraSafety: FC<CarsElantraSafetyProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mb-[40px]">
        Безопасность
      </h2>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Предупреждение о внимании водителя (DAW)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Отображает уровень внимания водителя во время вождения. Предупреждает при обнаружении
            признаков невнимательности водителя и при необходимости рекомендует отдохнуть. Во время
            остановки водитель получает предупреждение об отъезде впереди идущего автомобиля.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety1} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Предупреждение о внимании водителя (DAW)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Отображает уровень внимания водителя во время вождения. Предупреждает при обнаружении
            признаков невнимательности водителя и при необходимости рекомендует отдохнуть. Во время
            остановки водитель получает предупреждение об отъезде впереди идущего автомобиля.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Система контроля полосы движения (LFA)</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Помогает обнаружить полосу движения и транспортное средство впереди на дороге с помощью
          камеры переднего вида на лобовом стекле, а также помогает водителю в рулевом управлении,
          помогая удерживать автомобиль по центру между полосами движения.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety2} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6  sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Система помощи при удержании полосы движения (LKA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Система использует переднюю многофункциональную камеру для наблюдения за линиями дороги.
            В случае непреднамеренного съезда с полосы движения он предупреждает вас и может вернуть
            автомобиль на исходную.
          </p>
        </div>
      )}
      <div className="col-span-6  sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety3} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Система помощи при удержании полосы движения (LKA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Система использует переднюю многофункциональную камеру для наблюдения за линиями дороги.
            В случае непреднамеренного съезда с полосы движения он предупреждает вас и может вернуть
            автомобиль на исходную.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Атмосферная подсветка </h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Атмосферная подсветка дает Вам возможность выбрать освещение под Ваше настроение
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Изменения к лучшему</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новая передняя решетка подчеркивает спортивные черты новой ELANTRA. Новые линии и фары
            гармонично создают облик спортивной машины
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Изменения к лучшему</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новая передняя решетка подчеркивает спортивные черты новой ELANTRA. Новые линии и фары
            гармонично создают облик спортивной машины
          </p>
        </div>
      )}
    </div>
  );
};
