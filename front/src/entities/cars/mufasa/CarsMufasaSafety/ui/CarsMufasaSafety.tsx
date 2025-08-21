import { FC } from 'react';

import safety1 from '~shared/assets/mufasa/safety1.png';
import safety2 from '~shared/assets/mufasa/safety2.png';
import safety3 from '~shared/assets/mufasa/safety3.png';
import safety4 from '~shared/assets/mufasa/safety4.png';
import safety5 from '~shared/assets/mufasa/safety5.png';

import { useWindowInnerWidth } from '~shared/ui';
import highlight from '~shared/assets/palisade/eff.jpg';
export interface CarsMufasaSafetyProps {}

export const CarsMufasaSafety: FC<CarsMufasaSafetyProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center">
        Поможет на дороге.
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center m-[30px_40px]">
        Система безопасности Hyundai Smartsense. Hyundai Mufasa оснащен интеллектуальными функциями
        помощи водителю. Система безопасности обеспечивает всестороннее удобство вождения и
        безопасность водителя, пассажиров и других участников дорожного движения.
      </p>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Центрирование полосы LFA.</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Удобная функция, которая помогает оставаться автомобилю в центре полосы во время
            движения.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[360px]">
        <img src={safety1} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Центрирование полосы LFA</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Удобная функция, которая помогает оставаться автомобилю в центре полосы во время
            движения.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Система предотвращения фронтального столкновения (FCA)</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Данная система контролирует обстановку вокруг автомобиля и при необходимости предупреждает
          о риске столкновения. Если после этого риск столкновения возрастает (например, впереди
          идущий автомобиль внезапно тормозит или впереди возникает другое транспортное средство,
          пешеход или велосипед), система автоматически применяет экстренное торможение.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[270px]">
        <img src={safety2} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">
            Система предотвращения столкновения сбоку при выезде с парковки задним ходом (RCCA).
          </h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Во время движения задним ходом предупреждает о приближении транспортного средства,
            следующего в поперечном направлении. В случае необходимости активируется экстренное
            торможение.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[270px]">
        <img src={safety3} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">
            Система предотвращения столкновения сбоку при выезде с парковки задним ходом (RCCA).
          </h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Во время движения задним ходом предупреждает о приближении транспортного средства,
            следующего в поперечном направлении. В случае необходимости активируется экстренное
            торможение.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Ассистент удержания автомобиля в полосе движения (LKA).</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Дополнен функцией удержания автомобиля в центре полосы движения (LFA). Помогает удерживать
          автомобиль по центру полосы, следя с помощью встроенной камеры за линиями дорожной
          разметки.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety4} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">
            Система предотвращения столкновений с автомобилем в слепой зоне (BCA).
          </h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            С помощью радаров, встроенных в заднюю часть автомобиля, следит за обстановкой в области
            «слепых» зон. Это помогает водителю избежать аварийной ситуации при маневрировании в
            дорожном потоке.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">
            Система предотвращения столкновений с автомобилем в слепой зоне (BCA).
          </h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            С помощью радаров, встроенных в заднюю часть автомобиля, следит за обстановкой в области
            «слепых» зон. Это помогает водителю избежать аварийной ситуации при маневрировании в
            дорожном потоке.
          </p>
        </div>
      )}
    </div>
  );
};
