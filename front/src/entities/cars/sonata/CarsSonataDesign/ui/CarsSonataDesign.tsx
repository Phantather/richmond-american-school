import { FC } from 'react';

import design1 from '~shared/assets/sonata/sonata-design-1.jpg';
import design2 from '~shared/assets/sonata/sonata-design-2.jpg';
import design3 from '~shared/assets/sonata/sonata-design-3.png';
import design4 from '~shared/assets/sonata/sonata-design-4.png';
import design5 from '~shared/assets/sonata/sonata-design-5.jpg';
import design6 from '~shared/assets/sonata/sonata-design-6.jpg';
import { CarsSonataDesignViewer } from '~entities/cars';
import { useWindowInnerWidth } from '~shared/ui';

export const CarsSonataDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsSonataDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px]">Футуризм в каждой детали</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          Встречайте первый в мире светодиодный боковой повторитель Fender.
        </p>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design1} alt="elantra design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px]">H-Light</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          Ассоциирующийся с Hyundai характерный H-образный дизайн, создаёт высокотехнологичный,
          футуристический вид сз
        </p>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design2} alt="elantra design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12  sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] sm:text-center">Новый опыт управления</h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          <b>Широкоформатный изогнутый дисплей.</b> <br /> Почувствуйте совершенное единство с нашим
          инновационным панорамным дисплеем Hyundai. Изогнутый дисплей передней панели объединяет в
          себе панель приборов и экран информационно-развлекательной системы.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px]">
        <img src={design3} alt="elantra" className="w-full h-full" />
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] sm:text-center">
          Настройте освещения под себя
        </h2>
        <p className="max-w-[778px] text-center left-[24px] m-[28px_40px]">
          <b>Амбиентная подсветка.</b> <br /> Улучшите свои впечатления от вождения с помощью
          амбиентной подсветки салона. Выбирайте из 64 вариантов цвета как для верхнего, так и для
          нижнего уровня.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px]">
        <img src={design4} alt="elantra" className="w-full h-full" />
      </div>

      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium m-[40px_0] sm:text-center">
          Настоящий комфорт при вождении
        </h2>
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Увеличенный подстаканникс</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Независимо от размера напитка, возьмите его с собой в поездку.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Увеличенный подстаканникс</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Независимо от размера напитка, возьмите его с собой в поездку.
          </p>
        </div>
      )}

      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Подлокотник</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Увеличенный подлокотник создает комфорт при длительных поездках, снимая лишнее напряжение
          с плечевого пояса.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design6} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
