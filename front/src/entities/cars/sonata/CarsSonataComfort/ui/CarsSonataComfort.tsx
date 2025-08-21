import { FC } from 'react';

import comfort1 from '~shared/assets/sonata/comfort-1.png';
import comfort2 from '~shared/assets/sonata/comfort-2.jpg';
import comfort3 from '~shared/assets/sonata/comfort-3.jpg';
import comfort4 from '~shared/assets/sonata/comfort-4.jpg';
import comfort5 from '~shared/assets/sonata/comfort-5.jpg';
import { useWindowInnerWidth } from '~shared/ui';

export interface CarsSonataComfortProps {}

export const CarsSonataComfort: FC<CarsSonataComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Автоматическое открытие/закрытие багажника
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        <b>Интеллектуальный электропривод багажника.</b> <br />
        Повышает комфорт открытия/закрытия двери багажника. Бесконтактное открытие двери багажника
        активируется при обнаружении электронного ключа сзади автомобиля в течение 3х секунд.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort1} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[80px]">
        Комфортное сиденье для релаксации
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        <b>Достигните максимального комфорта одним нажатием кнопки</b> <br />
        Отрегулируйте положение пассажира до положения невесомости, управляя наклоном спинки сиденья
        и подушки.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort2} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Внимание на дороге</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            <b>Проекционный дисплей.</b> Повысьте качество вождения с помощью новой темы
            графического интерфейса, отображающей продвинутую графику на лобовом стекле. Сводя к
            минимуму отвлекающие факторы, он повышает удобство и осведомленность о ситуации на
            дороге.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort3} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Внимание на дороге</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            <b>Проекционный дисплей.</b> Повысьте качество вождения с помощью новой темы
            графического интерфейса, отображающей продвинутую графику на лобовом стекле. Сводя к
            минимуму отвлекающие факторы, он повышает удобство и осведомленность о ситуации на
            дороге.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Потрясающее качество звука</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          <b>Аудиосистема премиум-класса Bose.</b>
          Аудиосистема Bose Premium с 12 динамиками теперь оснащена новой технологией CenterPoint
          360, обеспечивающей насыщенное и захватывающее звучание.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Беспроводная зарядкае</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Беспроводное зарядное устройство на центральной консоли позволяет легко заряжать
            смартфоны, а большое количество портов USB Type-C позволяет подключать различные
            устройства.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort5} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Беспроводная зарядкае</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Беспроводное зарядное устройство на центральной консоли позволяет легко заряжать
            смартфоны, а большое количество портов USB Type-C позволяет подключать различные
            устройства.
          </p>
        </div>
      )}
    </div>
  );
};
