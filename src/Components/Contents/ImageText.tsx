import { MaxWidth } from "@/styles/GlobalTheme";
import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { WorkType } from "src/Views/Works";
import WidthHandler from "../Demons/WidthHandler";
import BaseImageText from "./BaseImageText";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

type Props = {
  value?: WorkType;
  imageIsLeft?: boolean;
};

/**
 * 自己紹介
 * @returns
 */
const ImageText = ({ value, imageIsLeft = true }: Props) => {
  return (
    <BaseImageText
      Image={
        <>
          <Box
            component={"img"}
            sx={{ display: "block", height: "328px", overflow: "hidden" }}
            src={"/myphoto.png"}
            // src={value ? "/myphoto.png" : "/NoImage.png"}
            alt={value ? value.description : "自己紹介写真"}
            borderRadius={"12px"}
          ></Box>
        </>
      }
      Content={
        <Box
          color="text.secondary"
          alignItems={"center"}
          // height="264px"
          padding="22px 0px"
        >
          <Typography width="100%" fontWeight={"bold"}>
            {"学　校　名"}
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
          <Stack direction={"row"} spacing={2} pt="4px">
            <Link
              href={"https://www.facebook.com/profile.php?id=100043165429456"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton sx={{ pl: "0px" }} size="large">
                <FacebookRoundedIcon />
              </IconButton>
            </Link>
            <Link
              href={"https://twitter.com/YuukiHnf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="large">
                <TwitterIcon />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      }
      imageIsLeft={imageIsLeft}
    />
  );
};

export default ImageText;
