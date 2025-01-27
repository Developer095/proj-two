"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Filters from "@/components/pagecomponents/Home/Filters";
import QuestionCard from "../../../components/pagecomponents/Home/QuestionCard";

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
    <div className="mx-2 my-6 sm:mx-4 md:mx-8">
      <div className="flex w-[400px] items-center justify-between gap-2 md:w-[430px] lg:w-[540px] xl:w-[676px]">
        <p className="text-sm font-bold md:text-xl">All Questions</p>
        <Link
          href={"/post-question"}
          className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-80% to-orange-300 px-2 py-1 text-xs transition-all hover:scale-105 md:px-4 md:py-2"
        >
          Ask a question
        </Link>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Search className="absolute left-1 p-1 text-[#335ca8] sm:left-14 md:left-8 lg:left-9 xl:left-16" />
        <input
          type="text"
          placeholder="Search for questions"
          className="w-[250px] rounded-md border-2 border-[#0c111b] bg-[#0c111b] text-sm sm:w-[315px] sm:py-1 sm:pl-5 md:w-[420px] md:pl-8 lg:w-[550px] lg:px-2 lg:pl-8 xl:w-[600px]"
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
