import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full text-primary-text px-6 py-20 flex m-auto items-center h-full justify-center relative mt-20">
      <div className="max-w-[1460px] w-full flex flex-col justify-start min-h-[80vh] overflow-hidden lg:items-start items-center lg:grid grid-cols-[1.2fr_0.8fr] rounded-xl shadow-2xl">
        <div className="w-full m-auto md:px-12 px-6 h-full bg-gray-100 py-12">
          <Image
            src="/images/pages/returportal/logo.png"
            width={64}
            height={64}
            alt="Illustration"
          />
          <h2 className="text-center mb-6 md:text-5xl text-3xl mt-8">
            Showerlabs
          </h2>
          <h2 className="text-center mb-6 md:text-6xl text-4xl">RETURPORTAL</h2>
          <form className="flex flex-col items-center gap-4 justify-center md:w-[400px] w-[300px] m-auto text-primary-text">
            <input
              type="email"
              className="border-2 border-white w-full  rounded-lg py-[18px] px-4"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="border-2 border-white w-full  rounded-lg py-[18px] px-4"
              placeholder="Ordernummer"
              required
            />
            <p className="text-black text-sm text-center">
              Find ordrenummer i ordrebekræftelse modtaget via mail.
            </p>
            <button className="text-lg bg-slate-400 text-white w-full rounded-full  px-6 transition-3s mt-4 py-1">
              Næste
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full justify-center items-center py-12 h-full">
          <Image
            src="/images/pages/returportal/Illustration.svg"
            width={300}
            height={300}
            alt="Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
