"use client";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1440px] w-full m-auto px-6">
        <h2 className="text-center mb-12 font-valueSansProBold md:text-4xl text-3xl">
          Tjek vandkvaliteten i din kommune
        </h2>
      </div>
      <section className="w-full px-6 py-8 flex m-auto items-center h-full justify-center bg-white">
        <div className="max-w-[1260px] flex px-6 flex-col items-center gap-5">
          <video
            controls
            className="w-[1000px] rounded-lg"
            src="/videos/vid2.mp4 "
            poster="/images/pages/installation/poster.png"
            preload="none"
          ></video>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default page;
