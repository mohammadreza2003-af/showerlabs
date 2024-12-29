"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import Accordion from "@/components/Accordion";
import FAQSection from "@/components/Home/FAQSection";
import { type PurchaseOption } from "@/utils/type";
import { miloBrusehoved } from "@/constants/data";
import ProductSpecifications from "@/components/Products/ProductSpecifications";
import MiloShowerInfo from "@/components/Products/MiloShowerInfo";
import ProductHelp from "@/components/Products/ProductHelp";
import ProductInformation from "@/components/Products/ProductInformation";
import FilterInfo from "@/components/Products/FilterInfo";
import OtherSaying from "@/components/Products/OtherSaying";
import { useCart } from "@/context/CartContext";

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const [option, setOption] = useState<PurchaseOption | undefined>(undefined);
  const [selectOption, setSelectOption] = useState<string>(
    "Med filterabonnement"
  );

  const { addToCart } = useCart();

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openPopup = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveVideo(null);
  };

  useEffect(() => {
    setOption(miloBrusehoved.purchaseOptions[0]);
  }, []);

  const handleAddToCart = () => {
    if (option?.products) {
      option.products.forEach((product) => addToCart(product));
    }
  };

  return (
    <div>
      <div className="relative p-6 max-w-[1400px] w-full mx-auto lg:grid lg:grid-cols-2 gap-8 mb-24 mt-32 text-secondary-text">
        <div>
          <Swiper
            modules={[Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="main-slider mb-8"
          >
            {Array.from({ length: 6 }, (_, i) => (
              <SwiperSlide key={`main-slide-${i}`}>
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src={`/images/products/milo-brusehoved/${i + 1}.jpg`}
                    width={400}
                    height={400}
                    alt={`Product image ${i + 1}`}
                    className="rounded-lg w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={10}
            className="thumb-slider"
            wrapperClass="lg:!grid lg:!grid-cols-2 gap-8"
            breakpoints={{
              1000: {
                slidesPerView: 2,
              },
            }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <SwiperSlide key={`thumb-slide-${i}`}>
                <Image
                  src={`/images/products/milo-brusehoved/${i + 1}.jpg`}
                  width={600}
                  height={600}
                  alt={`Thumbnail image ${i + 1}`}
                  className="rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex md:items-center items-start gap-2 justify-between w-full md:flex-row flex-col">
            <h2 className="font-valueSansProBold text-3xl">MILO Brusehoved</h2>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }, (_, i) => (
                  <Image
                    key={i}
                    src="/images/icons/full-review.svg"
                    width={18}
                    height={18}
                    alt="review"
                  />
                ))}
                <Image
                  src="/images/icons/half-review.svg"
                  width={18}
                  height={18}
                  alt="review"
                />
              </div>
              <div className="flex items-center gap-1">
                <span>4.7</span>
                <span className="underline">(500+ anmeldelser)</span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-2 justify-start items-start">
            {miloBrusehoved.miloBrusehovedLabels.map((item, index) => (
              <span
                className="p-2 bg-[#f5f5f5] text-sm rounded-2xl"
                key={`label-${index}`}
              >
                {item.content}
              </span>
            ))}
          </div>
          <p>{miloBrusehoved.description}</p>

          <div className="w-full">
            <h2 className="font-valueSansProBold text-2xl w-full">
              Købsmuligheder:
            </h2>
            <div className="flex flex-col gap-4 mt-4">
              {miloBrusehoved.purchaseOptions.map((item, index) => {
                return (
                  <div
                    key={`option-${index}`}
                    onClick={() => {
                      setSelectOption(item.option);
                      setOption(item);
                    }}
                    className="px-4 py-8 flex flex-col items-start border-2 rounded-lg gap-2 border-primary-text w-full justify-start"
                  >
                    <div className="border-b border-primary-text w-full flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full border-primary-text">
                          {selectOption === item.option && (
                            <div className="p-2 bg-primary-text rounded-full"></div>
                          )}
                        </div>
                        <h2 className="font-valueSansProBold text-xl">
                          {item.option}
                        </h2>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-product-card-text">
                          {item.offer} kr
                        </span>
                        <span className="line-through text-slate-400">
                          {item.price} kr
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>
                        <strong className="font-valueSansProBold">
                          Indeholder:{" "}
                        </strong>
                        {item.contains.description}
                      </p>
                      <p>
                        {item.contains.description2}{" "}
                        <span className="line-through text-slate-400">
                          {item.contains.offer}
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-slate-600">{item.hint}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/images/products/milo-brusehoved/reviewer.jpg"
                width={96}
                height={96}
                alt="reviewer"
              />
            </div>
            <div>
              <p className="mb-2">
                &#34;Et filter af aktivt kul og FOF-salt reducerer urenheder i
                vandet, hvilket forbedrer hudens og hårets sundhed ved at
                mindske irritation, tørhed og styrketab.&#34;
              </p>
              <p className="font-valueSansProBold ">
                Gazelle Doroudian - Speciallæge i almen medicin{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 px-3 py-2 rounded-xl">
            <Image
              src="/images/icons/waterbottle.png"
              width={24}
              height={24}
              alt="waterbottle"
            />
            <p>
              <strong>Vi donerer 10 liter drikkevand per ordre.</strong> Støt
              familier i Afrika og Sydamerika.
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-white bg-button-background-primary py-6 w-full rounded-lg  text-xl transition-3s hover:scale-105"
          >
            Tilføj til kurv • {" "}
            <strong className="font-valueSansProBold">
              {option?.offer ? option.offer : option?.price} kr
            </strong>
          </button>
          <div className="flex items-center justify-center gap-2 w-full">
            <Image
              src="/images/icons/car-box.svg"
              width={18}
              height={18}
              alt="car-box"
            />
            <p>
              <strong className="font-valueSansProBold">Fri fragt</strong> og
              leveret indenfor{" "}
              <strong className="font-valueSansProBold">1-3 hverdage.</strong>
            </p>
          </div>
          <OtherSaying openPopup={openPopup} />
          <div className="w-full">
            {miloBrusehoved.faqs.map((item, index) => (
              <Accordion
                style="text-secondary-text "
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <FilterInfo />
      <ProductInformation />
      <ProductHelp />
      <MiloShowerInfo />
      <FAQSection />
      <ProductSpecifications />
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 w-[90%] max-w-[800px]">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            {activeVideo && (
              <iframe
                width="100%"
                height="400"
                src={activeVideo}
                allowFullScreen
                className="rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
