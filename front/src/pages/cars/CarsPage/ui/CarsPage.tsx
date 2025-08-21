import { useEffect } from 'react';

import { CarsData } from '~widgets/shared/cars';

import { SeoHelmet } from '~shared/lib/seo';

export function CarsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Модельный ряд"
        descriptionKey="Модельный ряд Hyundai: от стильных седанов и комфортных кроссоверов до инновационных электромобилей. Дизайн, технологии и надежность для любого водителя."
      />
      <CarsData type="page" />
    </>
  );
}
