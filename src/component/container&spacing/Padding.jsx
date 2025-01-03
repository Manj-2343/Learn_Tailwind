import React from "react";

const Padding = () => {
  return (
    <div>
      <h1>Padding</h1>
      <p className="bg-slate-500 text-gray-200 my-4 px-4 mx-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem repellat
        consequuntur nesciunt cum quas sapiente doloremque ex repudiandae
        aliquid, deserunt debitis ipsum, nihil rerum animi eius eaque odio,
        sequi laborum?
      </p>
      <p className="bg-red-600 text-gray-200 py-4 mx-2 pl-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        repellat reiciendis quod autem fugit ratione. Beatae, voluptates quo
        unde consequuntur, laborum autem quisquam repudiandae laudantium, eos
        dignissimos voluptatibus commodi sunt.
      </p>
      {/* padding for trh arbitary classes */}
      <p className="bg-blue-400 my-2 p-[10px] mx-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo culpa,
        odio doloribus vero nemo quas exercitationem ut ducimus facere id
        temporibus, esse inventore illum quisquam et. Necessitatibus natus vel
        neque?
      </p>
      {/* space between */}
      <h3>Space between</h3>
      <div className="flex  space-x-3 ">
        <div className="p-3 bg-teal-100 ">01</div>
        <div className="p-3 bg-teal-200">02</div>
        <div className="p-3 bg-teal-300 ">03</div>
        <div className="p-3 bg-teal-400">04</div>
      </div>
    </div>
  );
};

export default Padding;
