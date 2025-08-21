import { FC } from 'react';

import { FilePriceItem } from '~entities/shared/file-price/model';
import { DownLoadIcon } from '~shared/ui';

export interface CarsStariaPriceProps {
  list?: FilePriceItem[];
}

export const CarsStariaPrice: FC<CarsStariaPriceProps> = ({ list }) => {
  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <div className="col-span-12 grid grid-cols-12 bg-primary text-white py-[10px]">
        <div className="col-span-8 text-center">STARIA</div>
        <div className="col-span-4 text-center">Скачать PDF</div>
      </div>
      {list?.map((item, idx) => (
        <div
          key={`${item?.id_file}_${idx}`}
          className="col-span-12 grid grid-cols-12 bg-white text-gray-800 border-b"
        >
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0  border-r-0">
            {item?.title}
          </div>
          <div className="col-span-4 py-[10px] text-center bg-[#F6F3F2]  border border-solid  border-[#E4DCD3] border-t-0">
            <a
              href={item?.file_name}
              target="_blank"
              className="flex items-center justify-center gap-[8px]"
            >
              <DownLoadIcon />
              Скачать
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
