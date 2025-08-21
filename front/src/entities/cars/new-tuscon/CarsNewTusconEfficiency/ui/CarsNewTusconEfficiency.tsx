import { FC, useState } from 'react';

import highlight from '~shared/assets/new-tuscon/eff.jpg';

export interface CarsNewTusconEfficiencyProps {}

export const CarsNewTusconEfficiency: FC<CarsNewTusconEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Готов к дороге.</h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        Оборудованный силовыми агрегатами нового поколения, новый TUCSON обеспечивает первоклассную
        производительность и оптимальные решения для различных условий вождения.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="new_tuscon" className="w-full h-full" />
      </div>
    </div>
  );
};
