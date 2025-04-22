import BodyWrapper from "@/components/BodyWrapper";
import theme from "@/styles/GlobalTheme";
import { Grid, Link } from "@mui/material";
import React from "react";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";

const NotFound = () => {
  return (
    <>
      <BodyWrapper>
        <Grid
          container
          flexDirection={"row"}
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          width={{ xs: "100%", sm: "100%" }}
          margin={"0px auto"}
        >
          <Grid item xs={3} width={"100%"}>
            <Profile isEnglish />
          </Grid>
          <Grid
            item
            xs={9}
            width={"100%"}
            // text alignを中央にする
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column", // 縦方向に並べる
              // height: "100vh",
            }}
          >
            <h2>This page does not seems to exist.</h2>
            {/* 改行 */}
            <br />
            <h2>
              <Link
                href="/"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: theme.palette.text.secondary,
                }}
              >
                {"  Return Home"}
              </Link>
            </h2>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default NotFound;
