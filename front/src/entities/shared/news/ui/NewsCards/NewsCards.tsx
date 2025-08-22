import { FC } from 'react';

import { useNavigate } from 'react-router';

import { NewsItem } from '~entities/shared/news';
import { dayjs } from '~shared/lib/time/dayjs';
import { RoutesUrls } from '~shared/lib/router';

export interface NewsCardsProps {
  newsList: NewsItem[];
}

export const NewsCards: FC<NewsCardsProps> = ({ newsList }) => {
  const navigate = useNavigate();

  return (
    <div className="col-span-12 md:col-span-8 sm:col-span-4  grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-[46px]">
      {newsList.map((newsItem, idx) => (
        <div
          onClick={() => navigate(`${RoutesUrls?.news}/${newsItem?.id}`)}
          key={`${newsItem?.id}_${idx}`}
          className="col-span-12 md:col-span-8 sm:col-span-4  w-full cursor-pointer bg-white flex md:flex-col items-center gap-5 p-5 rounded"
        >
          {newsItem?.image_name && (
            <img
              src={newsItem?.image_name}
              alt="car"
              width="300"
              height="205"
              className="md:w-full md:h-[400px] sm:h-[305px] object-cover"
            />
          )}

          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[16px]">{newsItem?.title}</h2>
            <p className="text-[12px] text-[#858585]">
              {dayjs(newsItem?.date).locale('ru').format('D MMMM, YYYY')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
