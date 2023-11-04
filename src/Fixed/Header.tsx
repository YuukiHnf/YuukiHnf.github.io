import { Box, Button, Link, Typography } from "@mui/material";
import Head from "next/head";
import React, { useMemo } from "react";

const Header = () => {
  return (
    <Head>
      <title>abeyuki</title>
      <meta
        name="阿部優樹のポートフォリオ"
        content="阿部優樹のポートフォリオ"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;

export const HeaderTwo = () => {
  return (
    <Box
      width={"100%"}
      height="81px"
      position="relative"
      p="16px 16px"
      // グレーの白を線として入れる
      borderBottom={"1px solid #f2f3f3"}
    >
      {/* 中心に添える   */}
      <Box
        maxWidth={"925px"}
        p="1"
        margin={"0px auto"}
        height="42px"
        display="flex"
      >
        <Link
          color="inherit"
          sx={{ color: "gray.100", textDecoration: "none" }}
          href="/"
        >
          {/* Open SansのフォントでTypographyで提示する. */}
          <Typography
            variant="h5"
            component="h1"
            // textAlign="center"
            color="gray.900"
            fontFamily="Open Sans"
            fontWeight="bold"
            lineHeight="42px"
            // 縦方向の中心に添える
            sx={{
              verticalAlign: "middle",
              // borderlineを消す
            }}
            fontSize={"18px"}
          >
            Yuki Abe
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
