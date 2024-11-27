"use client";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Question } from "../(home)/page";
import ProfileQuestionCard from "@/components/pagecomponents/Profile/ProfileQuestionCard";
import { cn } from "@/lib/utils";
import AnswerCard from "@/components/pagecomponents/Question/AnswerCard";
import { Answer } from "../question/[QuesID]/page";

export interface User {
  Bio: string;
  Email: string;
  FirstName: string;
  LastName: string;
  UserID: number;
  UserName: string;
  createdAt: string;
}

const Profile = () => {
  const router = useRouter();
  let sessionToken = localStorage.getItem("sessionToken");
  if (!sessionToken) {
    toast.error("You are not logged in");
    router.push("/login");
    return;
  }
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [isQuestion, setIsQuestion] = useState(true);
  const [answer, setAnswer] = useState<Answer[]>([]);

  const [user, setUser] = useState<User>({
    Bio: "",
    createdAt: "",
    Email: "",
    FirstName: "",
    LastName: "",
    UserName: "",
    UserID: 0,
  });

  useEffect(() => {
    setLoading(true);

    fetch("http://127.0.0.1:5000/get-user-questions", {
      headers: { Authorization: `Bearer ${sessionToken}` },
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch questions");
        }
        return res.json();
      })
      .then((data: Question[]) => {
        setQuestions(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);

    fetch("http://127.0.0.1:5000/get-user", {
      headers: { Authorization: `Bearer ${sessionToken}` },
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch User");
        }
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-ans-of-user", {
      headers: { Authorization: `Bearer ${sessionToken}` },
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch User");
        }
        return res.json();
      })
      .then((data: Answer[]) => {
        setAnswer(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) return <div>loading...</div>;

  const date = new Date(user.createdAt);

  return (
    <div className="w-[650px] bg-[#020817] dark:bg-[#ffffff]">
      <div className="mb-8 mt-12 flex items-center gap-8 px-7">
        <div
          className={cn(
            "flex h-[150px] w-[150px] items-center justify-center rounded-md text-7xl text-white",
            bgColors[Math.floor(Math.random() * 10)],
          )}
        >
          {user.UserName[0]?.toUpperCase()}
        </div>

        <div className="flex flex-col gap-2 text-white">
          <span className="text-sm dark:text-[#020817]">
            <span className="text-gray-400">First Name:</span> {user.FirstName}
          </span>
          <span className="text-sm dark:text-[#020817]">
            <span className="text-gray-400">Last Name:</span> {user.LastName}
          </span>
          <span className="text-sm dark:text-[#020817]">
            <span className="text-gray-400">Username:</span> {user.UserName}
          </span>
          <span className="text-sm dark:text-[#020817]">
            <span className="text-gray-400">User Email:</span> {user.Email}
          </span>
          <span className="text-sm dark:text-[#020817]">
            <span className="text-gray-400">Join Date:</span>{" "}
            {date.toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="ml-6 mt-6">
        <div className="flex w-[205px] items-center justify-center gap-2 rounded-md bg-[#1e293b] py-1.5 dark:bg-[#f1f5f9]">
          <button
            className={cn("py-1.5 text-xs text-[#5d88bf]", {
              "rounded-md bg-[#ffedd5] px-2 text-[#f9763e]": isQuestion,
            })}
            onClick={() => setIsQuestion(true)}
          >
            Question Asked
          </button>
          <button
            className={cn("py-1.5 text-xs text-[#5d88bf] dark:text-[#000000]", {
              "rounded-md bg-[#ffedd5] px-2 text-[#f9763e]": !isQuestion,
            })}
            onClick={() => setIsQuestion(false)}
          >
            Answers Given
          </button>
        </div>
      </div>

      {isQuestion && (
        <div className="flex w-full flex-col pl-5">
          {questions.map((Item, index) => {
            return (
              <ProfileQuestionCard
                key={index}
                QuesID={Item.QuesID}
                Title={Item.Title}
                Content={Item.Content}
                UserID={Item.UserID}
                updatedAt={Item.updatedAt}
                Tags={Item.Tags}
                UserName={Item.UserName}
                likes={Item.likes}
              />
            );
          })}
        </div>
      )}

      {!isQuestion && (
        <div className="flex w-full flex-col gap-2 pl-5">
          {answer.map((item, index) => {
            return (
              <AnswerCard
                key={index}
                AnsID={item.AnsID}
                QuesID={item.QuesID}
                UserID={item.UserID}
                content={item.content}
                createdAt={item.createdAt}
                downvotes={item.downvotes}
                upvotes={item.upvotes}
              />
            );
          })}
        </div>
      )}

      <div className="h-10"></div>
    </div>
  );
};

export default Profile;

const bgColors = [
  "bg-[#7bb483]",
  "bg-[#ff6347]",
  "bg-[#4b8bbe]",
  "bg-[#f0ad4e]",
  "bg-[#9b59b6]",
  "bg-[#2ecc71]",
  "bg-[#e74c3c]",
  "bg-[#34495e]",
  "bg-[#f39c12]",
  "bg-[#8e44ad]",
];
