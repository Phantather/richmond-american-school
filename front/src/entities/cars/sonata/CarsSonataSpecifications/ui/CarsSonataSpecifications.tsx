import { FC, useState } from 'react';

import { Select } from 'antd';

export interface CarsSonataSpecificationsProps {}

export const CarsSonataSpecifications: FC<CarsSonataSpecificationsProps> = () => {
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
            <Select.Option value={0}>Sonata 8AT ( SONATA ) </Select.Option>
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
            Рабочий объем (см3)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            2497
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс скорость (км/ч)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            210
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс мощность (л.с./об.мин)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            194 / 6100
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс крутящий момент об.мин
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            246 / 4000
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Количество цилиндров
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            4
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Клапанов на цилиндр
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            4
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
            8AT
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Конфигурация привода
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            Передний
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
            Бензин с октановым числом не менее 92
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Объем топливного бака
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            60 л
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
            4910
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая ширина (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1860
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая высота (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1445 или 1465
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колесная база (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            2 840
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колея передняя
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1615 … 1627
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колея задняя
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1618 … 1638
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
            18″ ( 235/45R18), 17″ ( 215/55R17), 16″ (215/60R16)
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Задние шины
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            18″ ( 235/45R18), 17″ ( 215/55R17), 16″ (215/60R16)
          </div>
        </div>
      </div>
    </div>
  );
};
