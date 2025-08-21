import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { CarsNewTusconData } from '~widgets/shared/cars';

export function CarsNewTusconPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Новый Tuscon"
        descriptionKey="Новый Hyundai Tucson — инновационный кроссовер с динамичным дизайном, интеллектуальными технологиями и передовыми системами безопасности для комфортных поездок."
      />
      <CarsNewTusconData />
    </>
  );
}
