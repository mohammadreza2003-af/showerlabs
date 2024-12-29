"use client";
import Products from "@/components/Products";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1240px] w-full m-auto px-6">
        <div className="flex flex-col items-center justify-center max-w-[1000px] w-full m-auto">
          <h2 className="text-center mb-12 font-valueSansProBold md:text-5xl text-3xl">
            &#34;Tag kontrol over dit vand med fremtidens brusehoved&#34;
          </h2>
          <p className="text-center text-xl my-4">
            Fra en idé om at forbedre måden vi går i bad på, er vi vokset til at
            blive et førende mærke på det ellers meget konservative marked for
            brusehoveder.
          </p>
          <p>
            Læs hele historien bag <strong>Showerlabs</strong> her.
          </p>
        </div>
        <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="flex flex-col items-start gap-16">
            <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full">
              <div className="flex flex-col gap-8 items-start">
                <h2 className="font-valueSansProBold text-5xl">
                  Velkommen til!
                </h2>
                <p>
                  Jeg hedder Lucas, stifter af Showerlabs, og jeg glæder mig til
                  at introducere dig til vores univers. Hos Showerlabs har vi en
                  klar mission: vi vil hjælpe danskerne med at bade i renere
                  vand. Vi tilbyder markedets bedste brusehoveder, designet til
                  at reducere kalk og urenheder, så du får en bruseoplevelse,
                  som du aldrig har haft før. Tak fordi du er med os på rejsen
                  mod renere vand.
                </p>
              </div>
              <div className="flex justify-end overflow-hidden">
                <Image
                  src="/images/pages/om-os/1.jpg"
                  width={580}
                  height={580}
                  alt=""
                  className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
                />
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-center mb-12 font-valueSansProBold md:text-6xl text-5xl">
          Vores ingredienser
        </h2>
        <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="flex flex-col items-start gap-16">
            <div className="md:grid lg:grid-cols-[1fr_1fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-16 items-center w-full">
              <div className="flex justify-end overflow-hidden">
                <Image
                  src="/images/pages/om-os/2.jpg"
                  width={580}
                  height={580}
                  alt=""
                  className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
                />
              </div>
              <div className="flex flex-col gap-8 items-start">
                <h2 className="font-valueSansProBold text-5xl">
                  Fra idé til virkelighed
                </h2>
                <p>
                  Tanken om Showerlabs opstod i 2022 som en idé, der hurtigt
                  voksede til et gennemtænkt koncept. Jeg har altid været
                  nysgerrig omkring de urenheder, vi udsættes for, når vi går i
                  bad, og den store mængde kalk, der findes i vores vand. Selvom
                  Danmark er et førende land indenfor vandkvalitet, hører man
                  ofte i nyhederne om PFAS og pesticider, som forurener vandet
                  mere, end vi måske lige regner med. Læs mere her. På min rejse
                  for at finde løsninger har jeg rejst rundt til
                  vandteknologikonferencer og talt med eksperter i
                  vandfiltrering fra over 20 forskellige lande, hvilket har
                  givet mig adgang til førende viden inden for området. Med
                  denne erfaring og i samarbejde med dygtige
                  vandteknologieksperter udviklede vi MILO-brusehovedet, som
                  ikke bare reducerer kalk og urenheder, men også sætter nye
                  standarder for vandkvaliteten i dit bad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full bg-primary-text text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
        <div className="max-w-[800px] w-full flex flex-col  items-center justify-cente py-10 gap-4">
          <div className="flex flex-col text-center gap-6 items-center">
            <h2 className="text-2xl md:text-4xl font-valueSansProBold">
              Vi vil udfordre en gammel industri
            </h2>
            <p>
              &#34;Vores vision har været klar siden starten: det konservative
              marked for brusehoveder har brug for en ny spiller, der
              omdefinerer fremtidens brusehoved. Vi er ikke bange for at
              udfordre status quo, og vi er klar til at udfordre giganterne i en
              gammel industri.&#34;
            </p>
            <span className="font-valueSansProBold">
              - Lucas A. Møller, Stifter
            </span>
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default page;
