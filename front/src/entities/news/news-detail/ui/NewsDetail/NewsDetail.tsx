import React, { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { NewsDetailItem } from '~entities/news';
import { dayjs } from '~shared/lib/time/dayjs';
import { useWindowInnerWidth } from '~shared/ui';

export interface NewsDetailProps {
  newsDetail: NewsDetailItem;
}

export const NewsDetail: FC<NewsDetailProps> = ({ newsDetail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const windowWidth = useWindowInnerWidth();

  return (
    <div className="col-span-12">
      <h1 className="text-[48px] font-semibold">{newsDetail?.title}</h1>
      <p className="text-gray text-[16px] my-[20px]">
        {dayjs(newsDetail?.date).locale('ru').format('D MMMM, YYYY')}
      </p>
      {windowWidth > 768 ? (
        <div className="grid gap-[10px]">
          {newsDetail?.main_images?.length > 1 ? (
            <>
              <Swiper
                spaceBetween={10}
                // navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper2"
              >
                {newsDetail?.main_images?.map((image, idx) => (
                  <SwiperSlide key={`${image?.id}_${idx}`}>
                    <img src={image?.url} alt={newsDetail?.title} className="w-full !h-[640px]" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode
                watchSlidesProgress
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {newsDetail?.main_images?.map((image, idx) => (
                  <SwiperSlide key={`${image?.id}_${idx}`}>
                    <img src={image?.url} alt={newsDetail?.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <>
              <img
                className="w-full h-[640px] object-cover"
                src={newsDetail?.main_images?.[0]?.url}
                alt={newsDetail?.title}
              />
            </>
          )}
        </div>
      ) : (
        <div className="grid gap-[10px]">
          {newsDetail?.main_images?.length > 1 ? (
            <>
              <Swiper
                spaceBetween={10}
                // navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, FreeMode]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper2"
              >
                {newsDetail?.main_images?.map((image, idx) => (
                  <SwiperSlide key={`${image?.id}_${idx}`}>
                    <img
                      src={image?.url}
                      alt={newsDetail?.title}
                      className="w-full !h-[340px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <>
              <img
                className="w-full h-[640px] sm:h-[400px] xs:h-[300px] object-cover"
                width="640"
                height="640"
                src={newsDetail?.main_images?.[0]?.url}
                alt={newsDetail?.title}
              />
            </>
          )}
        </div>
      )}

      <div className="mt-[40px]">
        {newsDetail?.content?.map((contentItem) => (
          <div key={contentItem.id} className="mb-12">
            {/* Render the HTML content */}
            <div dangerouslySetInnerHTML={{ __html: contentItem.description }} className="mb-6" />

            {/* Dynamic images display */}
            {contentItem.images?.length > 0 && (
              <div className="mt-6">
                {contentItem.images.length === 1 ? (
                  // Single image display
                  <img
                    src={contentItem.images[0].url}
                    alt={contentItem.images[0].name}
                    className="w-full max-h-[500px] object-cover"
                  />
                ) : (
                  // Multiple images slider
                  <div className="relative">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={Math.min(contentItem.images.length, 2)}
                      navigation
                      modules={[Navigation]}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: Math.min(contentItem.images.length, 2) },
                        1024: { slidesPerView: Math.min(contentItem.images.length, 3) },
                      }}
                      className="content-images-slider"
                    >
                      {contentItem.images.map((image) => (
                        <SwiperSlide key={image.id}>
                          <div className="h-[300px] sm:h-[400px]">
                            <img src={image.url} alt={image.name} className="w-full h-full" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
