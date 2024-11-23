"use client";

import React, { useState } from "react";

const Questions = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const questionData = {
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    console.log("Question Submitted:", questionData);
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
            id="title"
            className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
            placeholder="e.g., How to center a div?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            id="description"
            rows={5}
            className="mt-1 w-full rounded-md border border-gray-700 bg-[#151821] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
            placeholder="Include all the information someone would need to answer your question."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={tags}
            onChange={(e) => setTags(e.target.value)}
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
            className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
          >
            Submit Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
