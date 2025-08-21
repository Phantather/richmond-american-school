import { useNavigate } from 'react-router';

import { FC } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { NewsItem } from '~entities/shared/news';
import { dayjs } from '~shared/lib/time/dayjs';

export interface SpecialOfferListProps {
  newsList: NewsItem[];
}

export const SpecialOfferList: FC<SpecialOfferListProps> = ({ newsList }) => {
  const navigate = useNavigate();

  return (
    <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[46px]">
      {newsList.map((newsItem, idx) => (
        <div
          onClick={() => navigate(`${RoutesUrls?.specialOffer}/${newsItem?.id}`)}
          key={`${newsItem?.id}_${idx}`}
          className="col-span-4 sm:col-span-4 cursor-pointer"
        >
          <img
            src={newsItem?.image_name}
            alt="car"
            className="!w-[100%] h-[205px] sm:h-[230px] xs:h-[300px] object-cover"
            width="300"
            height="205"
          />

          <p className="text-[12px] text-[#858585] m-[20px_0_10px]">
            {dayjs(newsItem?.date).locale('ru').format('D MMMM, YYYY')}
          </p>
          <h2 className="font-medium text-[16px]">{newsItem?.title}</h2>
        </div>
      ))}
    </div>
  );
};
