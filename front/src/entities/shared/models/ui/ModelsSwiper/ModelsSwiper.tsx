import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

import { Link, RoutesUrls } from '~shared/lib/router';

import santafe from '../../../../../../public/assets/cars/santafe.png';
import elantra from '../../../../../../public/assets/cars/elantra.png';
import sonata from '../../../../../../public/assets/cars/sonata.png';
import tuscon from '../../../../../../public/assets/cars/tuscon.png';
import palisade from '../../../../../../public/assets/cars/palisade.png';
import staria from '../../../../../../public/assets/cars/staria.png';
import mufasa from '../../../../../../public/assets/cars/mufasa.png';

export const ModelsSwiper = () => {
  return (
    <div className="col-span-12 sm:col-span-8 xs:col-span-4 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="models-swiper !p-[50px_0] md:!p-[20px_0]"
      >
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsMufasa}?part=features`}>
              <img src={mufasa} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">MUFASA</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsSantaFe}?part=features`}>
              <img src={santafe} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">SANTA FE</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsPalisade}?part=features`}>
              <img src={palisade} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">PALISADE</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsSonata}?part=features`}>
              <img src={sonata} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">SONATA</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsNewTuscon}?part=features`}>
              <img src={tuscon} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">НОВЫЙ TUCSON</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsElantra}?part=features`}>
              <img src={elantra} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">ELANTRA</h3>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link to={`${RoutesUrls.carsStaria}?part=features`}>
              <img src={staria} alt="car" className="w-full !h-full" width="600" height="400" />
              <h3 className="text-[30px] font-medium uppercase mt-[20px]">STARIA</h3>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
