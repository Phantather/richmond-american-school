import { useEffect, useLayoutEffect, useState } from 'react';
import { Slider, Spin } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PanInput, useAxes } from '@egjs/react-axes';

import 'swiper/css';
import 'swiper/css/navigation';

import check from '~shared/assets/ico-chk-on.png';

import wheel1 from '~shared/assets/sonata/gls-18-alloy.jpg';
import wheel2 from '~shared/assets/sonata/gls-17-alloy.jpg';
import wheel3 from '~shared/assets/sonata/gls-16-alloy.jpg';

import color1 from '~shared/assets/sonata/abyss-black-pearl.jpg';
import color2 from '~shared/assets/sonata/aero-silver-matte.jpg';
import color3 from '~shared/assets/sonata/aero-silver-metallic.jpg';
import color4 from '~shared/assets/sonata/atlas-white.jpg';
import color5 from '~shared/assets/sonata/ultimate-red-metallic.jpg';
import color6 from '~shared/assets/sonata/nocturne-gray-matte.jpg';
import color7 from '~shared/assets/sonata/nocturne-gray-metallic.jpg';
import color8 from '~shared/assets/sonata/serenity-white-pearl.jpg';
import color9 from '~shared/assets/sonata/transmission-blue-pearl.jpg';
import color10 from '~shared/assets/sonata/biophillic-blue-pearl.jpg';
import {
  useCarsSonataDesign,
  useSetCarsSonataDesignr,
} from '~entities/cars/sonata/CarsSonataDesign/model';

const colors = [
  { id: 1, src: color1, title: 'Черный / Abyss Black Pearl' },
  { id: 10, src: color2, title: 'Aero Silver Matte' },
  { id: 11, src: color3, title: 'Aero Silver Metallic' },
  { id: 3, src: color4, title: 'Atlas White' },
  { id: 9, src: color5, title: 'Ultimate Red Metallic' },
  { id: 13, src: color6, title: 'Nocturne Gray Matte' },
  { id: 14, src: color7, title: 'Nocturne Gray Metallic' },
  { id: 15, src: color8, title: 'Serenity White Pearl' },
  { id: 16, src: color9, title: 'Transmission Blue Pearl' },
  { id: 12, src: color10, title: 'Biophillic Blue Pearl' },
];

const wheels = [
  { id: 3, src: wheel1, title: '18-дюймовые легкосплавные диски' },
  { id: 2, src: wheel2, title: '17-дюймовые легкосплавные диски' },
  { id: 1, src: wheel3, title: '16-дюймовые легкосплавные диски' },
];

export const CarsSonataDesignViewer = () => {
  const sonataDesign = useCarsSonataDesign();
  const setSonataDesign = useSetCarsSonataDesignr();
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedWheel, setSelectedWheel] = useState(3);
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
    if (!sonataDesign) {
      setLoading(true);

      setSonataDesign({ id_vehicle: 2, id_color: selectedColor, id_size: selectedWheel }).finally(
        () => setLoading(false)
      );
    }
  }, [sonataDesign, selectedColor, selectedWheel, setSonataDesign]);

  const handleColorClick = (id: any) => {
    setLoading(true);

    setSelectedColor(id);
    setSonataDesign({ id_vehicle: 2, id_color: id, id_size: selectedWheel });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleWheelClick = (id: any) => {
    setLoading(true);

    setSelectedWheel(id);
    setSonataDesign({ id_vehicle: 2, id_color: selectedColor, id_size: id });

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
          <div className="img_cont" style={{ position: 'relative', zIndex: 10 }}>
            {images.map((i) => (
              <img
                key={i}
                src={sonataDesign?.[i]?.image_name || ''}
                alt={`sonata_view_360_deg_${i}`}
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
      <div className="col-span-12 sm:col-span-8 xs:col-span-4  grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4  mb-[68px] items-center">
        <div className="col-span-4">
          <h3>Цвет кузова</h3>
          <p>{getColorTitle()}</p>
        </div>
        <div className="col-span-8 sm:col-span-8 xs:col-span-4  flex items-center gap-[28px]">
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
            <div className="absolute top-1/2 left-0  -translate-x-[200%] sm:-translate-x-[80%] -translate-y-1/2 prev cursor-pointer">
              &#60;
            </div>
            <div className="absolute top-1/2 right-0  translate-x-[200%] sm:translate-x-[80%]  -translate-y-1/2 next cursor-pointer">
              &#62;
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 xs:col-span-4 grid grid-cols-12 sm:grid-cols-8 xs:grid-cols-4 items-center">
        <div className="col-span-4 sm:col-span-8 xs:col-span-4 sm:mb-[20px]">
          <h3>Колеса</h3>
          <p>{getWheelTitle()}</p>
        </div>
        <div className="col-span-8 sm:col-span-8 xs:col-span-4 flex items-center gap-[28px]">
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
