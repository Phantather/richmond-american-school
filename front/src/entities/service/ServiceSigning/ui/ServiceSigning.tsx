import { FC } from 'react';

import serviceSigning from '~shared/assets/signing-service.png';
import { CarsServiceSigning } from '~features/shared/cars/cars-service-signing';

export interface ServiceSigningProps {}

export const ServiceSigning: FC<ServiceSigningProps> = () => {
  return (
    <div className="col-span-12  sm:col-span-8 xs:col-span-4 grid gap-[40px]">
      <img
        src={serviceSigning}
        alt="service"
        className="w-full h-[360px] !sm:max-h-[460px] !xs:max-h-[400px] object-cover"
      />
      <div className="grid gap-[40px]">
        <p>
          В процессе записи вы можете указать желаемый тип услуг, дополнительные пожелания и задать
          вопросы специалистам. Это особенно полезно при высокой загруженности сервиса, так как
          позволяет заранее зарезервировать место и избежать длительного ожидания. Записаться можно
          разными способами: через онлайн-форму, по телефону или лично, в зависимости от доступных
          вариантов. Такой подход обеспечивает удобство, прозрачность и комфорт как для клиентов,
          так и для специалистов сервиса.
        </p>
        <div>
          <p>Основные аспекты тест-драйва:</p>
          {/*<ol>*/}
          {/*  <li className="text-[16px] font-normal">*/}
          {/*    Автомобили: <br /> При покупке машины тест-драйв позволяет проверить комфорт салона,*/}
          {/*    управление, плавность хода, динамику разгона и работу ключевых систем (тормозной,*/}
          {/*    подвески, электроники). Обычно проводится на заранее установленном маршруте,*/}
          {/*    включающем городские улицы и трассу.*/}
          {/*  </li>*/}
          {/*  <li className="text-[16px] font-normal">*/}
          {/*    Электроника и техника: <br />В этой категории тест-драйвы проводятся для оценки*/}
          {/*    эргономики, производительности и удобства использования гаджетов (смартфонов,*/}
          {/*    ноутбуков, бытовой техники).*/}
          {/*  </li>*/}
          {/*  <li className="text-[16px] font-normal">*/}
          {/*    Продукты и услуги: <br />В бизнесе тест-драйв может применяться к цифровым услугам и*/}
          {/*    программному обеспечению, предоставляя пробный период, чтобы пользователь смог понять,*/}
          {/*    насколько продукт соответствует его задачам.*/}
          {/*  </li>*/}
          {/*</ol>*/}
        </div>
        {/*<div>*/}
        {/*  <p>Преимущества тест-драйва:</p>*/}
        {/*  <ul>*/}
        {/*    <li className="text-[16px] font-normal">*/}
        {/*      Помогает принять осознанное решение о покупке.*/}
        {/*    </li>*/}
        {/*    <li className="text-[16px] font-normal">Снижает риск недовольства продуктом.</li>*/}
        {/*    <li className="text-[16px] font-normal">*/}
        {/*      Позволяет продавцу продемонстрировать ключевые преимущества товара.*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*  <p>*/}
        {/*    Тест-драйв — это важный этап выбора, который выгоден как покупателю, так и продавцу.*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className="flex sm:flex-col text-center  gap-[32px]">
          {/*<a*/}
          {/*    href="https://wa.me/996221230003"*/}
          {/*    target="_blank"*/}
          {/*    className="bg-primary border border-solid border-primary  text-white p-[15px_75px] cursor-pointer"*/}
          {/*>*/}
          {/*  Написать в WhatsApp*/}
          {/*</a>*/}
          <CarsServiceSigning />
          <a
            href="https://wa.me/996775530003"
            target="_blank"
            className="bg-transparent border border-solid border-primary text-primary p-[15px_75px] cursor-pointer"
          >
            Написать в WhatsApp
          </a>
          <a
            href="tel:+996221230003"
            target="_blank"
            className="bg-transparent border border-solid border-primary text-primary p-[15px_75px] cursor-pointer"
          >
            Позвонить
          </a>
        </div>
      </div>
    </div>
  );
};
