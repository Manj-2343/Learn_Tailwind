import React from "react";

const MinHeight = () => {
  return (
    <div>
      <h1 className="mt-5">MinHeight</h1>
      {/* <div className="p-5 h-[400px] bg-green-300 mb-[10px]">
        <div className="min-h-full bg-teal-400">Take full height</div>
      </div> */}
      <h1 className="mt-5">MaxHeight</h1>
      <div className="p-5 h-[400px] bg-green-300 mb-[10px]">
        <div className="max-h-full bg-teal-400">Take full height</div>
      </div>
      <h1>Full Screen height</h1>
      <div className="bg-pink-300 mb-4 h-screen">Hello</div>
      <h1>Auto width</h1>
      <div className="bg-pink-900 mb-4 h-auto">Hello</div>
    </div>
  );
};

export default MinHeight;
