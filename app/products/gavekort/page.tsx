"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import Accordion from "@/components/Accordion";
import FAQSection from "@/components/Home/FAQSection";
import ProductInformation from "@/components/Products/ProductInformation";
import FilterInfo from "@/components/Products/FilterInfo";
import { miloFilter, productHelps } from "@/constants/data";
import { useCart } from "@/context/CartContext";
import { Thumbs } from "swiper/modules";

const Page = () => {
  const { addToCart } = useCart();
  const [selectOption, setSelectOption] = useState<{
    index: number;
    value: number;
  }>({
    index: 0,
    value: 0,
  });
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddToCart = () => {
    addToCart({
      id: selectOption.value,
      img: `/images/products/gavekort/${selectOption.index}.jpg`,
      offer: 0,
      price: selectOption.value,
      title: "Gavekort",
    });
  };

  const listGiftCart = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500,
  ];

  const handleItemClick = (index: number, value: number) => {
    if (swiperInstance) {
      setSelectOption({ index: index + 1, value });
      swiperInstance.slideTo(index + 1);
    }
  };

  return (
    <div>
      <div className="relative p-6 max-w-[1400px] w-full mx-auto lg:grid lg:grid-cols-2 gap-8 mb-24 my-24 text-secondary-text">
        <div>
          <Swiper
            modules={[Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="main-slider mb-8"
            onSwiper={setSwiperInstance}
          >
            {Array.from({ length: 16 }, (_, i) => (
              <SwiperSlide key={`main-slide-${i}`}>
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src={`/images/products/gavekort/${i}.jpg`}
                    width={400}
                    height={400}
                    alt={`Product image ${i}`}
                    className="rounded-lg w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            className="thumb-slider"
            breakpoints={{
              1000: {
                slidesPerView: 10,
              },
            }}
          >
            {Array.from({ length: 16 }, (_, i) => (
              <SwiperSlide key={`thumb-slide-${i}`}>
                <Image
                  src={`/images/products/gavekort/${i}.jpg`}
                  width={55}
                  height={55}
                  alt={`Thumbnail image ${i}`}
                  className="rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex md:items-center items-start gap-2 justify-between w-full md:flex-row flex-col">
            <h2 className="font-valueSansProBold text-3xl md:my-0 my-2">
              Gavekort
            </h2>
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

          <p>
            Dette er ikke et fysisk gavekort. Dette gavekort bliver tilsendt på
            e-mail.
          </p>

          <div className="w-full">
            <h2 className="font-valueSansProBold text-xl w-full">
              Vælg filter abonnement:
            </h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {listGiftCart.map((item, index) => (
                <button
                  key={`gift-item-${index}`}
                  onClick={() => handleItemClick(index, item)}
                  className="py-3 px-1 flex items-center justify-center border rounded-lg"
                >
                  {item} kr
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-white bg-button-background-primary py-6 w-full rounded-lg  text-xl transition-3s hover:scale-105"
          >
            Tilføj til kurv
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
          <div className="w-full">
            {miloFilter.faqs.map((item, index) => (
              <Accordion
                style="text-secondary-text "
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-4 w-[90%] max-w-[600px]">
              <h2 className="font-valueSansProBold text-3xl">
                Hvorfor vælge abonnement?
              </h2>
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
              >
                ✖
              </button>
              <div className="w-full h-[1px] bg-primary-text/20 my-4 " />
              <div className="mt-4">
                <div>
                  <div className="mb-4">
                    <h3 className="font-valueSansProBold text-xl">
                      Altid filtreret vand i bruseren
                    </h3>
                    <p className="mt-2">
                      Før eller siden vil filteret blive fyldt op med al den
                      kalk og urenheder, som det har opsamlet, hvilket gør, at
                      filteret mister sin effekt. Vi sørger for, at du aldrig
                      glemmer at få det udskiftet.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <h3 className="font-valueSansProBold text-xl">
                      Annuller og ændr når som helst
                    </h3>
                    <p className="mt-2">
                      Du kan nemt annullere, pause, og styre din leveringsplan
                      via din online Showerlabs konto.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <h3 className="font-valueSansProBold text-xl">
                      Påmindelse 5 dage før
                    </h3>
                    <p className="mt-2">
                      Vi sender dig en e-mail før hver forsendelse. Hvis du ikke
                      er klar, kan du udskyde din levering. Du behøver ikke
                      bekymre dig, vi opkræver kun betaling, når din ordre
                      sendes.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <h3 className="font-valueSansProBold text-xl">
                      Altid gratis fragt
                    </h3>
                    <p className="mt-2">
                      Vi mener, at bekvemmelighed ikke skal koste ekstra. Derfor
                      tilbyder vi altid gratis fragt på dit filterabonnement,
                      uanset antallet af ordrer.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <h3 className="font-valueSansProBold text-xl">
                      Du sparer op til 29%
                    </h3>
                    <p className="mt-2">
                      Med vores abonnementsordning får du altid 20% rabat og får
                      gratis fragt på dit filter. Dette giver en samlet
                      besparelse på 29% i forhold til at købe et filter ad
                      gangen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FilterInfo />
      <ProductInformation />
      <section className="w-full px-6 py-20 flex items-center justify-center text-white bg-primary-text">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 max-w-[1360px] w-full">
          {productHelps.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c3637] py-8 flex flex-col items-center justify-center gap-4 rounded-lg"
            >
              <Image src={item.img} width={64} height={64} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <FAQSection />
    </div>
  );
};

export default Page;
