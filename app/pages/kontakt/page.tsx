"use client";
import Accordion from "@/components/Accordion";

const faqs = [
  {
    answer:
      "Hvis du har bestilt før kl. 16, vil din pakke blive afsendt i dag. Trackingsiden opdateres muligvis først i aften. Hvis din pakke ikke bliver afsendt i dag, sender vi den i morgen.",
    question: "Hvor er min pakke?",
  },
  {
    answer:
      "Hvis du ønsker at returnere din ordre, skal du gå ind på vores returportal, som du kan finde under Support i menuen eller via dette link: https://showerlabs.dk/pages/returportal",
    question: "Hvordan returnerer jeg?",
  },
  {
    answer:
      "Ved køb over 350 kr. er fragt gratis. Herunder koster fragt 19 kr. til pakkeshop og 29 kr. til hjemmelevering.",
    question: "Hvad koster levering?",
  },
  {
    answer:
      "Vi sender vores pakker med Dao. Vi tilbyder både hjemmelevering og pakkeshop. Hvis du bestiller inden kl. 16, kan du forvente at modtage pakken i morgen.",
    question: "Hvordan leverer I?",
  },
  {
    answer:
      "Vi tilbyder 30 dages tilfredshedsgaranti. Du kan prøve dine varer trygt i dit eget hjem og få alle pengene tilbage indenfor 30 dage, hvis du ikke er tilfreds.",
    question: "Hvilken garanti tilbyder I?",
  },
];

const page = () => {
  return (
    <section className="w-full text-primary-text px-6 py-20 flex m-auto items-center h-full justify-center relative mt-20">
      <div className="max-w-[1460px] w-full flex flex-col justify-start lg:items-start items-center gap-8 lg:grid grid-cols-2">
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-5xl">Har du brug for hjælp?</h2>
          <p>
            Vi har samlet ofte stillede spørgsmål. Du er også altid velkommen
            til, at skrive til os:
          </p>
          <h3 className="font-valueSansProBold text-4xl">info@showerlabs.dk</h3>
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
  );
};

export default page;
