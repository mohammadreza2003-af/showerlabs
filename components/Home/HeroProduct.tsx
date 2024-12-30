import Image from "next/image";
import Link from "next/link";

interface props {
  item: {
    img: string;
    offer: number;
    price: number;
    name: string;
    path: string;
  };
}

const HeroProduct = ({ item }: props) => {
  return (
    <Link
      href={item.path}
      className="flex items-center flex-col justify-center w-full gap-3 text-button-text-secondary"
    >
      <div className="rounded-lg overflow-hidden">
        <Image src={item.img} width={350} height={350} alt="" />
      </div>
      <p className="font-valueSansProBold text-lg">{item.name}</p>
      <span className="flex gap-2 items-center">
        {item.offer ? (
          <>
            {item.offer} kr
            {item.offer !== 0 && (
              <span className="line-through">{item.price} kr</span>
            )}
          </>
        ) : (
          `${item.price} kr`
        )}
      </span>
    </Link>
  );
};

export default HeroProduct;
