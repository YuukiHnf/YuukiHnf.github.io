import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import React from "react";
import Award from "src/CMS/Award";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import { HeaderTwo } from "src/Fixed/Header";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";

const Index = () => {
  return (
    <>
      <BodyWrapper>
        <Grid
          container
          flexDirection={"row"}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          width={{ xs: "100%", sm: "100%" }}
          margin={"0px auto"}
        >
          <Grid item xs={3}>
            <Profile />
          </Grid>
          <Grid item xs={9}>
            <Box>
              <Menus />
              <Box
                sx={{
                  mb: "16px",
                  mt: "2px",
                }}
                minHeight={{ xs: "120px", sm: "120px" }}
              >
                <TypingH1 />
              </Box>
              <Box mt={"16px"}>
                <Typography variant="body1">
                  I am a PhD student at University of Hokkaido, advised by{" "}
                  <Link href={"https://daisukesakamoto.jp/"}>
                    Daisuke Sakamoto
                  </Link>{" "}
                  at the <Link href={"https://hci-lab.jp/"}>HCI-lab</Link>.
                </Typography>
                <Typography variant="body1">
                  I'm broadly interested in social participation in content
                  communities (KEYWORDs: Omasturi/Festival, Social Video
                  Watching, Live Streaming, Stranger Communication).
                  Specifically, I prototype a user interface (UI) and examine
                  usability, how users use it, and user experience (UX), like
                  enhancing engagement, connectedness, and social well-being in
                  communities.
                </Typography>
              </Box>
              <SubTitle title={"Projects"} />
              <Projects />
              <SubTitle title={"Publications"} />
              <Publications />
              <SubTitle title={"Award"} />
              <Award />
              <SubTitle title={"Contact"} />
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default Index;
