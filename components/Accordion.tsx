import Image from "next/image";
import React, { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
  style?: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-300  ${style}`}>
      <button
        className="w-full flex justify-start gap-4 items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="hover:bg-white/90 transition-3s p-1 rounded-full">
          <Image
            src="/images/icons/accordion.svg"
            alt=""
            width={18}
            height={18}
            className={`w-[14px] transform transition-3s ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <span className="text-lg">{question}</span>
      </button>
      {isOpen && (
        <div className="py-2 ">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
