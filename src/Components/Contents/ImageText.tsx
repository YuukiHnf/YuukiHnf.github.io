import { MaxWidth } from "@/styles/GlobalTheme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { WorkType } from "src/Views/Works";
import WidthHandler from "../Demons/WidthHandler";
import BaseImageText from "./BaseImageText";

type Props = {
  value?: WorkType;
  imageIsLeft?: boolean;
};

/**
 * 画像とテキスト
 * @returns
 */
const DefaultImageText = ({ value, imageIsLeft = true }: Props) => {
  return (
    <BaseImageText
      Image={
        <>
          <Box
            component={"img"}
            sx={{ display: "block", height: "328px", overflow: "hidden" }}
            src={value ? value.imageUrl : "/NoImage.png"}
            alt={value ? value.description : "自己紹介写真"}
          ></Box>
        </>
      }
      Content={
        <Box
          color="text.secondary"
          alignItems={"center"}
          height="264px"
          padding="32px 0px"
        >
          <Typography width="100%" fontWeight={"bold"}>
            {"学 校 名"}
          </Typography>
          <Typography width="100%">{"北海道大学 大学院情報科学院"}</Typography>
          <br />
          <Typography width="100%" fontWeight={"bold"}>
            {"専攻・課程"}
          </Typography>
          <Typography width="100%">
            {"情報科学専攻　修士課程　情報理工学コース"}
          </Typography>
          <br />

          <Typography width="100%" fontWeight={"bold"}>
            {"学　　　年"}
          </Typography>
          <Typography width="100%">{"1年次"}</Typography>
          <br />

          <Typography width="100%" fontWeight={"bold"}>
            {"研　究　室"}
          </Typography>
          <Typography width="100%">
            {"ヒューマンコンピュータインタラクション研究室"}
          </Typography>
        </Box>
      }
      imageIsLeft={imageIsLeft}
    />
  );
};

export default DefaultImageText;
