"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen p-20">
      <div className={`${isOpen ? "blur-sm" : ""}`}>
        <div>Hello I am Abdullah, and this is my project</div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="rounded-2xl border border-black bg-teal-500 px-5 py-2 text-white"
        >
          Open Popup
        </button>
      </div>

      {isOpen && <Popup key="popup" setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Page;

const Popup = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-xl border px-5 py-4 shadow-xl">
      <div>Hello this is popup</div>
      <div className="flex justify-end gap-5">
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="rounded-md border border-black bg-red-500 px-4 py-2 text-white"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="rounded-md border border-black bg-teal-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
