import { Typography } from "@mui/material";
import React, { use, useEffect, useState } from "react";
export const titleFontSize = { xs: "1.4rem", sm: "1.563em" };
const text =
  "hi 👋, i’m yuki—  PhD student, tech dev🧑‍💻/running🏃/One Piece🏴‍☠️ lover, and MASTURI🏮 enthusiast.";
const speed = 100;
const commaPause = 1000;

const TypingH1 = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      return;
    }

    const timeoutId = setTimeout(
      () => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      },
      text[index - 1] === "," || text[index - 1] === "—" ? commaPause : speed
    );

    return () => clearTimeout(timeoutId);
  }, [index, text]);

  // useEffect(() => {
  //   let index = 0;
  //   setTyping(true);
  //   function typeChar() {
  //     console.log(index, text.length);
  //     if (index > text.length) {
  //       setTyping(false);
  //       return;
  //     }

  //     setDisplayedText((prev) => (prev === text ? prev : prev + text[index]));
  //     index += 1;
  //     const delay = text[index - 1] === "," ? commaPause : speed;
  //     setTimeout(typeChar, delay);
  //   }

  //   if (typing) {
  //     typeChar();
  //   }
  // }, [text]);

  // useEffect(() => {
  //   let index = 0;
  //   setTyping(true);
  //   const intervalId = setInterval(() => {
  //     setDisplayedText((prev) => prev + text[index]);
  //     const val = text[index];
  //     index += 1;
  //     if (index === text.length - 1) {
  //       clearInterval(intervalId);
  //       setTyping(false);
  //     }
  //   }, speed);
  //   return () => clearInterval(intervalId);
  // }, [text, speed]);

  return (
    <Typography
      component="h1"
      variant="h1"
      fontSize={titleFontSize}
      // textの改行幅を広げる
      sx={{ whiteSpace: "pre-line", lineHeight: "1.5em" }}
    >
      {displayedText}
      <span className={index < text.length ? "cursor" : ""}>
        {typing ? "|" : ""}
      </span>
    </Typography>
  );
};

export default TypingH1;
