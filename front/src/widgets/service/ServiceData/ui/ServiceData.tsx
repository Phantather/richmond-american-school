import { NavLink } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import { RoutesUrls } from '~shared/lib/router';

import { ServiceList } from '~entities/service';

export const ServiceData = () => {
  const breadcrumbItems = [
    {
      title: (
        <NavLink to={RoutesUrls.root} className="text-black cursor-pointer text-[14px]">
          Главная
        </NavLink>
      ),
    },
    {
      title: <div className="text-black text-[14px]">Сервисное обслуживание</div>,
    },
  ];

  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 gap-[60px] p-[60px_20px_100px] max-w-[1024px] mx-auto w-full">
      <Breadcrumb
        separator="/"
        items={breadcrumbItems}
        className="col-span-12 sm:col-span-8 xs:col-span-4  [&>ol]:flex [&>ol]:items-center"
      />
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4  text-[58px] font-semibold">
        Сервисное обслуживание
      </h2>
      <ServiceList />
    </div>
  );
};
