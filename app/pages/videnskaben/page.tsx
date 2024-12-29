"use client";
import Accordion from "@/components/Accordion";
import Products from "@/components/Products";
import { filterReduces } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const faqs = [
  {
    answer:
      "MILO-filteret er et vandfilter, der anvender aktivt kul og FOF-salt (sodium hexametaphosphate) som filtermedium.",
    question: "Hvad er MILO-filteret?",
  },
  {
    answer:
      "Nej, MILO-filteret anvender organiske midler, som ikke er sundhedsskadelige ved normal brug.",
    question: "Er MILO-filteret farligt?",
  },
];

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1240px] w-full m-auto px-6">
        <h2 className="text-center mb-12 font-valueSansProBold md:text-6xl text-5xl">
          Videnskaben bag MILO-filteret
        </h2>
        <p className="text-center text-2xl">
          Vores filtersystem er udviklet i samarbejde med specialister indenfor
          vandkvalitet.
        </p>
        <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="flex flex-col items-start gap-16">
            <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full">
              <div className="flex flex-col gap-8 items-start">
                <h2 className="font-valueSansProBold text-5xl">
                  Filter af aktivt kul og FOF-salt
                </h2>
                <p>
                  Internationale studier demonstrerer gentagne gange, hvordan
                  aktivt kul og FOF-salt bidrager til at reducere urenheder i
                  vand. Showerlabs har udviklet et sundhedssikret (organiske
                  midler) og effektivt filter, der effektivt bekæmper disse
                  urenheder.
                </p>
              </div>
              <div className="flex justify-end overflow-hidden">
                <Image
                  src="/images/pages/videnskaben/1.jpg"
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
            <div className="md:grid lg:grid-cols-[1fr_1fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full">
              <div className="flex justify-end overflow-hidden">
                <Image
                  src="/images/pages/videnskaben/2.jpg"
                  width={580}
                  height={580}
                  alt=""
                  className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
                />
              </div>
              <div className="flex flex-col gap-8 items-start">
                <h2 className="font-valueSansProBold text-5xl">Aktivt kul</h2>
                <p>
                  Aktivt kul er en form for kulstof, der er blevet behandlet for
                  at øge dets porøsitet og overfladeareal, hvilket gør det
                  ekstremt absorberende. Det bruges ofte i vandfiltrering til at
                  fjerne forurenende stoffer som tungmetaller, PFAS, pesticider
                  og klor ved at binde dem til sin overflade gennem en proces
                  kaldet adsorption. Dette gør aktivt kul effektivt til at
                  forbedre vandkvaliteten.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1260px] w-full px-6 py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="flex flex-col items-start gap-16">
            <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col gap-8 items-center w-full">
              <div className="flex flex-col gap-8 items-start">
                <h2 className="font-valueSansProBold text-5xl">FOF-salt</h2>
                <p>
                  FOF (sodium hexametaphosphate) er et salt som fungerer som en
                  sequesteringsmiddel, hvilket betyder, at det kan binde til
                  metaller og mineraler i vandet. Det hjælper med at forhindre
                  dannelsen af kalkaflejringer ved at holde calcium- og
                  magnesiumioner opløst i vandet, hvilket forhindrer dem i at
                  krystallisere og danne hårde aflejringer.
                </p>
              </div>
              <div className="flex justify-end overflow-hidden">
                <Image
                  src="/images/pages/videnskaben/3.jpg"
                  width={580}
                  height={580}
                  alt=""
                  className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
                />
              </div>
            </div>
          </div>
        </section>
        <h2 className="mb-12 font-valueSansProBold md:text-5xl text-3xl">
          MILO-filteret reducerer:
        </h2>
        <section className="max-w-[1260px] w-full px-6 py-2 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="grid md:grid-cols-3 grid-cols-1 w-full items-start gap-8">
            {filterReduces.map((item, index) => (
              <div key={index} className="flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-valueSansProBold">
                    {item.title}
                  </h2>
                  <div className="px-2 py-2 bg-[#384a4b] rounded-lg">
                    <Image
                      src={item.img}
                      width={24}
                      height={24}
                      alt={item.title}
                    />
                  </div>
                </div>
                <p>{item.description}</p>
                <Link href={item.path} className="underline">
                  {item.ref}
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-[1000px] w-full px-6 py-2 flex m-auto items-center h-full justify-center text-primary-text">
          <div className="flex items-center flex-col gap-6 text-center">
            <div className="my-16">
              <Image
                src="/images/pages/videnskaben/4.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <h2 className="text-center mb-12 font-valueSansProBold md:text-6xl text-5xl">
              Effekten på hud og hår
            </h2>
            <p>
              Tungmetaller som cadmium, bly og kviksølv kan have en negativ
              indvirkning på både hud og hår. Disse metaller kan trænge ind i
              hudens og hårets struktur, hvilket kan medføre en række skadelige
              effekter. For eksempel kan de forårsage irritation og tørhed i
              huden samt svækkelse og skader på hårstråene. Over tid kan dette
              resultere i hårtab og en generel forringelse af hårets sundhed.
            </p>
            Kalkholdigt vand en markant effekt på hårets tilstand. Når
            kalkholdigt vand kombineres med sæbe og shampoo, dannes der
            uopløselige salte, som sætter sig i håret. Disse kalkaflejringer gør
            håret tørt og stift, hvilket gør det svært at rede ud efter vask.
            Desuden blegner kunstige hårfarver hurtigere, når de udsættes for
            kalkholdigt vand. Den konstante eksponering for kalk kan dermed føre
            til, at håret ser livløst og kedeligt ud, samtidig med at det føles
            mere skrøbeligt og mindre håndterbart.
          </div>
        </section>
      </div>
      <section className="w-full bg-primary-text text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
        <div className="max-w-[800px] w-full flex flex-col  items-center justify-cente py-10 gap-4">
          <div className="flex flex-col text-center gap-6 items-start">
            <h2 className="text-2xl md:text-5xl">
              Ofte stillede spørgsmål om MILO Filteret
            </h2>
          </div>
          <div className="w-full">
            {faqs.map((item, index) => (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[-5%] lg:left-[15%] left-[50%] translate-x-[-50%]">
          <Image
            src="/images/Linked_Path.png"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </section>
      <Products />
    </div>
  );
};

export default page;
