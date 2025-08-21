import { FC } from 'react';

import safety1 from '~shared/assets/palisade/safety1.jpg';
import safety2 from '~shared/assets/palisade/safety2.jpg';
import safety3 from '~shared/assets/palisade/safety3.jpg';
import safety4 from '~shared/assets/palisade/safety4.jpg';
import safety5 from '~shared/assets/palisade/safety5.jpg';
import safety6 from '~shared/assets/palisade/safety6.jpg';
import safety7 from '~shared/assets/palisade/safety7.jpg';

import { useWindowInnerWidth } from '~shared/ui';
import highlight from '~shared/assets/palisade/eff.jpg';
export interface CarsPalisadeSafetyProps {}

export const CarsPalisadeSafety: FC<CarsPalisadeSafetyProps> = () => {
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  pt-[60px]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center">
        Безопасность
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center m-[30px_40px]">
        Комплекс передовых систем помощи водителю, устанавливаемый на модель PALISADE, дополнен
        новыми, еще более мощными функциями для защиты вас и ваших близких. Система экстренного
        торможения для предотвращения вторичных столкновений снижает скорость автомобиля, чтобы
        предотвратить возможные удары после первого столкновения, а функция предупреждения о
        присутствии пассажиров на задних сиденьях гарантирует, что младшие члены вашей семьи
        благополучно доберутся до места назначения. При движении задним ходом в темное время суток
        загораются направляющие огни, предупреждающие пешеходов.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={safety1} alt="palisade" className="w-full h-full" />
      </div>

      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[48px] font-medium text-center mt-[40px]">
        7 подушек безопасности
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4  text-center m-[30px_40px]">
        Фронтальные подушки для защиты водителя и переднего пассажира, передние боковые подушки
        безопасности, подушки безопасности для коленей водителя и шторки безопасности для защиты при
        опрокидывании.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  mt-[40px] max-h-[540px]">
        <img src={safety2} alt="palisade" className="w-full h-full" />
      </div>

      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">
            Направляющие огни, предупреждающие о движении задним ходом
          </h3>
          {/*<p className="text-[16px] font-normal leading-[24px] mt-[30px]">*/}
          {/*  Вся необходимая информация проецируется на лобовое стекло, позволяя вам сосредоточиться*/}
          {/*  на вождении, не отвлекаясь ни на что.*/}
          {/*</p>*/}
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety3} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">
            Направляющие огни, предупреждающие о движении задним ходом
          </h3>
          {/*<p className="text-[16px] font-normal leading-[24px] mt-[30px]">*/}
          {/*  Вся необходимая информация проецируется на лобовое стекло, позволяя вам сосредоточиться*/}
          {/*  на вождении, не отвлекаясь ни на что.*/}
          {/*</p>*/}
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px] sm:p-[24px_0]">
        <h3 className="text-[30px]">Multi-Collision Brake (MCB) System</h3>
        {/*<p className="text-[16px] font-normal leading-[24px] mt-[30px]">*/}
        {/*  Система оповещения о пассажирах сзади обнаруживает присутствие пассажира, оставшегося на*/}
        {/*  заднем сиденье после выключения двигателя.*/}
        {/*</p>*/}
      </div>
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety4} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth <= 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px_0]">
          <h3 className="text-[30px]">Rear Occupant Alert (ROA)</h3>
          {/*<p className="text-[16px] font-normal leading-[24px] mt-[30px]">*/}
          {/*  SANTA FE оснащен 6 подушками безопасности, чтобы обеспечить безопасность всех, кто*/}
          {/*  находится в автомобиле.*/}
          {/*</p>*/}
        </div>
      )}
      <div className="col-span-6 sm:col-span-8 xs:col-span-4  max-h-[360px]">
        <img src={safety5} alt="palisade" className="w-full h-full" />
      </div>
      {windowWidth > 768 && (
        <div className="col-span-6 sm:col-span-8 xs:col-span-4  p-[24px]">
          <h3 className="text-[30px]">Rear Occupant Alert (ROA)</h3>
          {/*<p className="text-[16px] font-normal leading-[24px] mt-[30px]">*/}
          {/*  Данная система в режиме реального времени выводит изображение области вокруг автомобиля*/}
          {/*  на дисплей, упрощая процесс парковки.*/}
          {/*</p>*/}
        </div>
      )}

      <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-x-6 gap-y-10 m-[80px_0_0]">
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety6} alt="palisade" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Передний и задний парковочные радары (PDW)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Предупреждают водителя во время заезда на парковку или выезда с парковки, предотвращая
            столкновение с пешеходами или объектами. Информируют водителя о расстоянии до ближайших
            объектов при движении на низких скоростях.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-8 xs:col-span-4 ">
          <img src={safety7} alt="palisade" className="w-full max-h-[360px]" />
          <h3 className="text-[20px]">Система помощи при безопасном выходе (SEA)</h3>
          <p className="text-[16px] font-normal leading-[24px] mt-5">
            Когда пассажир открывает дверь, чтобы выйти из транспортного средства после остановки,
            при обнаружении приближающегося транспортного средства с задней стороны выдается
            предупреждение. Это также помогает держать заднюю дверь закрытой с помощью электронного
            замка от детей.
          </p>
        </div>
      </div>
    </div>
  );
};
