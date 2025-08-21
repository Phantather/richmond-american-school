import { FC } from 'react';

import { CarsList } from '~entities/shared/cars';

export interface CarsDataProps {
  type?: 'page' | 'header';
}

export const CarsData: FC<CarsDataProps> = ({ type }) => {
  return (
    <div
      className={`grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[60px] ${
        type === 'page' ? 'p-[60px_20px_100px]' : 'px-[20px]'
      } max-w-[1024px] mx-auto w-full`}
    >
      {type === 'page' && (
        <h1 className="col-span-12 sm:col-span-8 xs:col-span-4  text-center text-[58px] font-semibold">
          Все автомобили
        </h1>
      )}
      <CarsList />
    </div>
  );
};
