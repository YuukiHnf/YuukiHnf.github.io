import { MaxWidth } from "@/styles/GlobalTheme";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { WorkType } from "src/Views/Works";
import Divider from "../Atoms/Divider";
import WidthHandler from "../Demons/WidthHandler";
import BaseImageText from "./BaseImageText";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import Link from "next/link";

type Props = {
  value?: WorkType;
  imageIsLeft?: boolean;
};

/**
 * 画像とテキスト
 * @returns
 */
const WorkContent = ({ value, imageIsLeft = true }: Props) => {
  const lbToBr = (txt: string) => {
    return txt.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));
  };
  return (
    <BaseImageText
      Image={
        <>
          <Box
            component={"img"}
            sx={{
              display: "block",
              maxHeight: "328px",
              maxWidth: "100%",
              overflow: "hidden",
            }}
            src={value ? value.imageUrl : "/NoImage.png"}
            alt={value ? value.description : "自己紹介写真"}
            borderRadius={"12px"}
          ></Box>
        </>
      }
      Content={
        <Box position={"relative"} height="100%">
          <Box sx={{ pb: "32px" }}>
            <Typography
              width="100%"
              sx={{
                //     フォント系
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "120%",
                color: "#111111",
              }}
            >
              {value ? value.title : "学校 北海道大学"}
            </Typography>
          </Box>
          <Divider top="70px" left="0px" />
          <Box sx={{ pb: "16px" }}>
            <Typography
              width="100%"
              sx={{
                //     フォント系
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "175%",
                color: "rgba(0, 0, 0, 0.6)",
                letterSpacing: "0.15px",
              }}
            >
              {value ? lbToBr(value.subTitle) : "学校 北海道大学"}
            </Typography>
          </Box>
          <Typography width="100%" color="text.disabled">
            {value ? lbToBr(value.description) : "学校 北海道大学"}
          </Typography>
          {value && (
            <Link href={value.link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                color="primary"
                // sx={{ position: "absolute", bottom: "0px" }}
                sx={{ mt: "16px", borderRadius: "12px" }}
                startIcon={<LaunchRoundedIcon />}
              >
                MORE
              </Button>
            </Link>
          )}
        </Box>
      }
      imageIsLeft={imageIsLeft}
    />
  );
  // return (
  //   <WidthHandler>
  //     <Box
  //       height={330}
  //       width="100%"
  //       maxWidth={MaxWidth}
  //       //   bgcolor="blue"
  //       sx={{
  //         display: "flex",
  //         flexDirection: "row",
  //         alignItems: "center",
  //         gap: "112px",
  //         justifyContent: "space-between",
  //       }}
  //       p="8px 32px"
  //     >
  //       {/* 画像を右に置く場合 */}
  //       {!imageIsLeft && (
  //         <>
  //           {/* 文章 */}
  //           <Box
  //             bgcolor="gray"
  //             height="328px"
  //             width="100%"
  //             maxWidth={"100vw"}
  //             //   paddingRight="56px"
  //           >
  // <Typography width="100%">
  //   {value ? value.title : "学校 北海道大学"}
  // </Typography>
  // <Typography width="100%">
  //   {value ? value.subTitle : "学校 北海道大学"}
  // </Typography>
  // <Typography width="100%">
  //   {value ? value.description : "学校 北海道大学"}
  // </Typography>
  //           </Box>
  //           {/* 画像 */}
  //           <Box>
  // <Box
  //   component={"img"}
  //   sx={{ display: "block", height: "328px", overflow: "hidden" }}
  //   src={value ? value.imageUrl : "/NoImage.png"}
  //   alt={value ? value.description : "自己紹介写真"}
  // ></Box>
  //           </Box>
  //         </>
  //       )}
  //       {/* 画像を左に置く場合 */}
  //       {imageIsLeft && (
  //         <>
  //           {/* 画像 */}
  //           <Box>
  //             <Box
  //               component={"img"}
  //               sx={{ display: "block", height: "328px", overflow: "hidden" }}
  //               src={value ? value.imageUrl : "/NoImage.png"}
  //               alt={value ? value.description : "自己紹介写真"}
  //             ></Box>
  //           </Box>
  //           {/* 文章 */}
  //           <Box
  //             bgcolor="gray"
  //             height="328px"
  //             width="100%"
  //             maxWidth={"100vw"}
  //             //   paddingLeft="56px"
  //           >
  //             <Typography width="100%">
  //               {value ? value.title : "学校 北海道大学"}
  //             </Typography>
  //             <Typography width="100%">
  //               {value ? value.subTitle : "学校 北海道大学"}
  //             </Typography>
  //             <Typography width="100%">
  //               {value ? value.description : "学校 北海道大学"}
  //             </Typography>
  //           </Box>
  //         </>
  //       )}
  //     </Box>
  //   </WidthHandler>
  // );
};

export default WorkContent;
