import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageCarousel.css";

const images = [
  "/images/imagecar1.jpg",
  "/images/imagecar2.jpg",
  "/images/imageCar3.jpg",
  "/images/imageCar4.jpg",
  "/images/imageCar5.jpg",
  "/images/imageCar6.jpg",
  "/images/imageCar7.jpg",
];

const ImageCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        spaceBetween={-850}
        initialSlide={3}
        breakpoints={{
          320: {
            spaceBetween: -200,
            coverflowEffect: { rotate: 30, stretch: 40, depth: 100 },
          },
          640: {
            spaceBetween: -400,
            coverflowEffect: { rotate: 40, stretch: 60, depth: 150 },
          },
          1024: {
            spaceBetween: -650,
            coverflowEffect: { rotate: 50, stretch: 75, depth: 200 },
          },
          1440: {
            spaceBetween: -850,
            coverflowEffect: { rotate: 60, stretch: 90, depth: 250 },
          },
        }}
        coverflowEffect={{
          rotate: 60,
          stretch: 90,
          depth: 250,
          modifier: 1.9,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
