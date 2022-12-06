import { MaxWidth } from "@/styles/GlobalTheme";
import { Box, Typography } from "@mui/material";
import React from "react";

/**
 * おっきいタイトル表示
 * @returns
 */
const TopTitle = () => {
  return (
    <>
      <Box
        width="100%"
        height={"450px"}
        position="relative"
        bgcolor="rgba(0,0,0,0.39)"
        mb="24px"
      >
        {/* 動画の上 */}
        <Box
          width={"100%"}
          height={"450px"}
          maxWidth={MaxWidth}
          margin={"0 auto"}
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          bottom="0px"
          overflow={"hidden"}
          bgcolor="rgba(0,0,0,0.3)"
          zIndex={2}
        ></Box>
        {/* 動画 */}
        <video
          webkit-playsinline
          muted
          loop
          autoPlay
          playsInline
          style={{
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            height: "100%",
          }}
        >
          {/* <source src="top_base.mp4" type="video/mp4" /> */}
        </video>
        <Box
          width={"100%"}
          height={"450px"}
          maxWidth={MaxWidth}
          margin={"0 auto"}
          position="relative"
          overflow={"hidden"}
        >
          {/* <Typography */}
          <Box
            position="absolute"
            bottom="156px"
            left="32px"
            sx={{
              // fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "58px",
              color: "white",
              WebkitTextStroke: "solid",
              WebkitTextStrokeColor: "rgba(0, 0, 0, 1.0)",
              WebkitTextStrokeWidth: "0.75px",
            }}
            zIndex={3}
          >
            {"Yuki Abe"}
            <Typography
              sx={{
                // fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "23.4px",
                lineHeight: "34px",
                color: "white",
                WebkitTextStroke: "solid",
                WebkitTextStrokeColor: "rgba(0, 0, 0, 0.6)",
                WebkitTextStrokeWidth: "0.75px",
              }}
            >
              {"Master Student @ Hokkaido Univ. CS"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopTitle;
