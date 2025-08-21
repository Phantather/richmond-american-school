import { FC, useState } from 'react';

import highlight from '~shared/assets/palisade/eff.jpg';

export interface CarsPalisadeEfficiencyProps {}

export const CarsPalisadeEfficiency: FC<CarsPalisadeEfficiencyProps> = () => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Динамика</h2>
      <p className="col-span-12 text-center m-[30px_40px]">
        Нажимая на педаль для выполнения обгона, вы можете быть уверены в том, что вся мощность
        PALISADE окажется в вашем распоряжении. Бензиновые и дизельные двигатели PALISADE сочетаются
        с обновленной 8-ступенчатой автоматической коробкой передач, использующей новые технологии
        снижения трения для более плавного и тихого переключения передач, а также уменьшения расхода
        топлива. Аналогичная коробка передач устанавливается на автомобили с дизельным двигателем.
        Система управления полным приводом HTRAC оснащена контроллером системы выбора внедорожных
        режимов движения Multi-Terrain Control, которая улучшает характеристики SUV на пересеченной
        местности.
      </p>
      <div className="col-span-12 mt-[40px] max-h-[540px]">
        <img src={highlight} alt="palisade" className="w-full h-full" />
      </div>
    </div>
  );
};
