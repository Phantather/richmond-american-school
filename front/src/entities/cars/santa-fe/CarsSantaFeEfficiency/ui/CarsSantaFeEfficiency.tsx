import { FC, useState } from 'react';

import highlight from '~shared/assets/santa-fe/efff.jpg';

export interface CarsSantaFeEfficiencyProps {}

export const CarsSantaFeEfficiency: FC<CarsSantaFeEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Уверенность в движении</h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        <b>HTRAC</b> <br /> Система управления полным приводом HTRAC в сочетании c функцией выбора
        режимов движения Multi Terrain Control гарантируют Вам абсолютную уверенность на дороге.
        Непрерывно распределяя мощность на передние и задние колеса, система обеспечивает
        необходимую устойчивость автомобиля и на поворотах и на скользкой дороге. Двигайтесь
        безопасно и плавно даже в дождь или снег.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
