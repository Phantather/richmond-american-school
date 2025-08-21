import { FC } from 'react';

import safety1 from '~shared/assets/sonata/sonata-safety-1.jpg';
import safety2 from '~shared/assets/sonata/sonata-safety-2.jpg';
import safety3 from '~shared/assets/sonata/sonata-safety-3.jpg';
import safety4 from '~shared/assets/sonata/sonata-safety-4.png';
import safety5 from '~shared/assets/sonata/sonata-safety-5.png';
import safety6 from '~shared/assets/sonata/sonata-safety-6.png';
import safety7 from '~shared/assets/sonata/sonata-safety-7.png';
import safety8 from '~shared/assets/sonata/sonata-safety-8.png';
import safety9 from '~shared/assets/sonata/sonata-safety-9.png';
import { useWindowInnerWidth } from '~shared/ui';

export interface CarsSonataSafetyProps {}

export const CarsSonataSafety: FC<CarsSonataSafetyProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mb-[40px]">
        Безопасное вождение с новой SONATA
      </h2>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Система оповещения о пассажирах сзади (ROA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Закончив свою поездку, система ROA напомнит Вам проверить задние сиденья.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety1} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Система оповещения о пассажирах сзади (ROA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Закончив свою поездку, система ROA напомнит Вам проверить задние сиденья.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Безопасные электрические стеклоподъемники</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Электрические стеклоподъемники оснащены датчиками безопасности. Если при автоматическом
          закрытии окна будет обнаружено препятствие, окно остановится и опустится примерно на 30
          см, давая возможность удалить объект.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety2} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Система кругового обзора</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Данная система в режиме реального времени выводит изображение области вокруг автомобиля
            на дисплей, упрощая процесс парковки.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety3} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Система кругового обзора</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Данная система в режиме реального времени выводит изображение области вокруг автомобиля
            на дисплей, упрощая процесс парковки.
          </p>
        </div>
      )}

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center m-[40px_0]">
        Передовые технологии безопасности
      </h2>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-x-6 gap-y-10">
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety4} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Система предотвращения фронтального столкновения (FCA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Данная система контролирует обстановку вокруг автомобиля и при необходимости
            предупреждает о риске столкновения. Если после этого риск столкновения возрастает
            (например, впереди идущий автомобиль внезапно тормозит или впереди возникает другое
            транспортное средство, пешеход или велосипед), система автоматически применяет
            экстренное торможение.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety5} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Изменения к лучшему</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Если система распознает угрозу столкновения справа или слева при движении задним ходом,
            она подает предупреждение. Если после этого риск столкновения возрастает, применяется
            экстренное торможение.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety6} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Система предотвращения столкновений в слепых зонах (BCA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Система предупреждает о риске столкновения с транспортным средством, находящимся сбоку
            или позади, при перестроении. Если при выезде с параллельной парковки система распознает
            риск столкновения с транспортным средством, находящимся сбоку или позади, автоматически
            применяется экстренное торможение.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety7} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Ассистент удержании полосы движения (LKA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Система использует переднюю многофункциональную камеру для наблюдения за линиями дороги.
            В случае непреднамеренного съезда с полосы движения он предупреждает вас и может вернуть
            автомобиль на исходную.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety8} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Интеллектуальный круиз-контроль</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Система помогает водителю поддерживать безопасную скорость при движении по магистрали
            или обычной дороге с учетом дорожных условий.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety9} alt="elantra" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">
            Ассистент дистанционной интеллектуальной помощи при парковке (RSPA)
          </h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Система дистанционной интеллектуальной помощи при парковке Sonata позволяет заезжать или
            выезжать из тесных парковочных мест без необходимости находиться в автомобиле. Вы можете
            дистанционно управлять автомобилем для движения вперед или назад с помощью брелока,
            находясь вне автомобиля.
          </p>
        </div>
      </div>
    </div>
  );
};
