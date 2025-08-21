import { useEffect } from 'react';

import { SeoHelmet } from '~shared/lib/seo';
import { NewsData } from '~widgets/news';

export function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title="Новости"
        descriptionKey="Новости Hyundai – будьте в курсе последних событий, новинок, акций и специальных предложений от официального дилера."
      />
      <NewsData />
    </>
  );
}
