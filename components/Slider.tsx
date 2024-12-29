import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

interface SlideData {
  id: number;
  imageSrc: string;
  link: string;
  title: string;
}

interface SliderProps {
  slides: SlideData[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link
            href={slide.link}
            className="flex flex-col items-center justify-center h-full"
          >
            <Image
              src={slide.imageSrc}
              height={500}
              width={500}
              alt={slide.title}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-left text-3xl font-valueSansProBold">
              {slide.title}
            </h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
