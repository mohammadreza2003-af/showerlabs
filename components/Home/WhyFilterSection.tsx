import React from "react";
import Image from "next/image";

const WhyFilterSection = () => {
  return (
    <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
      <div className="flex flex-col items-start gap-16">
        <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full">
          <div className="flex flex-col gap-6 items-start">
            <h2 className="font-valueSansProBold text-5xl">
              Hvorfor filtrere mit vand?
            </h2>
            <p>
              Dit badevand indeholder kalk, pesticider, tungmetaller, PFAS og
              andre skadelige kemikalier. Det udtørrer og ælder din hud, og
              reducerer dit hårs styrke, glans og farve.
            </p>
            <button className="text-white bg-primary-text hover:bg-transparent px-8 md:px-12 py-2 text-lg md:text-xl transition-3s border-4 hover:border-white border-primary-text font-semibold rounded-lg">
              Køb i dag
            </button>
          </div>
          <div className="flex justify-end overflow-hidden">
            <Image
              src="/images/home/1.jpg"
              width={580}
              height={580}
              alt=""
              className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFilterSection;
