import { FC } from 'react';

import { Link, RoutesUrls } from '~shared/lib/router';

import tuscon from '../../../../../public/assets/cars/tuscon.png';
import santafe from '../../../../../public/assets/cars/santafe.png';
import palisade from '../../../../../public/assets/cars/palisade.png';
import mufasa from '../../../../../public/assets/cars/mufasa.png';

export interface CarsCrossoversProps {}

export const CarsCrossovers: FC<CarsCrossoversProps> = () => {
  return (
    <div className="grid gap-[30px]">
      <h2 className="text-[30px] font-semibold">Кроссоверы</h2>
      <div className="grid gap-5 grid-cols-12 sm:grid-cols-8 xs:grid-cols-4">
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsMufasa}?part=features`}>
            <img
              src={mufasa}
              alt="Crossovers car"
              className="w-full h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">MUFASA</h3>
          </Link>
        </div>
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsNewTuscon}?part=features`}>
            <img
              src={tuscon}
              alt="Crossovers car"
              className="w-full h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">TUCSON</h3>
          </Link>
        </div>
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsSantaFe}?part=features`}>
            <img
              src={santafe}
              alt="Crossovers car"
              className="w-full h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">SANTA FE</h3>
          </Link>
        </div>
        <div className="col-span-3 sm:col-span-4 xs:col-span-4 text-center">
          <Link to={`${RoutesUrls.carsPalisade}?part=features`}>
            <img
              src={palisade}
              alt="Crossovers car"
              className="w-full h-[120px] sm:!h-[200px] xs:!h-[250px] object-cover"
              width="250"
              height="250"
            />
            <h3 className="font-semibold text-[16px] mt-[15px]">PALISADE</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
