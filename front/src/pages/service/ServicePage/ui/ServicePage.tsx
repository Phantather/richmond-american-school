import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';

import { ServiceDetailData } from '~widgets/service';

export function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Обслуживание"
        descriptionKey="Регулярное обслуживание автомобиля снижает риск поломок, улучшает ходовые качества и повышает безопасность. Доверьте свой Hyundai профессионалам сервиса"
      />
      <ServiceDetailData />
    </>
  );
}
