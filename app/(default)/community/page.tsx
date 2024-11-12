//   <div className="ml-6 mr-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
//     <div className="h-[290px] w-full rounded-[12px] border-2 border-[#1e293b] bg-[#151821]">
//       <div className="mt-4 flex justify-center">
//         <img
//           src="./image/a.png"
//           alt="image"
//           className="h-24 w-[100px] rounded-[50px]"
//         />
//       </div>
//       <span className="mt-4 block flex justify-center">User_1081</span>
//       {/* <span className="mt-2 block flex justify-center text-[#9ca3af]">
//         @asil0312
//       </span> */}
//       <span className="mt-2 block flex justify-center text-[#9ca3af]">
//         Data Scientist
//       </span>
//       <span className="mt-2 flex pl-4 pr-4 text-center text-sm text-[#B2CCD5]">
//         To extract insights from data, use techniques like machine learning
//         and statistical analysis.
//       </span>
//     </div>

//
import React from "react";

// Array of colors
const arr = ["bg-orange-200", "bg-yellow-400", "bg-red-300", "bg-green-300"];

// Helper function

function getInitialWithBgColor(username: string) {
  const firstLetter = username.charAt(0).toUpperCase();
  const randomBgColor = arr[Math.floor(Math.random() * arr.length)];
  return { firstLetter, randomBgColor };
}

const Community = () => {
  const users = [
    {
      username: "User_1081",
      role: "Data Scientist",
      description:
        "To extract insights from data, use techniques like machine learning and statistical analysis.",
    },
    {
      username: "Abdullah_123",
      role: "Cybersecurity Analyst",
      description:
        "To protect systems from cyber threats, use security tools and best practices.",
    },
    {
      username: "sam_021",
      role: "Software Engineer",
      description:
        "To develop software solutions, use programming languages like Python and Java.",
    },
    {
      username: "khubab_2345",
      role: "Database Administrator",
      description: "To manage databases, use SQL and NoSQL technologies.",
    },
    {
      username: "Zoro_2352",
      role: "UI/UX Designer",
      description:
        "To create user-friendly interfaces, use design tools like Figma and Adobe XD.",
    },
    {
      username: "Luffy_6777",
      role: "Network Engineer",
      description:
        "To design and maintain networks, use protocols like TCP/IP and routing protocols.",
    },
    {
      username: "Esdeath_7654",
      role: "DevOps Engineer",
      description:
        "To automate software delivery, use tools like Jenkins and Docker.",
    },
    {
      username: "Albedo_6485",
      role: "Game Designer",
      description:
        "To create immersive game worlds, use game engines like Unity and Unreal Engine.",
    },
    {
      username: "Makami_2844",
      role: "Software Developer",
      description:
        "To center, use display: flex, justify-content: center, and align-items: center.",
    },
  ];

  return (
    <div className="bg-[#020817] dark:bg-[#ffffff]">
      <div>
        <div className="mb-[80px] ml-8 mt-24 text-[25px] font-bold uppercase text-[#ffffff] dark:text-[#020817]">
          All Users
        </div>
      </div>

      <div className="ml-6 mr-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
        {users.map((user, index) => {
          const { firstLetter, randomBgColor } = getInitialWithBgColor(
            user.username,
          );

          return (
            <div
              key={index}
              className="h-[290px] w-full rounded-[12px] border-2 border-none bg-[#151821] shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]"
            >
              <div className="mt-4 flex justify-center">
                <div
                  className={`${randomBgColor} flex h-24 w-[100px] items-center justify-center rounded-full text-3xl font-semibold text-white`}
                >
                  {firstLetter}
                </div>
              </div>
              <span className="mt-4 block flex justify-center text-[18px] font-bold text-[#ffffff] dark:text-[#020817]">
                {user.username}
              </span>
              <span className="mt-2 block flex justify-center text-[#9ca3af]">
                {user.role}
              </span>
              <span className="mt-2 flex pl-4 pr-4 text-center text-sm text-[#ffffff] dark:text-[#041920]">
                {user.description}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="h-8 w-14 rounded-[4px] border-none bg-[#878b94] text-[#fffff] dark:bg-[#6f7684] dark:text-black">
          Prev
        </button>
        <button className="ml-2 mr-2 h-8 w-8 rounded-[4px] border-none bg-orange-400">
          1
        </button>
        <button className="h-8 w-14 rounded-[4px] border-none bg-[#272e3f] text-[#fffff] dark:bg-[#dce3f1] dark:text-black">
          Next
        </button>
      </div>
    </div>
  );
};

export default Community;
