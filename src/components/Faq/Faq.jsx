import React from "react";
import FaqQA from "./FaqQA/FaqQA";

const Faq = () => {
  return (
    <div className="mt-24 container">
      <div>
        <h3 className="faq_heading purple lg:text-5xl md:text-3xl text-4xl font-bold font-barlow w-1/2">
          Frequently Asked Questions
        </h3>
      </div>
      <FaqQA />
    </div>
  );
};

export default Faq;
