import { useRoutes } from 'react-router-dom';

import { BaseLayout, SiteLayout } from '~pages/layouts';
import { NotFoundPage } from '~pages/shared/not-found';
import { RequireAuth, RoutesUrls } from '~shared/lib/router';
import { lazyLoader } from '~shared/lib/utils';
import { LoginPage } from '~pages/shared/login';

const HomePage = lazyLoader(() =>
  import('~pages/shared/home').then((module) => ({
    default: module.HomePage,
  }))
);

const AboutPage = lazyLoader(() =>
  import('~pages/about').then((module) => ({
    default: module.AboutPage,
  }))
);

const CarsPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsPage }))
);

const CarsElantraPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsElantraPage }))
);

const CarsSonataPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsSonataPage }))
);

const CarsNewTusconPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsNewTusconPage }))
);

const CarsSantaFePage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsSantaFePage }))
);

const CarsPalisadePage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsPalisadePage }))
);

const CarsStariaPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsStariaPage }))
);

const CarsMufasaPage = lazyLoader(() =>
  import('~pages/cars').then((module) => ({ default: module.CarsMufasaPage }))
);

const NewsPage = lazyLoader(() =>
  import('~pages/news').then((module) => ({ default: module.NewsPage }))
);

const NewsDetailPage = lazyLoader(() =>
  import('~pages/news').then((module) => ({ default: module.NewsDetailPage }))
);

const SpecialOfferPage = lazyLoader(() =>
  import('~pages/special-offers').then((module) => ({ default: module.SpecialOfferPage }))
);

const SpecialOfferDetailPage = lazyLoader(() =>
  import('~pages/special-offers').then((module) => ({ default: module.SpecialOfferDetailPage }))
);

const ServicePage = lazyLoader(() =>
  import('~pages/service').then((module) => ({ default: module.ServicePage }))
);

const ServiceDetailPage = lazyLoader(() =>
  import('~pages/service').then((module) => ({ default: module.ServiceDetailPage }))
);

const ServiceSigningPage = lazyLoader(() =>
  import('~pages/service').then((module) => ({ default: module.ServiceSigningPage }))
);

const GuaranteePage = lazyLoader(() =>
  import('~pages/guarantee').then((module) => ({ default: module.GuaranteePage }))
);

const SparePartsPage = lazyLoader(() =>
  import('~pages/spare-parts').then((module) => ({ default: module.SparePartsPage }))
);

const AccessoriesPage = lazyLoader(() =>
  import('~pages/accessories').then((module) => ({ default: module.AccessoriesPage }))
);

const ManualPage = lazyLoader(() =>
  import('~pages/manual').then((module) => ({ default: module.ManualPage }))
);

const AdminNewsPage = lazyLoader(() =>
  import('~pages/admin').then((module) => ({ default: module.AdminNewsPage }))
);

const AdminCarsFilePage = lazyLoader(() =>
  import('~pages/admin').then((module) => ({ default: module.AdminCarsFilePage }))
);

const AdminBannerPage = lazyLoader(() =>
  import('~pages/admin').then((module) => ({ default: module.AdminBannerPage }))
);

const LogoutPage = lazyLoader(() =>
  import('~pages/shared/logout').then((module) => ({ default: module.LogoutPage }))
);

const routes = [
  {
    path: RoutesUrls.root,
    element: <SiteLayout />,
    children: [
      { path: RoutesUrls.root, element: <HomePage /> },
      { path: RoutesUrls.about, element: <AboutPage /> },
      { path: RoutesUrls.cars, element: <CarsPage /> },
      { path: RoutesUrls.carsElantra, element: <CarsElantraPage /> },
      { path: RoutesUrls.carsSonata, element: <CarsSonataPage /> },
      { path: RoutesUrls.carsNewTuscon, element: <CarsNewTusconPage /> },
      { path: RoutesUrls.carsSantaFe, element: <CarsSantaFePage /> },
      { path: RoutesUrls.carsPalisade, element: <CarsPalisadePage /> },
      { path: RoutesUrls.carsStaria, element: <CarsStariaPage /> },
      { path: RoutesUrls.carsMufasa, element: <CarsMufasaPage /> },
      { path: RoutesUrls.news, element: <NewsPage /> },
      { path: RoutesUrls.newsDetail, element: <NewsDetailPage /> },
      { path: RoutesUrls.specialOffer, element: <SpecialOfferPage /> },
      { path: RoutesUrls.specialOfferDetail, element: <SpecialOfferDetailPage /> },
      { path: RoutesUrls.service, element: <ServicePage /> },
      { path: RoutesUrls.serviceDetail, element: <ServiceDetailPage /> },
      { path: RoutesUrls.serviceSigning, element: <ServiceSigningPage /> },
      { path: RoutesUrls.guarantee, element: <GuaranteePage /> },
      { path: RoutesUrls.spareParts, element: <SparePartsPage /> },
      { path: RoutesUrls.accessories, element: <AccessoriesPage /> },
      { path: RoutesUrls.manual, element: <ManualPage /> },
      { path: RoutesUrls.login, element: <LoginPage /> },
      { path: RoutesUrls.logout, element: <LogoutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: RoutesUrls.adminPanel,
    element: <RequireAuth loginPath={RoutesUrls.login} />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          { path: RoutesUrls.adminPanelNews, element: <AdminNewsPage /> },
          { path: RoutesUrls.adminPanelFiles, element: <AdminCarsFilePage /> },
          { path: RoutesUrls.adminPanelBanner, element: <AdminBannerPage /> },
        ],
      },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
