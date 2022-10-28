import { MaxWidth } from "@/styles/GlobalTheme";
import { Box, Typography } from "@mui/material";
import React from "react";

/**
 * おっきいタイトル表示
 * @returns
 */
const TopTitle = () => {
  return (
    <Box
      width="100%"
      height={"450px"}
      position="relative"
      bgcolor="rgba(0,0,0,0.39)"
      mb="24px"
    >
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
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "58px",
            color: "white",
            WebkitTextStroke: "solid",
            WebkitTextStrokeColor: "rgba(0, 0, 0, 1.0)",
            WebkitTextStrokeWidth: "0.75px",
          }}
        >
          {"Yuki Abe"}
          <Typography
            sx={{
              fontFamily: "Montserrat",
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
  );
};

export default TopTitle;
