import { FC, useState } from 'react';

import highlight1 from '~shared/assets/sonata/sonata-2023-perfomance.png';
import highlight2 from '~shared/assets/sonata/sonata-2023-perfomance-2.jpg';

export interface CarsSonataEfficiencyProps {}

export const CarsSonataEfficiency: FC<CarsSonataEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Производительность</h2>
      {/*<p className="col-span-12 text-center m-[30px_40px]">*/}
      {/*  Платформа новой ELANTRA 3-го поколения обеспечивает маневренность и устойчивость. Автомобиль*/}
      {/*  оснащен экономичным двигателем, обеспечивающим оптимальные ходовые качества, где бы вы ни*/}
      {/*  находились.*/}
      {/*</p>*/}
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight1} alt="elantra" className="w-full h-full" />
      </div>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight2} alt="elantra" className="w-full h-full" />
      </div>
    </div>
  );
};
