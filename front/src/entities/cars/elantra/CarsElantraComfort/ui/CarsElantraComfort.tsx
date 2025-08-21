import { FC } from 'react';

import highlight from '~shared/assets/elantra/elantra-highlights-1.png';
import highlightSecond from '~shared/assets/elantra/elantra-highlights-2.png';
import highlightThird from '~shared/assets/elantra/elantra-highlights-3.png';
import { useWindowInnerWidth } from '~shared/ui';

export interface CarsElantraComfortProps {}

export const CarsElantraComfort: FC<CarsElantraComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Оставайся на связи
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Передовые функции подключения новой ELANTRA интуитивно понятны и просты в использовании,
        позволяя вам оставаться на связи.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[80px]">
        Персонализированный профиль
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Выберите свой персональный профиль и все будет под рукой — от радиостанций до настроек
        звука.
      </p>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Мультисопряжение Bluetooth</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Во время вождения переключайте музыку между двумя смартфонами, подключенными по
            беспроводной связи одновременно.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px]">
        <img src={highlightSecond} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Мультисопряжение Bluetooth</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Во время вождения переключайте музыку между двумя смартфонами, подключенными по
            беспроводной связи одновременно.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[20px_0]">
        <h3 className="text-[30px]">Беспроводная зарядка смартфона</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Беспроводная зарядка, для которой достаточно просто положить телефон на зарядную площадку.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px]">
        <img src={highlightThird} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
