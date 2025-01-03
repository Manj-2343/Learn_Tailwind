import React from "react";

const Width = () => {
  return (
    <div>
      <h1>Width all around</h1>
      <div className="bg-indigo-500 p-3">
        <p className="bg-red-400 w-0">0</p>
        <p className="bg-red-400 w-1.5">1</p>
        <p className="bg-red-400 w-2.5">2</p>
        <p className="bg-red-400 w-5">3</p>
        <p className="bg-red-400 w-96">96</p>
      </div>
    </div>
  );
};

export default Width;
