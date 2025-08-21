import { FC } from 'react';

export interface ServiceListProps {}

export const ServiceList: FC<ServiceListProps> = () => {
  return (
    <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[46px]">
      <div className="col-span-4 sm:col-span-4">
        <img src="" alt="service" className="w-full h-[205px] object-cover" />
        <h3 className="font-medium text-[16px] mt-[20px]">Авто в кредит</h3>
      </div>
    </div>
  );
};
