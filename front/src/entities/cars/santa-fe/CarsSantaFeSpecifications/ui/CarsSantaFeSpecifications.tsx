import { FC, useState } from 'react';

import { Select } from 'antd';

export interface CarsSantaFeSpecificationsProps {}

export const CarsSantaFeSpecifications: FC<CarsSantaFeSpecificationsProps> = () => {
  const [configuration, setConfiguration] = useState<number>(0);

  const handleConfigurationChange = (value: number) => {
    setConfiguration(value);
  };

  return (
    <div className="grid grid-cols-12 pt-[60px]">
      <h2 className="col-span-12 text-[48px] font-medium text-center">Характеристики</h2>
      <div className="col-span-12 grid grid-cols-12 items-center my-[40px] sm:gap-10">
        <h3 className="text-[30px] font-medium col-span-5 sm:col-span-12">Выберите комплектацию</h3>
        <div className="col-span-7 sm:col-span-12">
          <Select
            value={configuration}
            onChange={handleConfigurationChange}
            className="w-full h-[44px] select"
          >
            <Select.Option value={0}>Calligraphy ( Calligraphy )</Select.Option>
          </Select>
        </div>
      </div>
      <div className="col-span-12">
        <h3 className="text-[30px] font-medium text-center mb-[20px]">Производительность</h3>
        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Двигатель</div>
        </div>

        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Тип двигателя
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            Smartstream G2.5 T-GDI
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Рабочий объем (см3)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            2 497
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс скорость (км/ч)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            198
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс мощность (л.с./об.мин)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            281 / 5 800
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс мощность об/мин
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            6 100
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс крутящий момент (кг*м/об.мин)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            422 / 1 700 - 4 000
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс крутящий момент об.мин
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1 700 - 4 000
          </div>
        </div>

        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Трансмиссия</div>
        </div>
        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Тип трансмиссии
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            8DCT
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Конфигурация привода
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            4WD
          </div>
        </div>

        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Расход топлива</div>
        </div>
        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Вид топлива
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            Бензин
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Объем топливного бака
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            67
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс мощность (кВт)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            206,7/ 5 800
          </div>
        </div>

        <h3 className="text-[30px] font-medium text-center mt-[60px] mb-[20px]">Размер</h3>
        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Экстерьер</div>
        </div>
        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая длина (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            4 830
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая ширина (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1 900
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая высота (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1 745 (1795* с рейлингами)
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колесная база (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            2 815
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колея передняя
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1 643
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колея задняя
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1 653
          </div>
        </div>

        <h3 className="text-[30px] font-medium text-center mt-[60px] mb-[20px]">Колеса</h3>
        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Экстерьер</div>
        </div>
        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Передние шины
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            235/60R18, 255/45R20, 245/45R21
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Задние шины
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            235/60R18, 255/45R20, 245/45R21
          </div>
        </div>
      </div>
    </div>
  );
};
