import { Box, Typography } from "@mui/material";
import React from "react";
import Divider from "../Atoms/Divider";
import WidthHandler from "../Demons/WidthHandler";

/**
 * テキストと説明文を出すところ
 * @returns
 */
const TextContent = () => {
  return (
    <WidthHandler>
      <Box
        sx={{
          height: "249px",
          pb: "32px",
          p: "32px 32px",
          position: "relative",
        }}
      >
        <Box sx={{ pb: "32px" }}>
          <Typography
            sx={{
              //     フォント系
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "28.6px",
              lineHeight: "41px",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            自己紹介
          </Typography>
        </Box>
        <Divider top="88px" left="32px" />
        <Box>
          <Typography
            sx={{
              //     フォント系
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "19.5px",
              lineHeight: "28px",
              color: "#50555C",
            }}
          >
            2022年，北海道大学大学院情報科学研究科情報理工学専攻修士課程進学．
          </Typography>
          <Typography
            sx={{
              //     フォント系
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "19.5px",
              lineHeight: "28px",
              color: "#50555C",
            }}
          >
            ライブ配信のインタフェースなど，エンターテイメントの支援を研究．
          </Typography>
          <Typography
            sx={{
              //     フォント系
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "19.5px",
              lineHeight: "28px",
              color: "#50555C",
            }}
          >
            2022年度未踏IT人材発掘育成事業に採択．
          </Typography>
        </Box>
      </Box>
    </WidthHandler>
  );
};

export default TextContent;
