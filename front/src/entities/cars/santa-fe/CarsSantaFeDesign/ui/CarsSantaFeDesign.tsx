import { FC } from 'react';

import design1 from '~shared/assets/santa-fe/design1.jpg';
import design2 from '~shared/assets/santa-fe/design2.png';
import design3 from '~shared/assets/santa-fe/design3.jpg';
import design4 from '~shared/assets/santa-fe/design4.jpg';
import design5 from '~shared/assets/santa-fe/design5.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import { CarsSantaFeDesignViewer } from '~entities/cars/santa-fe';

export const CarsSantaFeDesign: FC = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 pt-[60px]">
      <CarsSantaFeDesignViewer />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[74px] text-center mb-[28px]">
          Экстерьер <br /> Изысканный и надежный
        </h2>
        <div className="h-[540px] sm:h-[400px]">
          <img src={design1} alt="elantra design" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Вместительный и практичный
        </h2>
        <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
          <b>Увеличенная высота открытия багажника.</b> SANTA FE выходит за рамки обычного.
          Просторный багажник был разработан таким образом, чтобы лучше соответствовать потребностям
          современных водителей. Широкая задняя дверь открывает перед вами пространство, похожее на
          террасу, которое позволяет наслаждаться жизнью на свежем воздухе - комфортно и без усилий.
        </p>
        <div className="h-[540px] sm:max-h-[400px]">
          <img src={design2} alt="elantra design" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex flex-col items-center">
        <h2 className="text-[48px] font-medium mt-[80px] text-center mb-[28px]">
          Стильный и выразительный
        </h2>
        <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center my-[30px]">
          <b>Идеальный баланс между городской жизнью и отдыхом на природе.</b> Новый SANTA FE
          выглядит надежным и стильным с любого ракурса. Он привлекает внимание выразительным
          рисунком Н-образных фонарей, которые придают штрихи уникальности смелому дизайну кузова.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 max-h-[540px] sm:max-h-[400px]">
        <img src={design3} alt="elantra" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 py-[24px]">
          <h3 className="text-[30px]">Панорамная крыша с люком</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design4} alt="elantra" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px]">
          <h3 className="text-[30px]">Панорамная крыша с люком</h3>
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Вспомогательная ручка скрытого типа</h3>
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4 max-h-[300px] sm:max-h-[400px]">
        <img src={design5} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
