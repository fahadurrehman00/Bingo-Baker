// /components/QA.js

import React from "react";

const QA = ({ faq, index, showAnswers, toggleAnswer, answerRefs }) => {
  return (
    <div key={index}>
      <div className="flex flex-wrap items-center">
        <button
          className="bg-[#FEC2AA] text-[#FD6754] px-2 font-black cursor-pointer rounded-md "
          onClick={() => toggleAnswer(index)}
        >
          {showAnswers[index] ? "-" : "+"}
        </button>
        <h4 className="pl-2 font-bold purple sm:text-3xl text-xs">
          {faq.heading}
        </h4>
      </div>
      <div
        className="text-xs sm:text-xl text-justify pl-9 my-2 overflow-hidden transition-height duration-300"
        style={{
          maxHeight: showAnswers[index]
            ? `${answerRefs.current[index]?.scrollHeight}px`
            : "0px",
        }}
        ref={(el) => (answerRefs.current[index] = el)}
      >
        <p>{faq.description}</p>
      </div>
    </div>
  );
};

export default QA;
