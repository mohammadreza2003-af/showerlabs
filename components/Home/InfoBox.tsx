import Image from "next/image";

interface props {
  item: {
    img: string;
    content: string;
  };
}

const InfoBox = ({ item }: props) => {
  return (
    <div className="flex items-center justify-center flex-col py-4 gap-4 bg-[#263a3d] rounded-lg">
      <div>
        <Image src={item.img} width={64} height={64} alt="" />
      </div>
      <p className="font-valueSansPro sm:font-valueSansProBold">
        {item.content}
      </p>
    </div>
  );
};

export default InfoBox;
