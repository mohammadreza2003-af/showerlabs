import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const otherSayingItems = [
  {
    source: "/images/products/other/1.mp4",
    poster: "/images/products/other/1.jpg",
  },
  {
    source: "/images/products/other/2.mp4",
    poster: "/images/products/other/2.jpg",
  },
  {
    source: "/images/products/other/3.mp4",
    poster: "/images/products/other/3.jpg",
  },
  {
    source: "/images/products/other/4.mp4",
    poster: "/images/products/other/4.jpg",
  },
  {
    source: "/images/products/other/5.mp4",
    poster: "/images/products/other/5.jpg",
  },
  {
    source: "/images/products/other/6.mp4",
    poster: "/images/products/other/6.jpg",
  },
];

const OtherSaying = ({ openPopup }: { openPopup: (value: string) => void }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={3}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
      >
        {otherSayingItems.map((item, index) => (
          <SwiperSlide key={`other-say-${Math.random()}`}>
            <div
              className="w-[100px] overflow-hidden border-4 border-double border-primary-text rounded-lg"
              onClick={() =>
                openPopup(`/images/products/other/${index + 1}.mp4`)
              }
            >
              <Image width="100" height="300" src={item.poster} alt="saying" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherSaying;
