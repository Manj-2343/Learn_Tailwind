import React from "react";

const AncientColor = () => {
  return (
    <div>
      <h1>AncientColor</h1>
      <input type="checkbox" />
      <input type="checkbox" className="accent-yellow-500" />
      <input type="checkbox" className="accent-red-600" />
      <input type="checkbox" className="accent-teal-700" checked />
    </div>
  );
};

export default AncientColor;
