import Image from "next/image";
import React from "react";

const FilterInfo = () => {
  return (
    <section className="bg-primary-text text-white w-full">
      <div className="flex flex-col justify-center items-center py-20 px-6 gap-8">
        <div className="max-w-[700px] flex flex-col items-center text-center gap-8">
          <h2 className="text-5xl">Filter efter 3 måneder</h2>
          <p>
            Filteret opfanger urenheder som kalk, pesticider, tungmetaller og
            PFAS. Disse urenheder kan udtørre og ælde din hud samt reducere dit
            hårs styrke, glans og farve. Det anbefales at udskifte filteret
            mindst hver tredje måned.
          </p>
        </div>
        <Image
          src="/images/products/milo-brusehoved/filter.png"
          width={900}
          height={900}
          alt="filter"
        />
      </div>
    </section>
  );
};

export default FilterInfo;
