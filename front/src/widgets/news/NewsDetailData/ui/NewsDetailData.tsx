import { NavLink, useParams } from 'react-router-dom';

import { Breadcrumb, Spin } from 'antd';

import { useLayoutEffect, useState } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { NewsDetail, useNewsDetail, useResetNewsDetail, useSetNewsDetail } from '~entities/news';
import {
  useNewsSimilar,
  useResetNewsSimilar,
  useSetNewsSimilar,
} from '~entities/news/news-similar';
import { NewsCards } from '~entities/shared/news';

export const NewsDetailData = () => {
  const { id } = useParams<{ id?: any }>();

  const [isLoading, setIsLoading] = useState(false);

  const newsDetail = useNewsDetail();
  const newsSimilar = useNewsSimilar();

  const setNewsDetail = useSetNewsDetail();
  const setNewsSimilar = useSetNewsSimilar();

  const resetNewsDetail = useResetNewsDetail();
  const resetNewsSimilar = useResetNewsSimilar();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        resetNewsDetail();

        await setNewsDetail({ id });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, setNewsDetail]);

  useLayoutEffect(() => {
    const fetchSimilarNews = async () => {
      if (newsDetail) {
        try {
          setIsLoading(true);

          resetNewsSimilar();

          await setNewsSimilar({ title: newsDetail.title, id: newsDetail.id });
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching similar news:', error);
          setIsLoading(false);
        }
      }
    };

    fetchSimilarNews();
  }, [newsDetail, setNewsSimilar]);

  const breadcrumbItems = [
    {
      title: (
        <NavLink to={RoutesUrls.root} className="text-black cursor-pointer text-[14px]">
          Главная
        </NavLink>
      ),
    },
    {
      title: (
        <NavLink to={RoutesUrls.news} className="text-black cursor-pointer text-[14px]">
          Новости
        </NavLink>
      ),
    },
    {
      title: <div className="text-black text-[14px]">{newsDetail?.title}</div>,
    },
  ];

  const newsDetailView = () => {
    if (newsDetail) {
      return <NewsDetail newsDetail={newsDetail} />;
    }

    return null;
  };

  const newsSimilarView = () => {
    if (newsSimilar) {
      const filteredNews = newsSimilar.filter((news) => news.id !== newsDetail?.id);

      return (
        <>
          {filteredNews?.length > 0 && (
            <div className="mt-[100px] col-span-12 sm:col-span-8 xs:col-span-4">
              <h2 className="text-[36px] mb-[40px]">Похожие статьи</h2>
              <NewsCards newsList={filteredNews || []} />
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 p-[40px_20px_100px] max-w-[1024px] mx-auto w-full">
      <Breadcrumb
        separator="/"
        items={breadcrumbItems}
        className="col-span-12 [&>ol]:flex [&>ol]:items-center"
      />
      {isLoading ? (
        <div className="col-span-12 flex justify-center items-center !h-[640px]">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <>
          {newsDetailView()}
          {newsSimilarView()}
        </>
      )}
    </div>
  );
};
