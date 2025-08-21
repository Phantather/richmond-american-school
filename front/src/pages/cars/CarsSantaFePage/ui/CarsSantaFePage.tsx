import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { CarsSantaFeData } from '~widgets/shared/cars/CarsSantaFeData';

export function CarsSantaFePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Santa Fe"
        descriptionKey="Hyundai Santa Fe — стильный и вместительный кроссовер с передовыми технологиями, комфортным салоном и высокими стандартами безопасности для любых поездок."
      />
      <CarsSantaFeData />
    </>
  );
}
