import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
import { Question } from "@/app/(default)/question/[QuesID]/page";

const QuestionCard = ({
  Content,
  Title,
  UserID,
  createdAt,
  updatedAt,
  likes,
}: Question) => {
  const createdOn = new Date(createdAt);
  const lastUpdate = new Date(updatedAt);

  return (
    <div className="mt-6 w-[700px] bg-[#0c111b]">
      <div className="flex w-full flex-col gap-2 p-6">
        <div className="text-lg font-semibold">{Title}</div>

        <div className="text-sm text-[#64696d]">{Content}</div>

        <div className="flex items-center justify-between border-b border-t border-gray-700 py-1.5">
          <span className="flex w-full gap-3 px-2 pl-1 text-sm text-[#94a3b8]">
            <p>Uploaded At: </p>
            <p>{createdOn.toLocaleDateString()}</p>
          </span>

          <span className="flex w-full gap-3 px-2 pl-1 text-sm text-[#94a3b8]">
            <p>Last Updated: </p>
            <p>{lastUpdate.toLocaleDateString()}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;