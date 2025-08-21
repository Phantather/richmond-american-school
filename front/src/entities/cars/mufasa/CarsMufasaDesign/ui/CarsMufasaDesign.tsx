import { FC } from 'react';

import design1 from '~shared/assets/mufasa/design1.png';
import design2 from '~shared/assets/mufasa/design2.png';
import design3 from '~shared/assets/mufasa/design3.png';
import design4 from '~shared/assets/mufasa/design4.png';
import design5 from '~shared/assets/mufasa/design5.png';
import design6 from '~shared/assets/mufasa/design6.png';
import design7 from '~shared/assets/mufasa/design7.png';
import design8 from '~shared/assets/mufasa/design8.png';
import design9 from '~shared/assets/mufasa/design9.png';
import design10 from '~shared/assets/mufasa/design10.png';
import design11 from '~shared/assets/mufasa/design11.png';
import design12 from '~shared/assets/mufasa/design12.png';
import design13 from '~shared/assets/mufasa/design13.png';
import design14 from '~shared/assets/mufasa/design14.png';
import design15 from '~shared/assets/mufasa/design15.png';
import design16 from '~shared/assets/mufasa/design16.png';

import { useWindowInnerWidth } from '~shared/ui';
import { CarsStariaDesignViewer } from '~entities/cars/staria/CarsStariaDesign';

export const CarsMufasaDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <>
      <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
          <h2 className="text-[48px] font-medium text-center mb-[28px]">Экстерьер</h2>
          <h3 className="text-[38px] font-medium text-center mb-[28px]">
            Внешний вид: Сильный и крепкий
          </h3>
          <p className="text-center my-[30px]">
            В основе дизайна этой модели лежит концепция «Чувственная спортивность»: сочетание
            мощной и выносливой формы с прочным, но элегантным корпусом. Ценности и требования
            современного человека к автомобилю идеально выражены в строгом чувстве пропорций,
            структуре и технологиях Hyundai MUFASA.
          </p>
        </div>
        <h2 className="text-[38px] font-medium text-center mb-[28px] col-span-12 sm:col-span-8 xs:col-span-4">
          Вид спереди:
        </h2>
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[30px]">
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design1} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">
              Параметрическая передняя решетка Diamond.
            </h3>
            <p>Динамическая эстетика современного дизайна</p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design2} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">Спортивный передний бампер.</h3>
            <p>Параметрические формы, подчеркивающие трехмерность и высококачественную отделку</p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design3} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">Вертикальные светодиодные фары.</h3>
          </div>
        </div>

        <h2 className="text-[38px] font-medium text-center mt-[38px] mb-[28px] col-span-12 sm:col-span-8 xs:col-span-4">
          Вид сбоку:
        </h2>
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[30px]">
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design4} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">
              Трехмерные закрученные (3D) боковые линии
            </h3>
            <p>
              Боковой дизайн акцентирует горизонтальные линии и изящные изгибы, создавая эффект
              объемного изображения. Это идеально передает ощущение динамики, а сложные сочетания
              линий подчеркивают мощь и элегантность.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design5} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">Пятиспицевые диски</h3>
            <p>
              18-дюймовые диски обеспечивают высокий уровень комфорта 17-дюймовые колеса отличаются
              выразительным дизайном <br /> <br />
              *На изображении представлены 18-дюймовые диски.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design6} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">Расширенное треугольное окно</h3>
            <p>Больший размер, лучший обзор</p>
          </div>
        </div>

        <h2 className="text-[38px] font-medium text-center mt-[38px] mb-[28px] col-span-12 sm:col-span-8 xs:col-span-4">
          Вид сзади:
        </h2>
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[30px]">
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design7} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">Вместительный багажник</h3>
            <p>
              Благодаря продуманной компоновке пространства и возможности складывания задних
              сидений, объем багажного отделения значительно увеличивается, обеспечивая комфортную
              перевозку крупногабаритных вещей.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design8} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">
              Светодиодный комбинированный задний фонарь изогнутого типа
            </h3>
            <p>
              Эллиптическая форма задних фонарей создает эффект, напоминающий изображение Вселенной,
              похожей на складчатое пространство Млечного Пути, создавая впечатление масштаба и
              глубины, видимого на расстоянии светового года.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-4 xs:col-span-4">
            <img src={design9} alt="Front view" className="w-full h-[232px] object-cover" />
            <h3 className="text-[20px] font-medium my-[12px]">
              Вертикальный стоп-сигнал с высоким креплением
            </h3>
            <p>
              Обеспечивает дополнительную безопасность, четко сигнализируя другим водителям о ваших
              действиях на дороге.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
          <h2 className="text-[48px] font-medium text-center mb-[28px]">Интерьер</h2>
          <h3 className="text-[38px] font-medium text-center mb-[28px]">
            Интерьер: гениально и удобно
          </h3>
          <p className="text-center my-[30px]">
            Дизайн интерьера Multi Zone призван создавать индивидуальную «умную комнату» для
            водителя и его пассажиров. Салон содержит спортивное сиденье для водителя, стильное
            пассажирское кресло впереди и чрезвычайно удобное заднее пространство. Всего в
            автомобиле имеется 31 место для хранения вещей, чтобы удовлетворить даже самые строгие
            требования любого члена семьи.
          </p>
        </div>

        {windowWidth <= 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
            <h3 className="text-[30px]">
              Умный дизайн Multi Zone: разделение пространства салона для водителя, переднего и
              задних пассажиров.
            </h3>
          </div>
        )}
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design10} alt="palisade" className="w-full h-full" />
        </div>
        {windowWidth > 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
            <h3 className="text-[30px]">
              Умный дизайн Multi Zone: разделение пространства салона для водителя, переднего и
              задних пассажиров.
            </h3>
          </div>
        )}
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
          <h3 className="text-[30px]">Адаптивное пространство для водителя.</h3>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design11} alt="palisade" className="w-full h-full" />
        </div>

        {windowWidth <= 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
            <h3 className="text-[30px]">Беспроводная зарядка мобильного телефона</h3>
          </div>
        )}
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design12} alt="palisade" className="w-full h-full" />
        </div>
        {windowWidth > 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
            <h3 className="text-[30px]">Беспроводная зарядка мобильного телефона</h3>
          </div>
        )}

        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
          <h3 className="text-[30px]">
            Кожаное мультифункциональное рулевое колесо D-образной формы. Дизайн суперкар
          </h3>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design13} alt="palisade" className="w-full h-full" />
        </div>

        {windowWidth <= 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
            <h3 className="text-[30px]">Бардачки в дверях задних пассажиров.</h3>
          </div>
        )}
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design14} alt="palisade" className="w-full h-full" />
        </div>
        {windowWidth > 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
            <h3 className="text-[30px]">Бардачки в дверях задних пассажиров.</h3>
          </div>
        )}

        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
          <h3 className="text-[30px]">Регулируемый подголовник водительского кресла</h3>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design15} alt="palisade" className="w-full h-full" />
        </div>

        {windowWidth <= 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
            <h3 className="text-[30px]">
              Рычаг переключения режима передач с визуальной индикацией текущей передачи на ручке
            </h3>
          </div>
        )}
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
          <img src={design16} alt="palisade" className="w-full h-full" />
        </div>
        {windowWidth > 768 && (
          <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
            <h3 className="text-[30px]">
              Рычаг переключения режима передач с визуальной индикацией текущей передачи на ручке.
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
