import { FC, useState } from 'react';

import { Select } from 'antd';

export interface CarsPalisadeSpecificationsProps {}

export const CarsPalisadeSpecifications: FC<CarsPalisadeSpecificationsProps> = () => {
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
            <Select.Option value={0}>3.5 MPi 8 AT 4WD ( Family )</Select.Option>
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
            Lambda II 3.5 MPi
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Рабочий объем (см3)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            3,470
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
            249/6,300
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Ускорение (0-100 км/ч) (сек)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            8,1
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Тормозной путь (100-0 км/ч) (м)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            43,1
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Количество цилиндров
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            6
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Клапанов на цилиндр
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            24
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
            8АКПП
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Конфигурация привода
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            FWD
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
            Расход топлива (город)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            14,9
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Расход топлива (трасса)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            8,1
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Расход топлива (смешанный цикл)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            10,6
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Выбросы СО2 (смешанный цикл)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            248
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Макс мощность (кВт)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            183(6300)
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
            4,995
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая ширина (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1,975
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Общая высота (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1,750
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Колесная база (мм)
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            2,900
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Передний свес
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            965
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Задний свес
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1130
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Объем багажника
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            1297(509)
          </div>
        </div>

        <h3 className="text-[30px] font-medium text-center mt-[60px] mb-[20px]">Колеса</h3>
        <div className="grid grid-cols-12 bg-primary text-white py-[10px]">
          <div className="col-span-12 text-center">Экстерьер</div>
        </div>
        <div className="grid grid-cols-12 bg-white text-gray-800 border-b">
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Передний колесный диск
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            Легкосплавные диски 20''
          </div>
          <div className="col-span-4 py-[10px] px-[30px] bg-[#F6F3F2]  border border-solid  border-[#E4DCD3]  border-t-0 border-r-0">
            Задний колесный диск
          </div>
          <div className="col-span-8 py-[10px] px-[30px]  border border-solid  border-[#E4DCD3] border-t-0">
            Легкосплавные диски 20''
          </div>
        </div>
      </div>
    </div>
  );
};
