import React from "react";

const tags = () => {
  const question = [
    { type: "HTML", number: "2+", answer: "Questions" },

    { type: "CSS", number: "2+", answer: "Questions" },

    { type: "PYTHON", number: "3+", answer: "Questions" },

    { type: "NEXTJS", number: "4+", answer: "Questions" },

    { type: "TYPESCRIPT", number: "3+", answer: "Questions" },

    { type: "REACT JS", number: "6+", answer: "Questions" },

    { type: "TEC", number: "3+", answer: "Questions" },

    { type: "C++", number: "8+", answer: "Questions" },

    { type: "C", number: "1+", answer: "Questions" },

    { type: "Assembly", number: "3+", answer: "Questions" },
  ];
  return (
    <div className="bg-[#020817] dark:bg-[#ffffff]">
      <div className="pb-16 pl-2 pt-8">
        <span className="ml-8 text-[25px] font-bold uppercase text-[#ffffff] dark:text-[#020817]">
          ALL Tags
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 pl-8 pr-8">
        {question.map((type, index) => {
          return (
            <div key={index}>
              <div className="h-28 w-52 rounded-[10px] border-none bg-[#0f1117] shadow-lg dark:bg-[#f3f4f6]">
                <div className="flex justify-center">
                  <button className="font-sm mt-6 block h-8 w-20 rounded-[2px] bg-[#151821] text-[10px] font-semibold text-[#7b8ea8] dark:bg-[#dce3f1]">
                    {type.type}
                  </button>
                </div>
                <div className="mt-6 flex justify-center">
                  <span className="font-sm mr-2 text-[12px] text-[#f47f23]">
                    {type.number}
                  </span>
                  <span className="font-sm text-[12px] text-[#7b8ea8]">
                    {type.answer}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default tags;
