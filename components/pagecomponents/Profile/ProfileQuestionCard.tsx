import { Edit2, Eye, MessageCircle, ThumbsUp, Trash2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Question } from "@/app/(default)/(home)/page";

const ProfileQuestionCard = ({
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

  return (
    <div className="mt-6 w-[700px] bg-[#0c111b]">
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <Link href={`/question/${QuesID}`} id="heading" className="font-bold">
            {Title}
          </Link>

          <div className="mr-2 flex items-center gap-3">
            <Link href={`/edit-question/${QuesID}`}>
              <Edit2 className="h-4 w-4 cursor-pointer text-blue-400" />
            </Link>
            {/* <Trash2 className="h-4 w-4 cursor-pointer text-red-500" /> */}
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-t border-gray-700 py-1.5">
          <span
            id="user"
            className="flex w-full gap-3 px-2 pl-1 text-sm text-[#94a3b8]"
          >
            <p>Posted On: </p>
            <p>{date.toLocaleDateString()}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileQuestionCard;
