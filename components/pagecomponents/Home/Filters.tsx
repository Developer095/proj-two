import { Question } from "@/app/(default)/(home)/page";
import React, { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

const Filters = ({
  setQuesData,
}: {
  setQuesData: Dispatch<SetStateAction<Question[]>>;
}) => {
  const getNewest = async () => {
    const response = await fetch("http://127.0.0.1:5000/getquestions");
    if (!response.ok) {
      toast.error("Failed to fetch the questions");
      return;
    }
    const data = await response.json();
    setQuesData(data);
    toast.success("Successfully Sorted by Newest");
  };
  const getOldest = async () => {
    const response = await fetch(
      "http://127.0.0.1:5000/getquestions?sort=desc",
    );
    if (!response.ok) {
      toast.error("Failed to fetch the questions");
      return;
    }
    const data = await response.json();
    setQuesData(data);
    toast.success("Successfully Sorted by Oldest");
  };

  return (
    <div className="mx-1 mt-6 flex items-center gap-3">
      <p className="text-sm">Sort By:</p>

      <ul className="flex flex-row gap-2">
        <li>
          <button
            onClick={getNewest}
            className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]"
          >
            Newest
          </button>
        </li>

        <li>
          <button
            onClick={getOldest}
            className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]"
          >
            Oldest
          </button>
        </li>

        {/* <li>
          <button className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]">
            Unanswered
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default Filters;
