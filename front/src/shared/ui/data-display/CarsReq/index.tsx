import { FC } from 'react';

import { CarsRequest } from '~features/shared/cars';
import { CarsTestDrive } from '~features/shared/cars/cars-test-drive';

export const CarsReq: FC = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1024px] mx-auto w-full px-5 flex justify-between py-[18px]">
        <CarsRequest />
        <CarsTestDrive />
      </div>
    </div>
  );
};
