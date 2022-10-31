import { MaxWidth } from "@/styles/GlobalTheme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WidthHandler from "../Demons/WidthHandler";
type Props = {
  title?: string;
  url?: string;
};
/**
 * タイトルのやつ
 * @returns
 */
const Title = ({ title, url }: Props) => {
  return (
    <Box
      width="100%"
      height={"240px"}
      position="relative"
      bgcolor="rgba(0,0,0,0.39)"
      mb="56px"
      mt="56px"
      overflow={"hidden"}
    >
      {/* 背景 */}
      <Box position="absolute" height={"240px"} width="100%">
        {/* <Image src="/hokudai.jpg" alt="hokudai" fill /> */}
        <img
          src={url ?? "/hokudai.jpg"}
          style={{ objectFit: "fill", width: "100%" }}
        />
      </Box>
      {/* ぼかし */}
      <Box
        position="absolute"
        height={"240px"}
        width="100%"
        zIndex={2}
        bgcolor="rgba(20,20,20,0.40)"
        sx={{ filter: "blur(6px)" }}
      />
      {/* タイトル */}
      <Box
        width={"100%"}
        height={"228px"}
        maxWidth={MaxWidth}
        margin={"0 auto"}
        position="relative"
        overflow={"hidden"}
        zIndex={3}
      >
        <Typography
          position="absolute"
          bottom="58px"
          left="32px"
          sx={{
            // fontFamily: "Montserrat",
            // fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "58px",
            color: "white",
            WebkitTextStroke: "solid",
            WebkitTextStrokeColor: "rgba(0, 0, 0, 0.6)",
            WebkitTextStrokeWidth: "0.75px",
          }}
        >
          {title ?? "hogehoge"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
