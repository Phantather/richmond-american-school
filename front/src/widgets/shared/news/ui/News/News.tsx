import { useNavigate } from 'react-router';

import { useLayoutEffect, useState } from 'react';

import { Pagination, Spin } from 'antd';

import { NewsCards, NewsItem, useNews, useSetNews } from '~entities/shared/news';
import { RoutesUrls } from '~shared/lib/router';

export const News = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const news = useNews();
  const setNews = useSetNews();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        await setNews({ page: currentPage, offset: 12 });

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const newsCardsView = () => {
    if (news) {
      return (
        <>
          <NewsCards newsList={news?.data || []} />
          <div className="col-span-12 md:col-span-8 sm:col-span-4 flex justify-center mt-4">
            {news?.totalPages > 12 && (
              <Pagination
                current={currentPage}
                total={news?.total || 0}
                pageSize={12} // Количество элементов на странице
                onChange={handlePageChange}
              />
            )}
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4 p-[100px_0]">
      <h2 className="col-span-12 md:col-span-8 sm:col-span-4 text-center text-[48px] mb-[30px] font-semibold">
        Новости
      </h2>
      {isLoading ? (
        <div className="col-span-12 md:col-span-8 sm:col-span-4 flex justify-center items-center">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <> {newsCardsView()}</>
      )}

      <div className="col-span-12 md:col-span-8 sm:col-span-4  flex justify-center mt-[55px]">
        <button
          onClick={() => navigate(RoutesUrls.news)}
          className="bg-primary text-white !rounded-0 border-none p-[15px_25px] cursor-pointer"
        >
          Больше новостей
        </button>
      </div>
    </div>
  );
};
