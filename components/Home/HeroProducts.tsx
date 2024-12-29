import React from "react";
import HeroProduct from "./HeroProduct";
import { heroProducts } from "@/constants/data";

const HeroProducts = () => {
  return (
    <section className="max-w-[1460px] w-full px-6 py-20 flex m-auto items-center h-full justify-center">
      <div className="grid md:grid-cols-4 grid-cols-2 w-full justify-center items-center gap-8">
        {heroProducts.map((item, index) => (
          <HeroProduct item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default HeroProducts;
