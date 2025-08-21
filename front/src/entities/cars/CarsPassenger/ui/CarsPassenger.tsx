import { FC } from 'react';

import { Link, RoutesUrls } from '~shared/lib/router';

import sonata from '../../../../../public/assets/cars/sonata.png';
import elantra from '../../../../../public/assets/cars/elantra.png';

export interface CarsPassengerProps {}

export const CarsPassenger: FC<CarsPassengerProps> = () => {
  return (
    <div className="grid gap-[30px]">
      <h2 className="text-[30px] font-semibold">Легковые</h2>
      <div className="grid gap-5 grid-cols-12 sm:grid-cols-8 xs:grid-cols-4">
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsElantra}?part=features`}>
            <img
              src={elantra}
              alt="Passenger car"
              className="w-full !h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">ELANTRA</h3>
          </Link>
        </div>
        <div className="col-span-3 sm:col-span-4 xs:col-span-4  text-center">
          <Link to={`${RoutesUrls.carsSonata}?part=features`}>
            <img
              src={sonata}
              alt="Passenger car"
              className="w-full !h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">SONATA</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
