import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { GuaranteeData } from '~widgets/guarantee';
import { AccessoriesData } from '~widgets/accessories';

export function AccessoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Гарантия"
        descriptionKey="Оригинальные аксессуары Hyundai: качество, инженерные испытания и идеальная совместимость. Стиль и надежность для вашего автомобиля."
      />
      <AccessoriesData />
    </>
  );
}
