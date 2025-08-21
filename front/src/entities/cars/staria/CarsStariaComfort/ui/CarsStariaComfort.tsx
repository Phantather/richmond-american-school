import { FC } from 'react';

import comfort1 from '~shared/assets/staria/comfort1.jpg';
import comfort2 from '~shared/assets/staria/comfort2.jpg';
import comfort3 from '~shared/assets/staria/comfort3.jpg';
import comfort4 from '~shared/assets/staria/comfort4.jpg';
import comfort5 from '~shared/assets/staria/comfort5.jpg';
import comfort6 from '~shared/assets/staria/comfort6.jpg';
import comfort7 from '~shared/assets/staria/comfort7.jpg';
import comfort8 from '~shared/assets/staria/comfort8.jpg';
import comfort9 from '~shared/assets/staria/comfort9.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsStariaComfortProps {}

export const CarsStariaComfort: FC<CarsStariaComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Наслаждайтесь свободой каждый день.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Интеллектуальные функции STARIA дарят свободу, чтобы вы могли сосредоточиться на более
        важных вещах. Сдвижные двери открываются и закрываются автоматически при помощи умного
        ключа.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort1} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Автоматические сдвижные двери</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Не нужно нажимать на кнопки. Ваше присутствие распознается, и сдвижная дверь открывается
            автоматически (если ключ находится у вас).
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort2} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Автоматические сдвижные двери</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Не нужно нажимать на кнопки. Ваше присутствие распознается, и сдвижная дверь открывается
            автоматически (если ключ находится у вас).
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Пятая дверь с функцией автоматического закрытия</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Если вы не можете достать ключ, STARIA сделает все за вас: дверь багажного отделения
          автоматически откроется, когда вы подойдете к автомобилю, и закроется, когда вы удалитесь
          от него.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort3} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Удлиненные сдвижные сиденья</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Удлиненные сдвижные сиденья</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">USB-порты у каждого сиденья</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Мультимедийная система с 8-дюймовым дисплеем</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort6} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Мультимедийная система с 8-дюймовым дисплеем</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Щиток приборов диагональю 10,25″</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort7} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Полностью автоматическая система кондиционирования</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort8} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Полностью автоматическая система кондиционирования</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Премиальная аудиосистема BOSE</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort9} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
