import { MaxWidth } from "@/styles/GlobalTheme";
import { Box, Typography } from "@mui/material";
import React from "react";
import WidthHandler from "../Demons/WidthHandler";
type Props = {
  title?: string;
};
/**
 * タイトルのやつ
 * @returns
 */
const Title = ({ title }: Props) => {
  return (
    <Box
      width="100%"
      height={"240px"}
      position="relative"
      bgcolor="rgba(0,0,0,0.39)"
      mb="24px"
      mt="40px"
    >
      <Box
        width={"100%"}
        height={"228px"}
        maxWidth={MaxWidth}
        margin={"0 auto"}
        position="relative"
        overflow={"hidden"}
      >
        <Typography
          position="absolute"
          bottom="58px"
          left="32px"
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
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
