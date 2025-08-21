import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { CarsPalisadeData } from '~widgets/shared/cars/CarsPalisadeData';

export function CarsPalisadePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Hyundai Palisade"
        descriptionKey="Hyundai Palisade — премиальный семейный внедорожник с просторным салоном, мощным двигателем, передовыми технологиями и высоким уровнем комфорта и безопасности."
      />
      <CarsPalisadeData />
    </>
  );
}
