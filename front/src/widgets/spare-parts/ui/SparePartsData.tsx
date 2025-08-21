import { ShieldIcon, StarsIcon } from '~shared/ui';

import bg from '~shared/assets/spare-parts/banner.jpg';

export const SparePartsData = () => {
  return (
    <div className="pb-[100px] grid gap-20">
      <div
        className="bg-no-repeat bg-cover bg-center p-[200px_0_260px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-[1024px] mx-auto w-full px-5">
          <h1 className="text-white text-[60px] xs:text-[40px] font-bold">
            Оригинальные запасные части
          </h1>
          <p className="text-white text-[20px]">HYUNDAI</p>
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto w-full flex items-center flex-col gap-5 p-[20px_20px_0]">
        <p className="text-[20px] leading-[30px]">
          <b>Оригинальные запчасти</b> <br />
          «Оригинальные запчасти Hyundai испытывают трудности в различных смоделированных
          экстремальных условиях для обеспечения качества, надежности и долговечности. На них также
          распространяется 12-месячная гарантия протяженности 20 000 км. Оригинальные запчасти
          Hyundai всегда являются надежной инвестиционной для вашего автомобиля. Hyundai изготовлен
          в соответствии с самыми высокими стандартами. Hyundai »
        </p>
        <p className="text-[20px] leading-[30px]">
          <b>Не соглашайтесь на второе место</b> <br />
          Рынок автомобильных запчастей полон дешевых альтернатив. Установка Hyundai неоригинальных
          или отремонтированных деталей на ваш автомобиль. Hyundai. Эти детали не производятся в
          соответствии с такими строгими стандартами, как оригинальные запчасти. К тому же, к еще
          большему количеству ремонтов. Hyundai.
        </p>
      </div>
      <div className="max-w-[1024px] mx-auto w-full grid grid-cols-2 sm:grid-cols-1 gap-10 px-5">
        <div className="col-span-1">
          <StarsIcon />
          <h2 className="text-[25px] my-6">Преимущества</h2>
          <ul className="flex flex-col gap-5">
            <li className="text-[20px] leading-[25px]">
              Оригинальные воздушные фильтры удерживают 99% загрязняющих элементов, защищая
              двигатель автомобиля.
            </li>
            <li className="text-[20px] leading-[25px]">
              Оригинальные воздушные фильтры идеально устанавливаются, предотвращая утечку воздуха.
              Он поступает в двигатель через фильтр и соотношение воздух / топливо.
            </li>
            <li className="text-[20px] leading-[25px]">
              В целях обеспечения оптимальных показателей работы двигателя и оптимизации потребления
              топлива.
            </li>
            <li className="text-[20px] leading-[25px]">
              Оригинальные воздушные фильтры имеют высокую концентрацию фильтрующих элементов для
              очистки воздуха и подачи оптимального потока в двигатель.
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ShieldIcon />
          <h2 className="text-[25px] my-6">Защита от подделок</h2>
          <ul className="flex flex-col gap-5">
            <li className="text-[20px] leading-[25px]">
              Неоригинальные фильтры производятся из низкокачественных материалов, из-за этого
              большое количество загрязняющих элементов проникает в двигатель и приводит к износу
              поршней и цилиндров.
            </li>
            <li className="text-[20px] leading-[25px]">
              Неоригинальные воздушные фильтры при установке присоединяется не плотно. Это связано с
              тем, что в двигатель не попадает полностью очищенный воздух.
            </li>
            <li className="text-[20px] leading-[25px]">
              Ухудшаются рабочие показатели двигателя и приводят к перерасходу топлива.
            </li>
            <li className="text-[20px] leading-[25px]">
              Низкая концентрация фильтрующих элементов внутри фильтра приводит к его более быстрому
              загрязнению. Из-за этого Вам придется чаще менять низкокачественные фильтры.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
