import { products } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1000px] w-full m-auto px-6">
        <h2 className="text-center mb-12 font-valueSansProBold md:text-7xl text-5xl">
          Alle produkter
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-4">
          {products.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="flex flex-col items-center text-center gap-2"
            >
              <div>
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="prodcut"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-valueSansProBold">{item.name}</h3>
                <div>
                  <span>
                    {item.offer > 0
                      ? item.offer + " kr"
                      : item.price > 0 && item.price + " kr"}{" "}
                  </span>
                  {item.offer > 0 && (
                    <span className="line-through">{item.price} kr</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
