import React from "react";

const page = ({ params }: { params: { QuesID: string } }) => {
  return <div>Question ID {params.QuesID}</div>;
};

export default page;
