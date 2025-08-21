import bg from '~shared/assets/guarantee/banner.jpg';

export const GuaranteeData = () => {
  return (
    <div className="pb-[100px]">
      <div
        className="bg-no-repeat bg-cover bg-center p-[400px_0_60px] sm:p-[200px_0_60px] xs:p-[100px_0_60px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-[1024px] mx-auto w-full px-5">
          <h1 className="text-white text-[60px] font-bold">Гарантия</h1>
          <p className="text-white text-[20px]">
            По всем вопросам технического обслуживания и ремонта автомобиля, включая кузовной
            ремонт, рекомендуем обращаться только к авторизованным сервисным партнерам Хёндэ
            (Hyundai).
          </p>
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto w-full flex items-center sm:flex-col sm:gap-y-5 justify-between cars-tabs p-[90px_20px_0]">
        <p className="text-[25px] leading-[40px]">
          Информация по гарантии: <br />
          Для поддержания автомобиля в исправном техническом состоянии и сохранения гарантии
          необходимо соблюдать все правила нормальной эксплуатации автомобиля и рекомендации
          изготовителя, а также установленный регламент технического обслуживания.
        </p>
      </div>
      <div className="max-w-[1024px] mx-auto w-full flex sm:flex-col text-center gap-[32px] mt-[40px] px-[20px]">
        <a
          href="https://wa.me/996775530003"
          target="_blank"
          className="bg-primary border border-solid border-primary  text-white p-[15px_75px] cursor-pointer"
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
  );
};
