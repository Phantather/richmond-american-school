import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { SpecialOfferDetailData } from '~widgets/special-offer';

export function SpecialOfferDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Спецпредложения"
        descriptionKey="Испытайте автомобиль или технику перед покупкой. Тест-драйв помогает оценить комфорт, управление и работу систем для верного выбора"
      />
      <SpecialOfferDetailData />
    </>
  );
}
