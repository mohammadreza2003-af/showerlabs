import { prodcutSpecifications } from "@/constants/data";
import Image from "next/image";

const ProductSpecifications = () => {
  return (
    <section className="w-full px-6 py-20 flex items-center justify-center text-primary-text bg-primary-background">
      <div className="max-w-[1200px] w-full">
        <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-20 w-full">
          <div>
            <Image
              src="/images/products/pack.jpg"
              width={600}
              height={600}
              alt="pack"
            />
          </div>
          <div>
            <h2 className="text-3xl font-valueSansProBold mb-8">
              Specifikationer
            </h2>
            <div className="flex flex-col items-start gap-6">
              {prodcutSpecifications.map((item, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between w-full items-center border-b-[2px] border-border w-f">
                    <p>{item.title}</p>
                    <span>{item.include}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
