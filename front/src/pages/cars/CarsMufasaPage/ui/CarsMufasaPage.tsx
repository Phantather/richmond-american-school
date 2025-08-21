import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { CarsMufasaData } from '~widgets/shared/cars/CarsMufasaData';

export function CarsMufasaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Mufasa"
        descriptionKey="Hyundai Mufasa — стильный и мощный кроссовер с современным дизайном, передовыми технологиями и комфортом для активной городской жизни и путешествий."
      />
      <CarsMufasaData />
    </>
  );
}
