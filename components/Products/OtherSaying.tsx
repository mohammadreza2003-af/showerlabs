import { miloBrusehoved } from "@/constants/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

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
        {miloBrusehoved.otherSaying.map((_, index) => (
          <SwiperSlide key={`other-say-${Math.random()}`}>
            <div
              key={`video-${index}`}
              className="w-[100px] overflow-hidden border-4 border-double border-primary-text rounded-lg"
              onClick={() =>
                openPopup(
                  `/images/products/milo-brusehoved/other-say/${index + 1}.mp4`
                )
              }
            >
              <Image
                width="100"
                height="300"
                src={`/images/products/milo-brusehoved/other-say/${
                  index + 1
                }.jpg`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherSaying;
