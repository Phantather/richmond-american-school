import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { GuaranteeData } from '~widgets/guarantee';

export function GuaranteePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Гарантия"
        descriptionKey="Узнайте о гарантии Hyundai, условиях обслуживания и ремонте. Свяжитесь с нами через WhatsApp или звонок для консультации."
      />
      <GuaranteeData />
    </>
  );
}
