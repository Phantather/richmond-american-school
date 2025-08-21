import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { CarsElantraData } from '~widgets/shared/cars';
import { CarsSonataData } from '~widgets/shared/cars/CarsSonataData';

export function CarsSonataPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Sonata"
        descriptionKey="Hyundai Sonata — элегантный и технологичный седан с динамичным дизайном, современными системами безопасности и комфортным салоном для удобных поездок."
      />
      <CarsSonataData />
    </>
  );
}
