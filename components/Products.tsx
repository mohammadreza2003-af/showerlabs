import { products } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
      <div className="flex md:flex-row flex-col items-start gap-4">
        {products.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex flex-col items-center text-center gap-2"
          >
            <div>
              <Image
                src={item.img}
                width={600}
                height={600}
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
    </section>
  );
};

export default Products;
