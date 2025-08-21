import { useLayoutEffect, useState } from 'react';

import { Breadcrumb, Pagination, Spin } from 'antd';

import { NavLink } from 'react-router-dom';

import { NewsCards, useNews, useSetNews } from '~entities/shared/news';
import { RoutesUrls } from '~shared/lib/router';

export const NewsData = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  }, [currentPage]);

  const breadcrumbItems = [
    {
      title: (
        <NavLink to={RoutesUrls.root} className="text-black cursor-pointer text-[14px]">
          Главная
        </NavLink>
      ),
    },
    {
      title: <div className="text-black text-[14px]">Новости</div>,
    },
  ];

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const newsCardsView = () => {
    if (news) {
      return (
        <>
          <NewsCards newsList={news?.data || []} />
          {news?.total > 12 && (
            <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex justify-center mt-4">
              <Pagination
                current={currentPage}
                total={news?.total || 0}
                pageSize={12} // Количество элементов на странице
                onChange={handlePageChange}
              />
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[60px] p-[60px_20px_100px] max-w-[1024px] mx-auto w-full">
      <Breadcrumb
        separator="/"
        items={breadcrumbItems}
        className="col-span-12 sm:col-span-8 xs:col-span-4  [&>ol]:flex [&>ol]:items-center"
      />
      <h1 className="col-span-12 sm:col-span-8 xs:col-span-4 text-center text-[58px] font-semibold">
        Новости
      </h1>
      {isLoading ? (
        <div className="col-span-12 sm:col-span-8 xs:col-span-4 flex justify-center items-center h-[300px]">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <>{newsCardsView()}</>
      )}
    </div>
  );
};
