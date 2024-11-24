"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const Questions = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionToken = localStorage.getItem("sessionToken");

    if (!sessionToken) {
      toast.error("Session Token is missing 001");
      return;
    }
    console.log(sessionToken);

    let tags = formData.tags
      .split(",")
      .map((item) => item.toLowerCase().trim());

    try {
      const response = await fetch("http://127.0.0.1:5000/postquestion", {
        method: "POST",
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          tags: tags,
        }),
        headers: {
          Authorization: `Bearer ${sessionToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("1. Data: ", data);
      if (data.error) {
        toast.error(data.error);
        if (data.error === "Invalid or expired token!") {
          router.push("/login");
        }
      } else {
        toast.success(`Question Successfully posted`);
        setFormData({ title: "", content: "", tags: "" });
        router.push("/");
      }
    } catch (error) {
      console.error("2. Error: ", error);
    }
  };

  return (
    <div className="m-6">
      <div className="flex w-[676px] items-center justify-between gap-2">
        <p className="text-xl font-bold text-gray-100">Ask a Question</p>
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
            Be specific and imagine you're asking another person.
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

        {/* Tags Field */}
        <div className="mb-6">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-300"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
            placeholder="e.g., HTML, CSS, JavaScript"
            value={formData.tags}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, tags: e.target.value }))
            }
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Add tags separated by commas to describe your question.
          </p>
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
