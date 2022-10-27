import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const mouseMoveListener = (event: any) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        //   top: "-20px",
        //   left: "-20px",
        background: "rgb(40, 51, 202, 0.5)",
        transition: "0.2s cubic-bezier(0.075, 0.82, 0.165, 1) transform",
        transform: `translate(${mouseX}px, ${mouseY}px)`,
        borderRadius: "50%",
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default Cursor;
