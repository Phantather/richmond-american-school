import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

import comfort1 from '~shared/assets/santa-fe/comfort1.jpg';
import comfort2 from '~shared/assets/santa-fe/comfort2.jpg';
import comfort3 from '~shared/assets/santa-fe/comfort3.jpg';
import comfort4 from '~shared/assets/santa-fe/comfort4.jpg';
import comfort5 from '~shared/assets/santa-fe/comfort5.jpg';
import comfort6 from '~shared/assets/santa-fe/comfort6.jpg';
import comfort7 from '~shared/assets/santa-fe/comfort7.jpg';
import comfort8 from '~shared/assets/santa-fe/comfort8.png';
import comfort9 from '~shared/assets/santa-fe/comfort9.jpg';
import comfort10 from '~shared/assets/santa-fe/comfrot10.jpg';
import comfort11 from '~shared/assets/santa-fe/design2.png';
import comfort12 from '~shared/assets/santa-fe/comfort11.jpg';

import { useWindowInnerWidth } from '~shared/ui';

export interface CarsSantaFeComfortProps {}

export const CarsSantaFeComfort: FC<CarsSantaFeComfortProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        Дополнительные возможности комфорта
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Гибкие возможности конфигурации салона— от 5-местного до 7-местного. Спинки сидений второго
        и третьего рядов откидываются, что позволяет увеличить объем багажного отделения.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort3} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center mt-[80px]">
        Отделение для УФ-стерилизации
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        <b>Отсек в центральной консоли с функцией дезинфекции вещей ультрафиолетом.</b> Первый в
        своем роде отсек для дезинфекции расположен в верхней части пассажирского бардачка. Он
        позволяет легко стерилизовать часто используемые предметы такие как мобильные телефоны,
        кошельки, очки и т. д., обеспечивая чистоту и гигиену в автомобиле.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 mt-[40px] max-h-[540px]">
        <img src={comfort4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Автоматический климат-контроль</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Двухзонный климат-контроль предусматривает индивидуальные настройки для водителя и
            пассажира переднего ряда. Также имеются автоматическая система защиты от запотевания и
            функция обдува.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort6} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Автоматический климат-контроль</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Двухзонный климат-контроль предусматривает индивидуальные настройки для водителя и
            пассажира переднего ряда. Также имеются автоматическая система защиты от запотевания и
            функция обдува.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Двойное удобство.я</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Двойная беспроводная зарядка Ваш телефон не разрядится во время путешествия, а собственная
          система охлаждения позволит не переживать за температурный режим гаджета.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort7} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Двустороннее мультиконсольное пространство для хранения</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Чтобы в поездках было еще комфортнее, автомобиль оснащен тщательно продуманным
            пространством для хранения вещей, доступным как для передних, так и для задних
            пассажиров.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort8} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Двустороннее мультиконсольное пространство для хранения</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Чтобы в поездках было еще комфортнее, автомобиль оснащен тщательно продуманным
            пространством для хранения вещей, доступным как для передних, так и для задних
            пассажиров.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Современные технологии для современного водителя.</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Наслаждайтесь новыми технологиями у вас под рукой — от самых последних обновлений
          программного обеспечения до управления автомобилем без ключей.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort9} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Динамик BOSE 12</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Усовершенствованная аудиосистема Bose Premium с 12 динамиками и новой технологией
            CenterPoint 360 была разработана инженерами Bose для обеспечения насыщенного и
            захватывающего звука.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort10} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Динамик BOSE 12</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Усовершенствованная аудиосистема Bose Premium с 12 динамиками и новой технологией
            CenterPoint 360 была разработана инженерами Bose для обеспечения насыщенного и
            захватывающего звука.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Интеллектуальный электропривод багажника.</h3>
        <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
          Повышает комфорт открытия/закрытия двери багажника. Бесконтактное открытие двери багажника
          активируется при обнаружении электронного ключа сзади автомобиля в течение 3х секунд.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort11} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px_0]">
          <h3 className="text-[30px]">Сиденья для релаксации</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Сиденья для релаксации в первом ряду с подставкой для ног позволяют пассажирам
            откидываться в удобное положение.
          </p>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={comfort12} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Сиденья для релаксации</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-[30px]">
            Сиденья для релаксации в первом ряду с подставкой для ног позволяют пассажирам
            откидываться в удобное положение.
          </p>
        </div>
      )}
    </div>
  );
};
