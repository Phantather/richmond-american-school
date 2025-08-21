import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { NewsDetailData } from '~widgets/news';

export function NewsDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Новость"
        descriptionKey="Детальная страница новостей Hyundai: актуальные события, новинки, акции и пресс-релизы. Узнайте больше о последних изменениях и обновлениях бренда."
      />
      <NewsDetailData />
    </>
  );
}
