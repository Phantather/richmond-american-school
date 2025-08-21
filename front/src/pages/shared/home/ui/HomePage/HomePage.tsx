import { HomeHero } from '~pages/shared/home/ui/HomeHero';

import { SeoHelmet } from '~shared/lib/seo';
import { Models } from '~widgets/shared/models';
import { News } from '~widgets/shared/news';

interface IHomePage {}

export function HomePage({}: IHomePage) {
  return (
    <>
      <SeoHelmet
        title={'Hyundai' || ''}
        descriptionKey="Официальный дилер Hyundai. Новые автомобили, спецпредложения, сервис и тест-драйвы. Выгодные условия покупки."
      />
      <div className="place-items-center lg:max-h-[100vh] min-h-[calc(100vh-228px)]">
        <HomeHero />
        <Models />
        <News />
      </div>
    </>
  );
}
