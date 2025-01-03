import React from "react";

const LetterSpacing = () => {
  return (
    <div>
      <h1>LetterSpacing</h1>
      <div className=" mx-2 px-2">
        <p className="bg-pink-400 px-2 text-gray-50 tracking-tight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
        <p className="bg-indigo-400 my-2 px-2 text-gray-50 tracking-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
        <p className="bg-red-500 px-2 text-gray-50 tracking-wider">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
      </div>
      <h1>Text Alignment</h1>
      <div>
        <p className=" text-right bg-pink-900 px-2 text-gray-50 tracking-tight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
        <p className="text-left bg-indigo-900 my-2 px-2 text-gray-50 tracking-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Unde aut molestiae
          quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
        <p className=" text-justify bg-red-900 px-2 text-gray-50 tracking-wider">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut
          molestiae quia voluptatum nulla cum Lorem ipsum, dolor sit amet Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Unde aut molestiae
          quia voluptatum nulla cum Lorem ipsum, dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default LetterSpacing;
