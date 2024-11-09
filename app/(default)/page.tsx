import { House } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="text-7xl font-bold text-green-400 dark:text-red-500">
        Home
      </div>
      <div>
        <House className="h-3 w-3 text-green-500" />
      </div>
    </div>
  );
};

export default Home;
