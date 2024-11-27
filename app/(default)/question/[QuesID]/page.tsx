"use client";
import AnswerCard from "@/components/pagecomponents/Question/AnswerCard";
import QuestionCard from "@/components/pagecomponents/Question/QuestionCard";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

export interface Question {
  Content: string;
  Title: string;
  UserID: string;
  createdAt: string;
  updatedAt: string;
  likes: string;
}

export interface Answer {
  AnsID: number;
  QuesID: number;
  UserID: number;
  content: string;
  createdAt: string;
  downvotes: number;
  upvotes: number;
}

const page = ({ params }: { params: { QuesID: string } }) => {
  const [question, setQuestion] = useState<Question>();
  const [answer, setAnswer] = useState<Answer[]>([]);
  const [content, setContent] = useState("");
  const router = useRouter();
  const now = new Date();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionToken = localStorage.getItem("sessionToken");

    if (!sessionToken) {
      toast.error("Session Token is missing 001");
      return;
    }
    console.log(sessionToken);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch(
        `http://127.0.0.1:5000/create-answer?QuesID=${params.QuesID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        },
      );
      const data = await response.json();
      console.log("1. Data: ", data);
      if (data.error) {
        toast.error(data.error);
        if (data.error === "Invalid or expired token!") {
          router.push("/login");
        }
      } else {
        toast.success(`Answer Successfully posted`);
        const ans = {
          content: content,
          AnsID: 0,
          downvotes: 0,
          QuesID: Number(params.QuesID),
          UserID: 0,
          upvotes: 0,
          createdAt: now.toDateString(),
        };
        setAnswer((prev) => [ans, ...prev]);
        setContent("");
      }
    } catch (error) {
      console.error("2. Error: ", error);
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get-question-by-id?QuesID=${params.QuesID}`)
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch Question");
        }
        return res.json();
      })
      .then((data: Question) => {
        setQuestion(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.QuesID]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get-ans-of-ques?QuesID=${params.QuesID}`)
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch Answer");
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
  }, [params.QuesID]);

  if (question)
    return (
      <div className="w-full px-5 pb-10">
        {/**
         * Question
         */}
        <div className="pb-3 pl-2 pt-8">
          <span className="text-[25px] font-bold uppercase text-orange-600 dark:text-[#020817]">
            Question:
          </span>
        </div>
        <QuestionCard
          Title={question.Title}
          Content={question.Content}
          createdAt={question.updatedAt}
          updatedAt={question.updatedAt}
          likes={question.likes}
          UserID={question.UserID}
        />

        {/**
         * Answers
         */}
        <div className="pb-3 pl-2 pt-8">
          <span className="text-[25px] font-bold uppercase text-[#2d73c4] dark:text-[#020817]">
            Answers:
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {answer.map((item, idx) => {
            return (
              <AnswerCard
                key={idx}
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

        <div className="pb-3 pl-2 pt-8">
          <span className="text-[25px] font-bold uppercase text-teal-500 dark:text-[#020817]">
            Give Answers:
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-3 w-[676px] rounded-md bg-[#0c111b] p-6 text-gray-100"
        >
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Answer Content
            </label>
            <textarea
              name="Content"
              rows={5}
              className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Elaborate your answer with proper reasoning."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105"
            >
              Submit Answer
            </button>
          </div>
        </form>
      </div>
    );
};

export default page;
