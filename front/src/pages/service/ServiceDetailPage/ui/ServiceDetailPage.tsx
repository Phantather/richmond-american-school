import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { ServiceDetailData } from '~widgets/service';

export function ServiceDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Сервисное обслуживание"
        descriptionKey="Регулярное обслуживание автомобиля снижает риск поломок, улучшает ходовые качества и повышает безопасность. Доверьте свой Hyundai профессионалам сервиса"
      />
      <ServiceDetailData />
    </>
  );
}
