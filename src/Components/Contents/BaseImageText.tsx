import { MaxWidth } from "@/styles/GlobalTheme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ReactNode } from "react";
import { WorkType } from "src/Views/Works";
import WidthHandler from "../Demons/WidthHandler";

type Props = {
  Image: ReactNode;
  Content: ReactNode;
  imageIsLeft?: boolean;
};

/**
 * 画像とテキスト
 * @returns
 */
const BaseImageText = ({ Image, Content, imageIsLeft }: Props) => {
  return (
    <WidthHandler>
      <Box
        height={330}
        width="100%"
        maxWidth={MaxWidth}
        //   bgcolor="blue"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "112px",
          justifyContent: "space-between",
        }}
        p="8px 32px"
      >
        {/* 画像を右に置く場合 */}
        {!imageIsLeft && (
          <>
            {/* 文章 */}
            <Box
              // bgcolor="gray"
              height="328px"
              width="100%"
              maxWidth={"100vw"}
              //   paddingRight="56px"
            >
              {Content}
            </Box>
            {/* 画像 */}
            <Box>{Image}</Box>
          </>
        )}
        {/* 画像を左に置く場合 */}
        {imageIsLeft && (
          <>
            {/* 画像 */}
            <Box>{Image}</Box>
            {/* 文章 */}
            <Box
              // bgcolor="gray"
              height="328px"
              width="100%"
              maxWidth={"100vw"}
              //   paddingLeft="56px"
            >
              {Content}
            </Box>
          </>
        )}
      </Box>
    </WidthHandler>
  );
};

export default BaseImageText;
