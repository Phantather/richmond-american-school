import { NavLink, useParams } from 'react-router-dom';

import { Breadcrumb, Spin } from 'antd';

import { useLayoutEffect, useState } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { SpecialOfferDetail } from '~entities/special-offer';
import { NewsDetail, useNewsDetail, useResetNewsDetail, useSetNewsDetail } from '~entities/news';
import { useNewsSimilar } from '~entities/news/news-similar';

export const SpecialOfferDetailData = () => {
  const { id } = useParams<{ id?: any }>();

  const [isLoading, setIsLoading] = useState(false);

  const newsDetail = useNewsDetail();
  const setNewsDetail = useSetNewsDetail();
  const resetNewsDetail = useResetNewsDetail();

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
        <NavLink to={RoutesUrls.specialOffer} className="text-black cursor-pointer text-[14px]">
          Спецпредложения
        </NavLink>
      ),
    },
    {
      title: <div className="text-black text-[14px]">{newsDetail?.title}</div>,
    },
  ];

  const newsDetailView = () => {
    if (newsDetail) {
      return <SpecialOfferDetail newsDetail={newsDetail} />;
    }

    return null;
  };

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[60px] p-[60px_20px_100px] max-w-[1024px] mx-auto w-full">
      <Breadcrumb
        separator="/"
        items={breadcrumbItems}
        className="col-span-12 sm:col-span-8 xs:col-span-4 [&>ol]:flex [&>ol]:items-center"
      />
      {isLoading ? (
        <div className="col-span-12 flex justify-center items-center !h-[640px]">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <>{newsDetailView()}</>
      )}
    </div>
  );
};
