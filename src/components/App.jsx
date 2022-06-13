import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Holis");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Subido");
  }
  function setBackgroundColor() {
    setMouseOver(true);
  }
  function mouseIsOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "purple" : "white" }}
        onClick={handleClick}
        onMouseOver={setBackgroundColor}
        onMouseOut={mouseIsOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
