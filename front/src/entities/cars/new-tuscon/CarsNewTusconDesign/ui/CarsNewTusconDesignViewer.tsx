import { useEffect, useLayoutEffect, useState } from 'react';
import { Slider, Spin } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PanInput, useAxes } from '@egjs/react-axes';

import 'swiper/css';
import 'swiper/css/navigation';

import check from '~shared/assets/ico-chk-on.png';

import wheel1 from '~shared/assets/new-tuscon/gls-17-alloy.jpg';
import wheel2 from '~shared/assets/new-tuscon/gls-18-alloy.jpg';
import wheel3 from '~shared/assets/new-tuscon/gls-19-alloy.jpg';

import color1 from '~shared/assets/new-tuscon/amazon-gray.jpg';
import color2 from '~shared/assets/new-tuscon/creamy-white-pearl.jpg';
import color3 from '~shared/assets/new-tuscon/cashmere-bronze-metal.jpg';
import color4 from '~shared/assets/new-tuscon/ocean-indigo-pearl.jpg';
import color5 from '~shared/assets/new-tuscon/ultimate-red-metallic.jpg';
import color6 from '~shared/assets/new-tuscon/phantom-black-pearl.jpg';
import color7 from '~shared/assets/new-tuscon/shimmering-sliver.jpg';
import color8 from '~shared/assets/new-tuscon/titan-gray-metallic.jpg';
import color9 from '~shared/assets/new-tuscon/pinegreen-metallic-matt.jpg';
import {
  useCarsNewTusconDesign,
  useSetCarsNewTusconDesignr,
} from '~entities/cars/new-tuscon/CarsNewTusconDesign/model';

const colors = [
  { id: 17, src: color1, title: 'Серый / Amazon gray' },
  { id: 19, src: color2, title: 'Белый / Creamy white pearl' },
  { id: 18, src: color3, title: 'Cashmere bronze metallic' },
  { id: 20, src: color4, title: 'Ocean indigo pearl' },
  { id: 9, src: color5, title: 'Красный / Ultimate red metallic' },
  { id: 21, src: color6, title: 'Черный / Phantom Black Pearl' },
  { id: 23, src: color7, title: 'Shimmering silver metallic' },
  { id: 24, src: color8, title: 'Серый / Titan gray metallic' },
  { id: 22, src: color9, title: 'Зеленый / Pine green matte' },
];

const wheels = [
  { id: 2, src: wheel1, title: '17-дюймовые легкосплавные диски' },
  { id: 3, src: wheel2, title: '18-дюймовые легкосплавные диски' },
  { id: 4, src: wheel3, title: '18-дюймовые легкосплавные диски' },
];

export const CarsNewTusconDesignViewer = () => {
  const newTusconDesign = useCarsNewTusconDesign();
  const setNewTusconDesign = useSetCarsNewTusconDesignr();
  const [selectedColor, setSelectedColor] = useState(17);
  const [selectedWheel, setSelectedWheel] = useState(2);
  const [progress, setProgress] = useState(0);
  const [isProgressComplete, setIsProgressComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const images = Array.from({ length: 36 }, (_, i) => i);
  const { connect, setTo, angle } = useAxes(
    {
      angle: {
        range: [0, 360],
        circular: true,
      },
    },
    {
      deceleration: 0.01,
    }
  );

  useEffect(() => {
    connect('angle', new PanInput('.car_rotate'));
  }, [connect]);

  useLayoutEffect(() => {
    if (!newTusconDesign) {
      setLoading(true);

      setNewTusconDesign({
        id_vehicle: 3,
        id_color: selectedColor,
        id_size: selectedWheel,
      }).finally(() => setLoading(false));
    }
  }, [newTusconDesign, selectedColor, selectedWheel, setNewTusconDesign]);

  const handleColorClick = (id: any) => {
    setLoading(true);

    setSelectedColor(id);
    setNewTusconDesign({ id_vehicle: 3, id_color: id, id_size: selectedWheel });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleWheelClick = (id: any) => {
    setLoading(true);

    setSelectedWheel(id);
    setNewTusconDesign({ id_vehicle: 3, id_color: selectedColor, id_size: id });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleImageClick = () => {
    if (isProgressComplete) {
      return;
    }

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsProgressComplete(true);

          return 100;
        }

        return prev + 1;
      });
    };

    const interval = setInterval(() => {
      requestAnimationFrame(updateProgress);
    }, 3);

    return () => clearInterval(interval);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setTo({ angle: value * 10 });
  };

  const getColorTitle = () => {
    const color = colors.find((color) => color.id === selectedColor);

    return color ? color.title : '';
  };

  const getWheelTitle = () => {
    const wheel = wheels.find((wheel) => wheel.id === selectedWheel);

    return wheel ? wheel.title : '';
  };

  return (
    <>
      <h2 className="col-span-12 sm:col-span-8 xs:col-span-4 text-[48px] font-medium text-center">
        360° Виртуальный тур
      </h2>
      <p className="col-span-12 sm:col-span-8 xs:col-span-4 text-center m-[30px_0_40px]">
        Нажимайте и поворачивайте изображение автомобиля влево или вправо.
      </p>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 w-[300px] mx-auto">
        <Slider
          min={0}
          max={35}
          value={sliderValue}
          tooltip={{ open: false }}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
      <div
        className="col-span-12 sm:col-span-8 xs:col-span-4 flex justify-center items-center car_rotate"
        onClick={handleImageClick}
      >
        <div className="w-[814px] h-[450px] sm:w-full sm:h-[290px] relative car_spot">
          <div className="img_cont" style={{ position: 'relative', zIndex: 9 }}>
            {images.map((i) => (
              <img
                key={i}
                src={newTusconDesign?.[i]?.image_name || ''}
                alt={`new_tuscon_view_360_deg_${i}`}
                style={{
                  display: Math.floor((angle % 360) / 10) === i ? 'inline-block' : 'none',
                }}
                className="!w-full !h-full cursor-pointer"
              />
            ))}
          </div>
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 cursor-pointer z-10">
              <Spin />
            </div>
          )}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  mb-[68px] items-center">
        <div className="col-span-4 sm:col-span-8 xs:col-span-4">
          <h3>Цвет кузова</h3>
          <p>{getColorTitle()}</p>
        </div>
        <div className="col-span-8 sm:col-span-8 xs:col-span-4 flex items-center gap-[28px]">
          <div className="relative w-full">
            <Swiper
              slidesPerView={8}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                375: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                425: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                500: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                576: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 5,
                },
              }}
              spaceBetween={5}
              pagination={false}
              navigation={{
                nextEl: '.next',
                prevEl: '.prev',
              }}
              modules={[Navigation]}
              className="p-[20px_0]"
            >
              {colors.map((color) => (
                <SwiperSlide key={color.id}>
                  <div
                    className="w-[60px] h-[60px] cursor-pointer relative"
                    onClick={() => handleColorClick(color.id)}
                  >
                    <img
                      className="w-full h-full cursor-pointer"
                      src={color.src}
                      alt={`${color?.title}_${color?.id}`}
                    />

                    {selectedColor === color.id && (
                      <img
                        className="!w-[18px] !h-[18px] absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 z-10"
                        src={check}
                        alt="check"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-1/2 left-0 -translate-x-[200%] sm:-translate-x-[80%] -translate-y-1/2 prev cursor-pointer">
              &#60;
            </div>
            <div className="absolute top-1/2 right-0  translate-x-[200%] sm:translate-x-[80%] -translate-y-1/2 next cursor-pointer">
              &#62;
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  items-center">
        <div className="col-span-4 sm:col-span-8 xs:col-span-4 sm:mb-[20px]">
          <h3>Колеса</h3>
          <p>{getWheelTitle()}</p>
        </div>
        <div className="col-span-8  sm:col-span-8 xs:col-span-4 flex items-center gap-[28px]">
          {wheels?.map((wheel) => (
            <div
              key={wheel.id}
              className="cursor-pointer relative w-[60px] h-[60px]"
              onClick={() => handleWheelClick(wheel.id)}
            >
              <img
                className="w-full h-full cursor-pointer"
                src={wheel.src}
                alt={`${wheel?.title}_${wheel?.id}`}
              />

              {selectedWheel === wheel.id && (
                <img
                  className="!w-[18px] !h-[18px] absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
                  src={check}
                  alt="check"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
