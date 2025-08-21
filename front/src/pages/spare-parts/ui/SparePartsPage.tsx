import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { SparePartsData } from '~widgets/spare-parts';

export function SparePartsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Оригинальные запасные части"
        descriptionKey="Оригинальные запчасти Hyundai обеспечивают надежность и долговечность, проходят тесты в экстремальных условиях и имеют гарантию 12 месяцев или 20 000 км."
      />
      <SparePartsData />
    </>
  );
}
