"use client";
import BlogSection from "@/components/Home/BlogSection";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text">
      <div className="py-32 w-full m-auto px-6 bg-slate-100">
        <h2 className="text-center mb-6 font-valueSansProBold md:text-7xl text-3xl">
          Articles
        </h2>
        <p className="text-center mb-4">Sign up for our newsletter! </p>
        <form className="flex items-center gap-4 justify-center w-full">
          <input
            type="email"
            className="border rounded-lg py-[18px] px-4"
            placeholder="Email"
            required
          />
          <button className="flex items-center justify-center gap-3 bg-primary-text text-white hover:text-primary-text  hover:bg-transparent px-8 md:px-12 py-4 text-lg md:text-xl transition-3s border-2 hover:border-primary-text border-primary-text font-semibold rounded-lg">
            <Image
              src="/images/icons/email.svg"
              width={20}
              height={20}
              alt="email"
            />
            Submit
          </button>
        </form>
      </div>
      <BlogSection />
    </div>
  );
};

export default page;
