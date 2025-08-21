import { useNavigate } from 'react-router';

import { ModelsSwiper } from '~entities/shared/models';
import { RoutesUrls } from '~shared/lib/router';

export const Models = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 p-[100px_0_80px] bg-[#F6F3F2]">
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-center text-[48px] mb-[80px] font-semibold">
        Модели
      </h2>
      <ModelsSwiper />
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  flex justify-center mt-[55px]">
        <button
          onClick={() => navigate(RoutesUrls.cars)}
          className="bg-primary text-white !rounded-0 border-none p-[15px_25px] cursor-pointer"
        >
          Все модели
        </button>
      </div>
    </div>
  );
};
