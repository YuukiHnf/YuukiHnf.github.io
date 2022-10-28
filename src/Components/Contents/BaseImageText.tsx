import { MaxWidth } from "@/styles/GlobalTheme";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ReactNode } from "react";
import { WorkType } from "src/Views/Works";
import WidthHandler from "../Demons/WidthHandler";

type Props = {
  Image: ReactNode;
  Content: ReactNode;
  imageIsLeft?: boolean;
  ref?: (node?: Element | null | undefined) => void;
};

/**
 * 画像とテキスト
 * @returns
 */
const BaseImageText: React.FC<Props> = ({
  Image,
  Content,
  imageIsLeft,
  ref,
}: Props) => {
  return (
    <WidthHandler>
      {/* <Box
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
      > */}
      <Stack
        ref={ref}
        height={{ xs: undefined, md: "344px" }}
        width="100%"
        maxWidth={MaxWidth}
        direction={{
          sm: "column",
          md: imageIsLeft ? "row" : "row-reverse",
        }}
        spacing={{ xs: 1, md: "112px" }}
        justifyContent="center"
        alignItems={"center"}
        p="8px 32px"
      >
        {/* 画像 */}
        <Box
          maxHeight={"328px"}
          maxWidth={"470px"}
          width={{ xs: "calc(100%-16px)", md: "470px" }}
          p={{ xs: "8px", md: "0px" }}
          alignItems="center"
        >
          {Image}
        </Box>
        {/* 文章 */}
        <Box
          height={{ xs: undefined, md: "328px" }}
          // maxHeight={{ xs: "328px", md: "328px" }}
          width="470px"
          maxWidth={"100vw"}
          padding={{ xs: "8px 32px", md: "0px" }}
        >
          {Content}
        </Box>
      </Stack>
      {/* </Box> */}
    </WidthHandler>
  );
};

export default BaseImageText;
