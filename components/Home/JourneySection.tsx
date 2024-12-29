import React from "react";
import Image from "next/image";

const JourneySection = () => {
  return (
    <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
      <div className="md:grid lg:grid-cols-[1.5fr_0.8fr] grid-cols-[1fr_1fr] flex flex-col gap-8 items-center w-full">
        <div className="flex justify-start overflow-hidden">
          <Image
            src="/images/home/2.jpg"
            width={580}
            height={580}
            alt=""
            className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
          />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <h2 className="font-valueSansProBold text-5xl">
            Fra idé til virkelighed
          </h2>
          <p>
            Fra en idé i 2022 til en virksomhed, der i dag udfordrer giganterne
            i en konservativ industri. Læs om hvordan Showerlabs blev til, og
            hvordan vi omdefinerer fremtidens brusehoved.
          </p>
          <button className="text-white bg-primary-text hover:bg-transparent px-8 md:px-12 py-2 text-lg md:text-xl transition-3s border-4 hover:border-white border-primary-text font-semibold rounded-lg">
            Læs historien bag Showerlabs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
