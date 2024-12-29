import Accordion from "@/components/Accordion";
import { accordionHome } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="w-full bg-primary-text text-white px-6 py-20 flex m-auto items-center h-full justify-center relative">
      <div className="max-w-[1460px] w-full flex flex-col justify-start lg:items-start items-center gap-8 lg:grid grid-cols-2">
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-5xl">Ofte stillede spørgsmål</h2>
          <p className="text-slate-200">
            Kan du ikke finde svar?{" "}
            <Link href="#" className="overline text-white">
              Kontakt os
            </Link>
          </p>
        </div>
        <div className="w-full">
          {accordionHome.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-5%] lg:left-[15%] left-[50%] translate-x-[-50%]">
        <Image src="/images/Linked_Path.png" width={100} height={100} alt="" />
      </div>
    </section>
  );
};

export default FAQSection;
