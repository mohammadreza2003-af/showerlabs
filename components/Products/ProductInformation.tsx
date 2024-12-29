import { productsInformation } from "@/constants/data";
import Image from "next/image";

const ProductInformation = () => {
  return (
    <section className="w-full px-6 py-20 flex items-center justify-center text-primary-text bg-primary-background">
      <div className="flex flex-col items-center gap-20 max-w-[1000px]">
        {productsInformation.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full items-center gap-8 md:flex-row flex-col"
          >
            <div className="rounded-lg overflow-hidden min-w-[300px]">
              <Image src={item.img} width={250} height={250} alt="" />
            </div>
            <div>
              <h2 className="text-4xl mb-4">{item.title}</h2>
              <p className="">{item.description}</p>
              <div className="flex items-center gap-2 mt-4">
                {item.mat.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-button-text-secondary text-white px-2 py-1 rounded-lg"
                  >
                    <Image src={item.img} width={32} height={32} alt="" />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductInformation;
