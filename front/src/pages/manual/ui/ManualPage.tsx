import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { ManualData } from '~widgets/manual';

export function ManualPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Руководства и каталоги"
        descriptionKey="Руководства и каталоги Hyundai – получите информацию по эксплуатации, техническому обслуживанию и запчастям для вашего автомобиля."
      />
      <ManualData />
    </>
  );
}
