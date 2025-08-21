import { FC } from 'react';

import safety1 from '~shared/assets/staria/safety1.jpg';
import safety2 from '~shared/assets/staria/safety2.jpg';
import safety3 from '~shared/assets/staria/safety3.jpg';
import safety4 from '~shared/assets/staria/safety4.jpg';
import safety5 from '~shared/assets/staria/safety5.jpg';
import safety6 from '~shared/assets/staria/safety6.jpg';
import safety7 from '~shared/assets/staria/safety7.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import highlight from '~shared/assets/palisade/eff.jpg';
export interface CarsStariaSafetyProps {}

export const CarsStariaSafety: FC<CarsStariaSafetyProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center">
        Hyundai SmartSense
      </h2>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={safety1} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center">
        Система предупреждения фронтальных столкновений (FCA)
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center m-[30px_40px]">
        В случае определения риска столкновения с автомобилем, пешеходом или велосипедом система
        предупреждения фронтальных столкновений заранее предупредит водителя и при необходимости
        самостоятельно применит торможение. Система также определяет приближение транспортных
        средств на перекрестках, помогая совершать поворот налево.
      </p>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Ассистент следования полосы движения LFA</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Передняя камера отслеживает линии дорожной разметки и края дороги, помогая водителю
            оставаться в пределах выбранной полосы движения. В случае непреднамеренного отклонения
            от полосы движения (или дороги) система выдает визуальное и звуковое предупреждения и
            прикладывает корректирующее рулевое усилие, чтобы предотвратить выезд автомобиля из
            занимаемой полосы.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety2} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Ассистент следования полосы движения LFA</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Передняя камера отслеживает линии дорожной разметки и края дороги, помогая водителю
            оставаться в пределах выбранной полосы движения. В случае непреднамеренного отклонения
            от полосы движения (или дороги) система выдает визуальное и звуковое предупреждения и
            прикладывает корректирующее рулевое усилие, чтобы предотвратить выезд автомобиля из
            занимаемой полосы.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Система предотвращения столкновений в слепых зонах (BCA)</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Если после включения указателя поворота для перестроения на другую полосу движения
          существует вероятность столкновения с автомобилем, находящимся сзади сбоку, система
          предупреждает водителя. Если после этого риск столкновения остается или возрастает,
          система автоматически применяет корректирующие действия, чтобы избежать столкновения. Если
          при выезде с места параллельной парковки возникает риск столкновения с транспортным
          средством, движущимся сзади сбоку, система автоматически применяет экстренное торможение.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety3} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Ассистент безопасного выхода (SEA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            При обнаружении приближающегося автомобиля сзади сбоку в момент открывания двери
            пассажиром или водителем система выдает предупреждение. Система также не позволит
            открыть заднюю дверь в момент использования сдвижной двери.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Ассистент безопасного выхода (SEA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            При обнаружении приближающегося автомобиля сзади сбоку в момент открывания двери
            пассажиром или водителем система выдает предупреждение. Система также не позволит
            открыть заднюю дверь в момент использования сдвижной двери.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Интеллектуальный круиз-контроль (SCC)</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Интеллектуальный круиз-контроль помогает сохранять дистанцию за идущим впереди автомобилем
          и двигаться со скоростью, заданной водителем.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety5} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Ассистент удержания в полосе (LFA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Передняя камера определяет линии разметки и следит за тем, чтобы автомобиль находился в
            безопасном положении посередине полосы движения.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety6} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Ассистент удержания в полосе (LFA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Передняя камера определяет линии разметки и следит за тем, чтобы автомобиль находился в
            безопасном положении посередине полосы движения.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">3-точечный ремень безопасности</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Теперь все сиденья оснащены 3-точечными ремнями безопасности и регулируемыми
          подголовниками. Для дополнительной защиты водителя и пассажира на переднем ряду
          предусмотрены 2 передние и 2 боковые подушки безопасности, а пассажирам задних рядов
          безопасность обеспечивают двойные боковые шторки безопасности.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety7} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
