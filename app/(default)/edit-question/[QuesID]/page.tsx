"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Questions = ({ params }: { params: { QuesID: string } }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const router = useRouter();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get-question-by-id?QuesID=${params.QuesID}`)
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch questions");
        }
        return res.json();
      })
      .then((data) => {
        setFormData({ title: data.Title, content: data.Content });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.QuesID]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionToken = localStorage.getItem("sessionToken");

    if (!sessionToken) {
      toast.error("Session Token is missing");
      return;
    }
    console.log(sessionToken);

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/editquestion?QuesID=${params.QuesID}`,
        {
          method: "POST",
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
          }),
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
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
        toast.success(`Question Successfully posted`);
        setFormData({ title: "", content: "" });
        router.push("/profile");
      }
    } catch (error) {
      console.error("2. Error: ", error);
    }
  };

  return (
    <div className="m-6">
      <div className="flex w-[676px] items-center justify-between gap-2">
        <p className="text-xl font-bold text-gray-100">Edit Question</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 w-[676px] rounded-md bg-[#0c111b] p-6 text-gray-100"
      >
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
            placeholder="e.g., How to center a div?"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Be specific and imagine you{`'`}re asking another person.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            name="content"
            rows={5}
            className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
            placeholder="Include all the information someone would need to answer your question."
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, content: e.target.value }))
            }
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105"
          >
            Submit Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
