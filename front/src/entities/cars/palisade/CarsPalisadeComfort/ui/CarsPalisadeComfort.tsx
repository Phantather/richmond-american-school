import { FC } from 'react';

import comfort1 from '~shared/assets/palisade/comfort1.jpg';
import comfort2 from '~shared/assets/palisade/comfort2.jpg';
import comfort3 from '~shared/assets/palisade/comfort3.jpg';
import comfort4 from '~shared/assets/palisade/comfort4.jpg';
import comfort5 from '~shared/assets/palisade/comfort5.jpg';
import comfort6 from '~shared/assets/palisade/comfort6.jpg';
import comfort7 from '~shared/assets/palisade/comfort7.jpg';
import comfort8 from '~shared/assets/palisade/comfort8.jpg';
import comfort9 from '~shared/assets/palisade/comfort9.jpg';
import comfort10 from '~shared/assets/palisade/comfort10.jpg';
import comfort11 from '~shared/assets/palisade/comfort11.jpg';
import comfort12 from '~shared/assets/palisade/comfort12.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsPalisadeComfortProps {}

export const CarsPalisadeComfort: FC<CarsPalisadeComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Комфорт
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        В центре общего внимания находится цифровая панель приборов Supervision диагональю 12,3
        дюйма, гарантирующая четкое и высококачественное отображение графики и текста. Другой
        12,3-дюймовый дисплей поддерживает функцию разделения экрана, благодаря которой вы сможете
        проверять маршрут и направление движения, просматривать информацию о проигрываемой
        музыке/радио и выполнять многие другие операции одновременно. Чтобы пользоваться любимыми
        приложениями в дороге, подсоедините ваш смартфон к автомобилю.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort1} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Вентиляция и подогрев передних сидений</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort2} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Вентиляция и подогрев передних сидений</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Складывание спинок второго ряда</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort3} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Проекция показаний приборов на лобовое стекло</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort4} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Проекция показаний приборов на лобовое стекло</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Беспроводная зарядка для смартфонов</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort5} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Система обзора слепых зон</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort6} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Система обзора слепых зон</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Монитор кругового обзора (SVM)</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort7} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">
            Полностью автоматическая трехзонная система кондиционирования
          </h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort8} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">
            Полностью автоматическая трехзонная система кондиционирования
          </h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Умная система багажника</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort9} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Интегрированная система памяти</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort10} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Интегрированная система памяти</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">
          Водительское сиденье с электроприводом регулировки в 10 направлениях
        </h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort11} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">USB-порты для зарядки</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort12} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">USB-порты для зарядки</h3>
        </div>
      )}
    </div>
  );
};
