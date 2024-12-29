"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import Accordion from "@/components/Accordion";
import FAQSection from "@/components/Home/FAQSection";
import ProductInformation from "@/components/Products/ProductInformation";
import FilterInfo from "@/components/Products/FilterInfo";
import { PurchaseOptionFilter } from "@/utils/type";
import { miloFilter, productHelps } from "@/constants/data";
import { useCart } from "@/context/CartContext";

const Page = () => {
  const [option, setOption] = useState<PurchaseOptionFilter | undefined>(
    undefined
  );
  const { addToCart } = useCart();
  const [selectOption, setSelectOption] = useState<string>("Filterabonnement");

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setOption(miloFilter.purchaseOptions[0]);
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
          <Swiper className="main-slider mb-8">
            <SwiperSlide>
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src={`/images/products/milo-filter/1.jpg`}
                  width={400}
                  height={400}
                  alt={`Product image`}
                  className="rounded-lg w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex md:items-center items-start gap-2 justify-between w-full md:flex-row flex-col">
            <h2 className="font-valueSansProBold text-3xl">MILO Filter</h2>
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

          <p>{miloFilter.description}</p>

          <div className="w-full">
            <h2 className="font-valueSansProBold text-xl w-full">
              Vælg filter abonnement:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {miloFilter.purchaseOptions.map((item, index) => {
                return (
                  <div
                    key={`option-${index}`}
                    onClick={() => {
                      setSelectOption(item.option);
                      setOption(item);
                    }}
                    className="px-4 py-8 flex flex-col items-start border-2 rounded-lg gap-2 border-primary-text w-full justify-start relative"
                  >
                    {item.saveMoney && (
                      <div className="absolute top-[-10px] bg-button-text-secondary text-sm text-white px-2 py-1 right-[-10px]">
                        Spar penge
                      </div>
                    )}
                    <div className="w-full flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full border-primary-text">
                          {selectOption === item.option && (
                            <div className="p-2 bg-primary-text rounded-full"></div>
                          )}
                        </div>
                        <h2 className="text-sm">{item.option}</h2>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <div>
                          <Image
                            src="/images/products/milo-filter/icon-filter.png"
                            width={18}
                            height={18}
                            alt="filter"
                          />
                        </div>
                        <div>
                          <p>Filter</p>
                          <div className="flex gap-1 items-center">
                            <span className="text-product-card-text">
                              {item.offer ? item.offer : item.price} kr
                            </span>
                            {item.offer > 0 && (
                              <span className="line-through text-slate-400">
                                {item.price} kr
                              </span>
                            )}
                          </div>
                          <p className="text-sm">3 mdr. forbrug.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        {item?.benefits.map((item, index) => (
                          <div key={index}>
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/icons/tick.svg"
                                width={32}
                                height={32}
                                alt="tick"
                              />
                              <span>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer mt-2"
              onClick={openPopup}
            >
              <Image
                src="/images/icons/about.svg"
                width={20}
                height={20}
                alt="about"
              />
              <p className="text-sm">Hvorfor vælge filterabonnement?</p>
            </div>
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
