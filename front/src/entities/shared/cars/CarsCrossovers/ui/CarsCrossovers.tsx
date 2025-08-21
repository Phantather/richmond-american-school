import { FC } from 'react';

export interface CarsCrossoversProps {}

export const CarsCrossovers: FC<CarsCrossoversProps> = () => {
  return (
    <div className="grid gap-[30px]">
      <h3 className="text-[30px] font-semibold">Кроссоверы</h3>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-span-3">
          <img src="" alt="Passenger car" className="w-full h-[120px] object-cover" />
          <h4 className="font-semibold text-[16px] mt-[15px]">i30</h4>
        </div>
      </div>
    </div>
  );
};
