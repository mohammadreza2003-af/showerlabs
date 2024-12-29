"use client";
import Products from "@/components/Products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const illHelp = [
  {
    img: "/images/pages/vandrapport/ill/1.png",
    title: "FJERNER NATURLIGE OLIER FRA HUDEN, SOM KAN LEDE TIL...",
    includes: ["TØR HUD", "UDSLÆT", "PSORIASIS", "EKSEM", "AKNE"],
  },
  {
    img: "/images/pages/vandrapport/ill/2.png",
    title: "REDUCERER FUGTIGHEDEN I DIT HÅR, SOM LEDER TIL...",
    includes: [
      "HÅRTAB",
      "TYNDING",
      "KRUS",
      "SPLITTET SPIDSER",
      "TØR HOVEDBUND",
    ],
  },
  {
    img: "/images/pages/vandrapport/ill/3.png",
    includes: [
      "HAR DU BLONDT HÅR DER BLIVER",
      "GRØNT? TUNGMETALLER ER EN DEL AF",
      "ÅRSAGEN",
    ],
    title: "SKADER DIN NATURLIGE & KULØRTE HÅRFARVE",
  },
  {
    img: "/images/pages/vandrapport/ill/4.png",
    title: "REDUCERER EFFEKTEN AF DINE SKØNDHEDS- PRODUKTER",
    includes: [
      "MAKSIMER DINE PRODUKTER VED AT",
      "LØSE HOVEDPROBLEMET (DIT VAND).",
    ],
  },
];

const productHelps = [
  {
    img: "/images/pages/videnskaben/reduces/4.png",
    title: "TUNGMETALLER",
    description: "HUDIRRITATION OG TYNDT HÅR",
  },
  {
    img: "/images/pages/videnskaben/reduces/1.png",
    title: "KALK",
    description: "TØR HUD OG BESKADIGET HÅR",
  },
  {
    img: "/images/pages/videnskaben/reduces/3.png",
    title: "PESTICIDER",
    description: "HUDIRRITATION OG RØDME",
  },
  {
    img: "/images/pages/videnskaben/reduces/2.png",
    title: "PFAS",
    description: "HÅR TAB",
  },
];

const productIn = [
  {
    content: "4,7 UD AF 5 STJERNER PÅ TRUSTPILOT",
  },
  {
    content: "UDVIKLET I SAMARBEJDE MED SPECIALISTER",
  },
  {
    content: "99% TILFREDSHED",
  },
  {
    content: "REDUCERER EFFEKTIVT URENHEDER ",
  },
];

const page = () => {
  return (
    <div className="flex flex-col mt-[72px]">
      <div className="w-full">
        <div className="grid text-white items-center justify-start grid-cols-1 lg:grid-cols-2 bg-primary-text w-full m-auto">
          <div className="lg:p-8 p-3">
            <h2 className="mb-12 font-valueSansProBold md:text-4xl text-3xl">
              Vidste du, at du bader i hårdt og urent vand?
            </h2>
            <p className="text-lg my-2">
              Vandet i storstedelen af danske kommuner er fyldt med kalk,
              tungmetaller, pesticider, og evighedskemikalier - som alle skader
              din hud og dit hår. Få en gratis vand rapport tilsendt på email
              herunder, sa sender vi dig en vand-rapport fra din kommune.
            </p>
            <button className="text-2xl rounded-full px-6 transition-3s mt-4 py-3 border-2 border-black hover:bg-black hover:text-white bg-white text-black">
              FÅ EN GRATIS VANDRAPPORT
            </button>
          </div>
          <div className="self-end flex justify-end w-full">
            <Image
              src="/images/pages/vandrapport/1.jpg"
              width={800}
              height={800}
              alt=""
            />
          </div>
        </div>
        <section className="w-full py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className=" flex flex-col items-center w-full">
            <h2 className="font-valueSansProBold text-3xl md:text-6xl">
              LAD OS SNAKKE BESKIDT (Vand)
            </h2>
            <div className="flex justify-center overflow-hidden"></div>
          </div>
        </section>
      </div>
      <section className="w-full px-6 py-20 flex items-center justify-center text-primary-text ">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 max-w-[1360px] w-full">
          {illHelp.map((item, index) => (
            <div
              key={index}
              className="py-8 flex flex-col items-center justify-center gap-4 rounded-lg"
            >
              <Image src={item.img} width={64} height={64} alt="" />
              <p className="font-valueSansProBold text-center text-lg">
                {item.title}
              </p>
              <ul>
                {item.includes.map((item, index) => (
                  <li key={index}>
                    <p className="text-center">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-[url('/images/pages/vandrapport/bg.jpg')] bg-cover text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
        <div className="w-full m-auto px-6">
          <h2 className="text-center mb-6 font-valueSansProBold md:text-7xl text-3xl">
            SE HVAD DER FINDES І DIT BADEVAND
          </h2>
          <p className="text-center mb-4">
            Skriv dit navn, email, og kommune herunder, og få en gratis
            vandrapport hvor du kan se hvad dit badevand indeholder.
          </p>
          <form className="flex flex-col items-center gap-4 justify-center w-[400px] m-auto">
            <input
              type="text"
              className="border-2 border-white w-full placeholder:text-white placeholder:text-2xl placeholder:font-valueSansProBold font-valueSansProBold text-2xl bg-transparent  rounded-lg py-[18px] px-4"
              placeholder="Fornavn"
              required
            />
            <input
              type="email"
              className="border-2 border-white w-full placeholder:text-white placeholder:text-2xl placeholder:font-valueSansProBold font-valueSansProBold text-2xl bg-transparent  rounded-lg py-[18px] px-4"
              placeholder="Email"
              required
            />
            <select
              className="border-2 border-white w-full placeholder:text-white placeholder:text-2xl placeholder:font-valueSansProBold font-valueSansProBold text-2xl bg-transparent  rounded-lg py-[18px] px-4"
              defaultValue="Kommune" // Use defaultValue here
              required
            >
              <option value="Kommune">Kommune</option>
            </select>

            <button className="text-2xl w-full font-valueSansProBold rounded-full px-6 transition-3s mt-4 py-3 border-2 border-black hover:bg-black hover:text-white bg-white text-black">
              MODTAG
            </button>
            <p>
              Ved at klikke på &#34;Modtag&#34; accepterer du vores
              privatlivspolitik og markedsføringspolitik.
            </p>
          </form>
        </div>
      </section>
      <section className="w-full px-6 flex-col py-20 flex items-center justify-center text-white bg-primary-text">
        <h2 className="text-center mb-6 font-valueSansProBold md:text-7xl text-3xl">
          URENHEDER SOM FINDES I DANSK DRIKKEVAND.
        </h2>
        <p className="text-center mb-4">
          Her er nogle af de urenheder, der findes i vores drikkevand, og
          hvordan de påvirker vores hår og hud:
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 max-w-[1360px] w-full">
          {productHelps.map((item, index) => (
            <div
              key={index}
              className="py-8 flex flex-col items-center justify-center gap-4 rounded-lg"
            >
              <Image src={item.img} width={64} height={64} alt="" />
              <p className="font-valueSansProBold text-lg">{item.title}</p>
              <p className="font-valueSansProBold text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
        <div className="flex flex-col items-start gap-16">
          <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full">
            <div className="flex flex-col gap-8 items-start">
              <h2 className="font-valueSansProBold text-5xl">
                SIG HEJ TIL MILO
              </h2>
              <p>
                MILO Brusehovedet er et filtrerende brusehoved, som filtrerer
                dit badevand og skåner din hud og dit har for kalk,
                tungmetaller, og pesticider
              </p>
              <div className="flex flex-col gap-4">
                {productIn.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image
                      src="/images/pages/vandrapport/tick.svg"
                      width={24}
                      height={24}
                      alt="tick"
                    />
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/products/milo-brusehoved"
                className="text-lg w-full font-valueSansProBold rounded-full px-6 transition-3s mt-4 py-3 border-2 border-black hover:bg-black hover:text-white bg-primary-text text-white text-center"
              >
                PRØV MILO RISIKO-FRIT I 30 DAGE
              </Link>
            </div>
            <div className="flex justify-end overflow-hidden">
              <Image
                src="/images/pages/vandrapport/2.jpg"
                width={580}
                height={580}
                alt=""
                className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary-text text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
        <div className="max-w-[800px] w-full flex flex-col  items-center justify-cente py-10 gap-4">
          <div className="flex flex-col text-center justify-center gap-6 items-center">
            <h2 className="text-2xl md:text-4xl font-valueSansProBold">
              PRØV RISIKO-FRIT I 30 DAGE
            </h2>
            <p>
              Vi er så sikre pa vores produkt, at du kan prøve det risikofrit i
              30 dage - og mærke effekten på egen krop. Er du ikke tilfreds, sa
              sender du den blot tilbage og får pengene retur.
            </p>
            <Link
              href="/products/milo-brusehoved"
              className="text-lg font-valueSansProBold rounded-full px-6 transition-3s mt-4 py-3 border-2 border-black hover:bg-black hover:text-white bg-white text-black text-center"
            >
              PRØV MILO RISIKO-FRIT I 30 DAGE
            </Link>
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default page;
