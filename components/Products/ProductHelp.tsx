import { productHelps } from "@/constants/data";
import Image from "next/image";

const ProductHelp = () => {
  return (
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
  );
};

export default ProductHelp;
