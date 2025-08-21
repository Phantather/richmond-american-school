import { FC, useState } from 'react';

import highlight from '~shared/assets/staria/eff1.jpg';
import highlight2 from '~shared/assets/staria/eff2.png';

export interface CarsStariaEfficiencyProps {}

export const CarsStariaEfficiency: FC<CarsStariaEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Smartstream G3.5</h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        Максимальная мощность — 249 л. с. при 6400 об/мин, максимальный крутящий момент — 33,8 кг·м
        при 5000 об/мин.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="elantra" className="w-full h-full" />
      </div>
      <h2 className="col-span-12 text-[48px] font-medium text-center mt-20">
        Дизельный двигатель 2,2 CRDi
      </h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        Максимальная мощность — 177 л. с. при 3800 об/мин, максимальный крутящий момент — 44,0 кг·м
        при 1500~2500 об/мин.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
