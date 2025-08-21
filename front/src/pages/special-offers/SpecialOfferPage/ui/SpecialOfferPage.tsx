import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { SpecialOfferData } from '~widgets/special-offer';

export function SpecialOfferPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Спецпредложения"
        descriptionKey="Выгодные акции на авто и технику. Специальные условия покупки и тест-драйвы для наших клиентов."
      />
      <SpecialOfferData />
    </>
  );
}
