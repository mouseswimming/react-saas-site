import clsx from "clsx";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FaqItemProps = {
  index: number;
  item: {
    id: string;
    question: string;
    answer: string;
  };
};

export const FaqItem = ({ item, index }: FaqItemProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = activeId === item.id;

  return (
    <div
      onClick={() => {
        setActiveId(activeId === item.id ? null : item.id);
      }}
      className={clsx(
        "group cursor-pointer px-7 py-5 relative isolate h-auto",
        active && "mb-8"
      )}
    >
      {/* faq header */}
      <div>
        <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
          {index < 10 ? "0" : ""}
          {index}
        </div>
        <div className="flex place-content-between items-start">
          <div className="h6 text-p4 transition-colors duration-500">
            {item.question}
          </div>
          {active ? (
            <FaMinus className="faq-item-button text-p1" />
          ) : (
            <FaPlus className="faq-item-button text-p3" />
          )}
        </div>
      </div>

      {active && <div className="body-3 px-7 py-3.5">{item.answer}</div>}

      <div
        className={clsx(
          "g5 -bottom-5 -top-5 left-0 right-0 rounded-3xl opacity-0 absolute -z-10 ",
          active && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};
