"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeChangeButton = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark");
  }, [dark]);

  return (
    <button className="rounded-md" onClick={() => setDark(!dark)}>
      {!dark ? (
        <Moon className="text-white dark:text-black" />
      ) : (
        <Sun className="text-white dark:text-black" />
      )}
    </button>
  );
};

export default ThemeChangeButton;
