import { Box, Typography } from "@mui/material";
import React from "react";
import WidthHandler from "../Demons/WidthHandler";

/**
 * テキストと説明文を出すところ
 * @returns
 */
const TextContent = () => {
  return (
    <WidthHandler>
      <Box sx={{ height: "249px", pb: "32px", p: "32px 32px" }}>
        <Box>自己紹介</Box>
        <Box>自己紹介</Box>
      </Box>
    </WidthHandler>
  );
};

export default TextContent;
