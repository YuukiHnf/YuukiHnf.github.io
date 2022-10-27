import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WidthHandler from "../Demons/WidthHandler";

/**
 * 画像とテキスト
 * @returns
 */
const ImageText = () => {
  return (
    <WidthHandler>
      <Box
        height={330}
        width="100%"
        bgcolor="blue"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "56px",
        }}
        p="8px 0px"
      >
        {/* 画像 */}
        <Box>
          <Box
            component={"img"}
            sx={{ display: "block", height: "328px", overflow: "hidden" }}
            src={"/NoImage.png"}
            alt={"自己紹介写真"}
          ></Box>
        </Box>
        {/* 文章 */}
        <Box bgcolor="gray" height="328px" width="100%" maxWidth={"100vw"}>
          <Typography width="100%">学校 北海道大学</Typography>
        </Box>
      </Box>
    </WidthHandler>
  );
};

export default ImageText;
