import React from "react";
import InfoBox from "@/components/Home/InfoBox";
import { InfoBoxHome } from "@/constants/data";

const InfoSection = () => {
  return (
    <section className="bg-primary-text">
      <div className="max-w-[1460px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-white">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 w-full items-center justify-center">
          {InfoBoxHome.map((item, index) => (
            <InfoBox key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
