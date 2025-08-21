import { FC } from 'react';

import { CarsCrossovers, CarsMinivans, CarsPassenger } from '~entities/cars';

export interface CarsListProps {}

export const CarsList: FC<CarsListProps> = () => {
  return (
    <div className="grid col-span-12 gap-[80px]">
      <CarsPassenger />
      <CarsCrossovers />
      <CarsMinivans />
    </div>
  );
};
