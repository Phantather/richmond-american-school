import { FC, useState } from 'react';

import highlight from '~shared/assets/elantra/eng-gr-1 1.png';

export interface CarsElantraEfficiencyProps {}

export const CarsElantraEfficiency: FC<CarsElantraEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Для амбициозных и смелых</h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        Платформа новой ELANTRA 3-го поколения обеспечивает маневренность и устойчивость. Автомобиль
        оснащен экономичным двигателем, обеспечивающим оптимальные ходовые качества, где бы вы ни
        находились.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
