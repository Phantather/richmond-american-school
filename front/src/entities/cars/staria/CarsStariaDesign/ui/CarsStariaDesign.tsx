import { FC } from 'react';

import design1 from '~shared/assets/staria/design1.jpg';
import design2 from '~shared/assets/staria/design2.jpg';
import design3 from '~shared/assets/staria/design3.jpg';
import design4 from '~shared/assets/staria/design4.jpg';
import design5 from '~shared/assets/staria/design5.jpg';
import design6 from '~shared/assets/staria/design6.jpg';
import design7 from '~shared/assets/staria/design7.jpg';
import design8 from '~shared/assets/staria/design8.jpg';
import design9 from '~shared/assets/staria/design9.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import { CarsStariaDesignViewer } from '~entities/cars/staria/CarsStariaDesign';

export const CarsStariaDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsStariaDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px] text-center mb-[28px]">
          Новое слово в автомобильном дизайне.
        </h2>
        <p className="text-center my-[30px]">
          STARIA LUXE открывает новую главу в истории многофункционального транспорта. Невозможно
          оторвать взгляд от футуристичного дизайна, в основе которого — концепция роскошного
          интерьера для отдыха. Футуристичный силуэт, а также простота и элегантность стиля хай-тек
          во внешнем облике STARIA олицетворяют новейшие технологии, делающие автомобиль более
          удобным, безопасным и комфортным.
        </p>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design1} alt="elantra design" className="w-full h-full object-cover" />
        </div>
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">
            Параметрические пиксельные фонари (задние светодиодные фонари комбинированного типа) /
            хромированная окантовка
          </h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design2} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">
            Параметрические пиксельные фонари (задние светодиодные фонари комбинированного типа) /
            хромированная окантовка
          </h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">18-дюймовые легкосплавные диски</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design3} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Полностью светодиодные фары</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Полностью светодиодные фары</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Хромированная отделка бампера</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="elantra" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          64-цветная контурная подсветка
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design6} alt="elantra" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center">7-местный LUXE</h2>
        <p className="text-center my-[30px]">
          В комплектации LUXE сиденья имеют режим релаксации, позволяющий по-другому распределить
          нагрузку. Это создает ощущение комфорта, как если бы вы находились в любимом кресле у себя
          дома.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design7} alt="elantra" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center">
          Сиденья с функцией релаксации в комплектации LUXE
        </h2>
        <p className="text-center my-[30px]">
          Нажатием кнопки кресло переводится в положение, в котором вес пассажира распределяется
          оптимальным образом, за счет чего возникает чувство легкости и невесомости. Вы ощутите
          комфорт в любых погодных условиях, поскольку сиденья имеют 3 уровня подогрева и функцию
          вентиляции. Вы можете отрегулировать кресло, выбрав одно из 2 положений спинки, 2
          положений сиденья и 4 положений подушки для ног
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px] mb-10">
        <img src={design8} alt="elantra" className="w-full h-full" />
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design9} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
