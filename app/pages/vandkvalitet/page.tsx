"use client";
import Accordion from "@/components/Accordion";
import Products from "@/components/Products";
import Image from "next/image";
import React from "react";

const faqs = [
  {
    answer: `Prosulfocarb
2-CPP
2C6MPP
3-Hydroxycarbofuran
Benazolin
4-Chlor-3-methylphenol
Pentachlorbenzen
Amitrol
Hexachlorbenzen
Chloridazon
Chlorsulfuron
Clopyralid
Desmetryn
Imazalil
Propazin
Tetrasul
Triforin
Pirimicarb-desmethyl
Metamitron-desamino
Dichloroctylisothiazolinon
3,5-Dichlorphenol
3,5,6-Trichloro-2-pyridinol
Flamprop
Triazine amine
Fenpropathrin
Saccharin
Prometon
Fenoxaprop
Monuron
1-(3,4-dichlorophenyl)-3-methylurea
3,4,5-Trichlorphenol
Chlorthiamid
TFMP
Triclosan
Cl 153815
Boscalid
Tau-fluvalinat
Prothioconazol
Pethoxamid
Imidacloprid
Metolachlor ESA
Dimethenamid OA
Flufenacet ESA
Flufenacet OA
Clodinafop
(2,6-dimethylphenylcarbamoyl)-methansulfonsyre
Cyflufenamid
Cykloxidim
Prothioconazol-desthio
Trinexapac
Dimethachlor metabolit, SYN 530561
Isoxadifen-ethyl
Asulam
Metaldehyd
Pyridafol
Tefluthrin
Thifensulfuron
Pentachloraniline
Tribenuron
Metosulam
Penoxsulam
(E,E)-trifloxystrobin acid
2-Methyl-2H-isothiazol-3-on
2-Amino-N-isopropylbenzamide
Tembotrion
Piperonylbutoxyd
Bixafen
Fluopyram
Hydroxypropazin
Metsulfuron
Prosulfuron
Halauxifen
3-Chloro-4-methylaniline
Atraton
Mefenpyr-diethyl
Phoxim
1H-1,2,4-Triazole-5-sulfonamide
Desmethyl-formamidopirimicarb
CGA 355190
Dimethylaminosulfanilide
Ethiofencarb sulfon
Ethiofencarb sulfoxid
Oxamyl-oxim
Oxycarboxin
Demeton-S-methylsulfon
Tetraethyl pyrophosphate
Trifluoreddikesyre
Triflusulfuron
Dipropetryn
Fipronil-sulfon
Fipronil sulfid
Terbumeton
Terbumeton-desethyl
7-Chloro-3,8-quinolinedicarboxylic acid
Benalaxyl-M
Icaridin
Milbemycin A4
Trifloxystrobin metabolitter NOA 413161 + NOA 413463
Dimoxystrobin-M08`,
    question: "Pesticider",
  },
  {
    answer: `Aluminium (Al)
Arsen (As)
Barium (Ba)
Beryllium (Be)
Bly (Pb)
Bor (B)
Cadmium (Cd)
Jod (I)
Kobber (Cu)
Kobolt (Co)
Nikkel (Ni)
Strontium(Sr)
Zink (Zn)`,
    question: "Tungmetaller",
  },
  {
    answer: `Trifluoreddikesyre (TFA)
Chloroform
Cis-dichlorethylen
PFAS
PFOS
PFOA
PFHxS
PFNA`,
    question: "PFAS",
  },
];

const legends = [
  { color: "bg-orange-200", label: "0-20%" },
  { color: "bg-orange-300", label: "20-40%" },
  { color: "bg-orange-500", label: "40-60%" },
  { color: "bg-orange-600", label: "60-80%" },
  { color: "bg-orange-800", label: "80-100%" },
];

const productHelps = [
  {
    img: "/images/pages/vandkvalitet/icons/1.png",
    title: "Pesticider",
  },
  {
    img: "/images/pages/vandkvalitet/icons/2.png",
    title: "Tungmetaller",
  },
  {
    img: "/images/pages/vandkvalitet/icons/3.png",
    title: "PFAS",
  },
  {
    img: "/images/pages/vandkvalitet/icons/4.png",
    title: "Nitrat",
  },
];

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1440px] w-full m-auto px-6">
        <div className="flex flex-col items-center justify-center max-w-[1000px] w-full m-auto">
          <h2 className="text-center mb-12 font-valueSansProBold md:text-4xl text-3xl">
            Tjek vandkvaliteten i din kommune
          </h2>
          <p className="text-center text-lg my-2">
            I den danske vandforsyning findes der flere urenheder, end man måske
            forestiller sig. Grundvandet er nemlig udsat for påvirkninger fra
            landbrug, industri og husholdninger. Herunder kan du undersøge
            vandkvaliteten i din kommune.
          </p>
        </div>
        <section className="w-full py-20 flex m-auto items-center h-full justify-center text-primary-text">
          <div className=" flex flex-col w-full">
            <div className="flex flex-col gap-3 items-start">
              <h2 className="font-valueSansProBold text-3xl">
                Pesticider i din kommune
              </h2>
              <p>
                % af vandforsyninger, hvor der er fundet pesticider fra 2017 til
                2022.
              </p>
              <div className="flex items-center space-x-4">
                {legends.map((legend, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-6 h-6 ${legend.color} rounded-sm`} />
                    <span className="text-sm">{legend.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center overflow-hidden">
              <Image
                src="/images/pages/vandkvalitet/1.png"
                width={580}
                height={580}
                alt=""
                className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="w-full px-6 py-20 flex items-center justify-center text-white bg-primary-text">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 max-w-[1360px] w-full">
          {productHelps.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c3637] py-8 flex flex-col items-center justify-center gap-4 rounded-lg"
            >
              <Image src={item.img} width={64} height={64} alt="" />
              <p className="font-valueSansProBold text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-primary-text text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
        <div className="max-w-[1460px] w-full flex flex-col justify-start lg:items-start items-center gap-8 lg:grid grid-cols-2">
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-5xl">Ofte stillede spørgsmål</h2>
            <p className="text-slate-200">
              Den danske vandforsyning indeholder en række skadelige stoffer,
              som påvirker dit hår og din hud. Pesticider kan sive ned i
              grundvandet via regnvand. Tungmetaller, som bly og kviksølv, kan
              ende i grundvandet via overfladestrømning fra landbrugsjord. PFAS
              (også kendt som &#34;evighedskemikalier&#34;) er også påvist i
              dansk vandforsyning. Her kan du se hvilke typer er påvist i den
              danske vandforsyning.
            </p>
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
      </section>
      <Products />
    </div>
  );
};

export default page;
