import { FC } from 'react';

import comfort1 from '~shared/assets/new-tuscon/comfort1.jpg';
import comfort2 from '~shared/assets/new-tuscon/comfort2.png';
import comfort3 from '~shared/assets/new-tuscon/comfort3.jpg';
import comfort4 from '~shared/assets/new-tuscon/comfort4.jpg';
import comfort5 from '~shared/assets/new-tuscon/comfort5.jpg';
import comfort6 from '~shared/assets/new-tuscon/comfort6.jpg';
import comfort7 from '~shared/assets/new-tuscon/comfort7.jpg';
import comfort8 from '~shared/assets/new-tuscon/comfort8.jpg';
import comfort9 from '~shared/assets/new-tuscon/comfort9.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsNewTusconComfortProps {}

export const CarsNewTusconComfort: FC<CarsNewTusconComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Технологии для вашего удобства
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Переосмысленный интерьер включает в себя интуитивно понятные технологии, которые
        обеспечивают максимальный комфорт и легкость на дороге.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort1} alt="new_tuscon" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[80px]">
        Электронный селектор переключения передач (SBW)
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Новый электронный селектор, размещенный рядом с рулевым колесом, сделает управление
        автомобилем еще эргономичнее
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort2} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Беспроводное зарядное устройство</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Обновленное беспроводное зарядное устройство плоского типа для смартфонов обеспечивает
            удобную и быструю зарядку.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort3} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Беспроводное зарядное устройство</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Обновленное беспроводное зарядное устройство плоского типа для смартфонов обеспечивает
            удобную и быструю зарядку.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Двухзонная автоматическая система климат-контроля</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort4} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Премиум аудиосистема Krell</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort5} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Премиум аудиосистема Krell</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Подогрев рулевого колеса</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort6} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Мультифункциональные порты USB-C</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort7} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Мультифункциональные порты USB-C</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Шторка (экран) для багажника</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort8} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Передние сиденья с подогревом и вентиляцией</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort9} alt="new_tuscon" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Передние сиденья с подогревом и вентиляцией</h3>
        </div>
      )}
    </div>
  );
};
