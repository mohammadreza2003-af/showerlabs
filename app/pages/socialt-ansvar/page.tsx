"use client";
import Image from "next/image";
import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const opts: YouTubeProps["opts"] = {
    height: "635",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const handlePlay = () => {
    setIsPlaying(true); // Hide poster when the video starts playing
  };

  return (
    <div className="mt-28 flex flex-col text-primary-text">
      <div className="relative w-full mx-auto aspect-video">
        {!isPlaying && (
          <div
            className="absolute inset-0 z-[5] bg-cover bg-center cursor-pointer flex justify-center items-center"
            style={{
              backgroundImage: `url("/images/pages/socialt-ansvar/poster.jpg")`,
            }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="place-self-center text-center">
              <div className="prose">
                <p className="font-valueSansProBold text-white text-6xl">
                  THE THIRST PROJECT
                </p>
                <div className="mt-8">
                  <p className="text-white">
                    @<a href="https://www.youtube.com/@nashgrier">Nash Grier</a>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )}
        <YouTube videoId="M_iIWgRSy04" opts={opts} onPlay={handlePlay} />
      </div>
      <div className="max-w-[800px] text-center py-32 w-full m-auto px-6 ">
        <h2 className="text-center mb-6 font-valueSansProBold md:text-7xl text-3xl">
          Socialt Ansvar
        </h2>
        <p className="text-center mb-6">
          Hos Showerlabs er det at give tilbage en kerneværdi, der driver vores
          virksomhed fremad. For hver ordre med et brusehoved, dedikerer vi 10
          liter rent drikkevand til familier i Sydamerika og Afrika gennem The
          Thirst Project. Med hjælp fra vores partner, Contribe.io, sikrer vi,
          at disse donationer når frem til dem, der har mest brug for det.
          Contribe.io er en platform, der gør det muligt for os at administrere
          og gennemføre vores donationer på en effektiv og transparent måde.
        </p>
        <p>
          Vi tror på, at vi som virksomhed har et ansvar for at gøre mere end
          blot at levere kvalitetsprodukter. Vores donationer til The Thirst
          Project er et løfte om at bruge vores platform til at skabe positiv
          forandring i verden. Derfor, når du handler hos Showerlabs, foretager
          du ikke blot et køb, du bliver en del af en global indsats for at
          sikre rent drikkevand til dem, der har mest brug for det. Med din
          støtte hjælper vi sammen med at forbedre livet for mange mennesker
          verden over.
        </p>
      </div>
      <div className="py-20">
        <div className="md:grid flex flex-col items-center md:grid-cols-2 px-6 justify-center max-w-[1440px] w-full gap-8 mx-auto">
          <div className="flex items-center  w-full flex-col gap-8">
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full hover:scale-110 transition-3s"
                src="/images/pages/socialt-ansvar/1.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full hover:scale-110 transition-3s"
                src="/images/pages/socialt-ansvar/2.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="w-full hover:scale-110 transition-3s"
              src="/images/pages/socialt-ansvar/3.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
