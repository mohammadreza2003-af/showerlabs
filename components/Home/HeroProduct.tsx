import Image from "next/image";

interface props {
  item: {
    img: string;
    offer: number;
    price: number;
    name: string;
  };
}

const HeroProduct = ({ item }: props) => {
  return (
    <div className="flex items-center flex-col justify-center w-full gap-3 text-button-text-secondary">
      <div className="rounded-lg overflow-hidden">
        <Image src={item.img} width={350} height={350} alt="" />
      </div>
      <button className="font-valueSansProBold text-lg">{item.name}</button>
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
    </div>
  );
};

export default HeroProduct;
