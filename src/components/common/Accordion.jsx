import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ items }) => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-200 transition-colors duration-300"
        >
          <button
            onClick={() => toggle(item.id)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.question}
            </h3>

            <FiChevronDown
              className={`text-2xl transition-transform duration-300 ${
                active === item.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              active === item.id
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 leading-7 text-slate-600">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;