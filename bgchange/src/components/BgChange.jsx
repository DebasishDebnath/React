import React, { useState } from "react";

export default function BgChange() {
  const [colour, setColour] = useState();
  function handleColor(e) {
    setColour(e.target.value);
  }
  function handleColorClick() {
    document.body.style.backgroundColor = colour;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleColorClick();
  }
  return (
    <div className="h-screen space-x-56 md:items-center mb-6 flex ">
      <form action="" className="flex justify-center" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 justify-between">
          <div className="items-center flex-auto">
            <input
              className="text-center flex px-20 rounded-lg py-2.5 "
              type="text"
              value={colour}
              onChange={handleColor}
              placeholder="Enter your colour "
            />
          </div>
          <button
            className="flex bg-gray-100 p-3 rounded-lg hover:bg-gray-300"
            onClick={handleColorClick}
          >
            Click Me
          </button>
        </div>
      </form>
    </div>
  );
}
