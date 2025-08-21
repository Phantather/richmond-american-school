import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { ServiceSigningData } from '~widgets/service/ServiceSigningData';

export function ServiceSigningPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Запись на сервис"
        descriptionKey="Запишитесь на сервис, выбрав тип услуги и задав вопросы специалистам через онлайн-форму, телефон или лично, чтобы избежать ожидания и обеспечить удобство."
      />
      <ServiceSigningData />
    </>
  );
}
