import React from "react";

type Props = {
  top: string;
  left: string;
};

/**
 * 分けるやつ
 * @returns
 */
const Divider = ({ top, left }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "3px",
        top: top ?? "88px",
        left: left ?? "32px",
        width: "83px",
        backgroundColor: "#DDDDDD",
      }}
    />
  );
};

export default Divider;
