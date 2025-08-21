import { FC } from 'react';

import design1 from '~shared/assets/elantra/elantra-design-1.png';
import design2 from '~shared/assets/elantra/elantra-design-2.png';
import design3 from '~shared/assets/elantra/elantra-design-3.png';
import design4 from '~shared/assets/elantra/elantra-design-4.png';
import design5 from '~shared/assets/elantra/elantra-design-5.png';
import design6 from '~shared/assets/elantra/elantra-design-6.png';
import { CarsElantraDesignViewer } from '~entities/cars';
import { useWindowInnerWidth } from '~shared/ui';

export const CarsElantraDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsElantraDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px]">Совершенно новая решетка</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          Стереоскопический дизайн Parametric Jewel подчеркивает глубину передней решетки, делая ее
          напоминающей драгоценные камни ромбовидной огранки, смелые и удлиненные передние фары
          вместе придают новой ELANTRA спортивный вид.
        </p>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design1} alt="elantra design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px]">Новый взгляд со стороны</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          Три секции, образующиеся из трех смелых линий, пересекающихся в одной точке. Создавая три
          разных цвета.
        </p>
        <div className="h-[540px] sm:max-h-[400px]">
          <img src={design2} alt="elantra design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px]">Задние фары</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          Острый спойлер на багажнике и задние фары, ассоциирующиеся с Hyundai характерным
          H-образным дизайном, создают высокотехнологичный, футуристический вид сзади.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design3} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Самый чувственный</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новый технологичный дизайн интерьера и экологичные материалы. Создают более изысканную и
            утонченную атмосферу.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Самый чувственный</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Новый технологичный дизайн интерьера и экологичные материалы. Создают более изысканную и
            утонченную атмосферу.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Иммерсивный интерфейс</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Полноцветный кластерный дисплей и навигационный экран (оба с диагональю 10,25 дюйма)
          обеспечивают полное погружение в пространство и плавный интегрированный панорамный вид,
          наклоненный на 10 градусов к водителю для облегчения управления и ощущения
          высокотехнологичности.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Атмосферная подсветка</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Атмосферная подсветка дает Вам возможность выбрать освещение под Ваше настроение
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design6} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
          <h3 className="text-[30px]">Атмосферная подсветка</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Атмосферная подсветка дает Вам возможность выбрать освещение под Ваше настроение
          </p>
        </div>
      )}
    </div>
  );
};
