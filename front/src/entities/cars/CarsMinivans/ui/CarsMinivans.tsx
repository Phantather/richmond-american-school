import { FC } from 'react';

import { Link, RoutesUrls } from '~shared/lib/router';

import staria from '../../../../../public/assets/cars/staria.png';

export interface CarsMinivansProps {}

export const CarsMinivans: FC<CarsMinivansProps> = () => {
  return (
    <div className="grid gap-[30px]">
      <h2 className="text-[30px] font-semibold">Минивэны</h2>
      <div className="grid gap-5 grid-cols-12 sm:grid-cols-8 xs:grid-cols-4">
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsStaria}?part=features`}>
            <img
              src={staria}
              alt="Minivans car"
              className="w-full h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">STARIA</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
