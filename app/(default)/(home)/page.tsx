"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Filters from "@/components/pagecomponents/Home/Filters";
import QuestionCard from "./QuestionCard";

export interface Question {
  Content: string;
  QuesID: number;
  Tags: string;
  Title: string;
  UserID: number;
  UserName: string;
  updatedAt: string;
  likes: number;
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [quesData, setQuesData] = useState<Question[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getquestions")
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch questions");
        }
        return res.json();
      })
      .then((data: Question[]) => {
        setQuesData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-6">
      <div className="flex w-[676px] items-center justify-between gap-2">
        <p className="text-xl font-bold">All Questions</p>
        <Link
          href={"/post-question"}
          className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-80% to-orange-300 px-4 py-2 text-xs transition-all hover:scale-105"
        >
          Ask a question
        </Link>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Search className="absolute left-16 p-1 text-[#335ca8]" />
        <input
          type="text"
          placeholder="Search for questions"
          className="w-[600px] rounded-md border-2 border-[#0c111b] bg-[#0c111b] px-2 py-1 pl-8 text-sm"
        />
      </div>

      <Filters setQuesData={setQuesData} />

      <div className="flex w-full flex-col">
        {quesData.map((Item, index) => {
          return (
            <QuestionCard
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
    </div>
  );
};

export default Home;
