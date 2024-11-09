"use client";
import React from "react";

const ThemeChangeButton = () => {
  return (
    <button
      onClick={() => {
        const bodyelement = document.querySelector("body");
        if (bodyelement) {
          bodyelement.classList.toggle("dark");
        }
      }}
    >
      toggle button
    </button>
  );
};

export default ThemeChangeButton;
