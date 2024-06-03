"use client";
// ./components/ImageSlider.tsx
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },

        0: {
          slidesPerView: 1,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`/slides/${src}.jpeg`}
            alt={`Slide ${index}`}
            width={1500}
            height={250}
            className="w-full pb-6 md:pb-8 "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
