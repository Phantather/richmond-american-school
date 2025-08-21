import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { CarsElantraData } from '~widgets/shared/cars';

export function CarsElantraPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Elantra"
        descriptionKey="Hyundai Elantra — стильный и технологичный седан с современным дизайном, экономичными двигателями и передовыми системами безопасности для комфортного вождения."
      />
      <CarsElantraData />
    </>
  );
}
