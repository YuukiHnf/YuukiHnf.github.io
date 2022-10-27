import { MaxWidth } from "@/styles/GlobalTheme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { WorkType } from "src/Views/Works";
import WidthHandler from "../Demons/WidthHandler";

type Props = {
  value?: WorkType;
  imageIsLeft?: boolean;
};

/**
 * 画像とテキスト
 * @returns
 */
const ImageText = ({ value, imageIsLeft = true }: Props) => {
  return (
    <WidthHandler>
      <Box
        height={330}
        width="100%"
        maxWidth={MaxWidth}
        bgcolor="blue"
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
              bgcolor="gray"
              height="328px"
              width="100%"
              maxWidth={"100vw"}
              //   paddingRight="56px"
            >
              <Typography width="100%">
                {value ? value.title : "学校 北海道大学"}
              </Typography>
              <Typography width="100%">
                {value ? value.subTitle : "学校 北海道大学"}
              </Typography>
              <Typography width="100%">
                {value ? value.description : "学校 北海道大学"}
              </Typography>
            </Box>
            {/* 画像 */}
            <Box>
              <Box
                component={"img"}
                sx={{ display: "block", height: "328px", overflow: "hidden" }}
                src={value ? value.imageUrl : "/NoImage.png"}
                alt={value ? value.description : "自己紹介写真"}
              ></Box>
            </Box>
          </>
        )}
        {/* 画像を左に置く場合 */}
        {imageIsLeft && (
          <>
            {/* 画像 */}
            <Box>
              <Box
                component={"img"}
                sx={{ display: "block", height: "328px", overflow: "hidden" }}
                src={value ? value.imageUrl : "/NoImage.png"}
                alt={value ? value.description : "自己紹介写真"}
              ></Box>
            </Box>
            {/* 文章 */}
            <Box
              bgcolor="gray"
              height="328px"
              width="100%"
              maxWidth={"100vw"}
              //   paddingLeft="56px"
            >
              <Typography width="100%">
                {value ? value.title : "学校 北海道大学"}
              </Typography>
              <Typography width="100%">
                {value ? value.subTitle : "学校 北海道大学"}
              </Typography>
              <Typography width="100%">
                {value ? value.description : "学校 北海道大学"}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </WidthHandler>
  );
};

export default ImageText;
