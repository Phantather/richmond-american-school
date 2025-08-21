import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { CarsStariaData } from '~widgets/shared/cars/CarsStariaData';

export function CarsStariaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Staria"
        descriptionKey="Hyundai Staria — футуристичный минивэн с просторным салоном, инновационными технологиями и высоким уровнем комфорта для семейных поездок и бизнеса."
      />
      <CarsStariaData />
    </>
  );
}
