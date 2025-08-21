import bg from '~shared/assets/accessories/banner.jpg';

export const AccessoriesData = () => {
  return (
    <div className="pb-[100px]">
      <div
        className="w-full bg-no-repeat bg-cover bg-center p-[200px_20px_360px] sm:p-[100px_20px_260px] xs:p-[80px_20px_160px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-[1024px] w-full mx-auto  px-5">
          <h1 className="text-white text-[60px] xs:text-[40px] font-bold">
            Оригинальные аксессуары
          </h1>
          <p className="text-white text-[20px]">HYUNDAI</p>
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto w-full flex items-center sm:flex-col sm:gap-y-5 justify-between cars-tabs p-[90px_20px_0]">
        <p className="text-[25px] leading-[40px]">
          Каждая оригинальная запасная часть разрабатывается индивидуально, проходит технологические
          тесты и инженерные испытания, для обеспечения безукоризненного взаимодействия между
          деталями.
        </p>
      </div>
    </div>
  );
};
