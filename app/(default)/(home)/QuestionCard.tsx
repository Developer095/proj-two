import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
import { Question } from "./page";

const QuestionCard = ({
  Content,
  QuesID,
  Tags,
  Title,
  UserID,
  UserName,
  updatedAt,
  likes,
}: Question) => {
  const date = new Date(updatedAt);
  let tags: string[] = [];
  if (Tags) {
    tags = Tags.split(",").map((item) => item.toUpperCase());
  }

  return (
    <div className="mt-6 w-full bg-[#0c111b]">
      <div className="flex flex-col gap-2 p-6">
        <p id="heading" className="font-bold">
          {Title}
        </p>

        <ul
          id="language"
          className="mb-2 mt-2 flex gap-2 text-xs text-[#2567e1]"
        >
          {tags.map((item, index) => {
            return (
              <li key={index} className="rounded-md bg-gray-800 px-2 py-1">
                {item}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-b border-t border-gray-700 py-1.5">
          <span id="user" className="flex gap-2 pl-1 text-sm text-[#94a3b8]">
            <p>{UserName}</p>
            <p>{date.toLocaleDateString()}</p>
          </span>

          <ul className="flex gap-3">
            <li>
              <span className="flex items-center text-xs">
                <ThumbsUp className="h-4 hover:cursor-pointer" />
                <p>{likes}</p>
              </span>
            </li>
            <li>
              <span className="flex items-center text-xs">
                <MessageCircle className="h-4" />
                <p>Comment</p>
              </span>
            </li>
            <li>
              <span className="flex items-center pr-1 text-xs">
                <Eye className="h-4" />
                <p>Views</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
