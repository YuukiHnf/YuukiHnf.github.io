import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Award from "src/CMS/Award";
import NewsDesktop from "src/CMS/News";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import BackButton from "src/Fixed/BackButton";
import { HeaderTwo } from "src/Fixed/Header";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";
const Index = () => {
  const isEnglish = true;
  const topRef = useRef<HTMLElement>(null);
  const aboutElementRef = useRef<HTMLElement>(null);
  const projectsElementRef = useRef<HTMLElement>(null);
  const publicationsElementRef = useRef<HTMLElement>(null);
  const awardElementRef = useRef<HTMLElement>(null);
  const contactElementRef = useRef<HTMLElement>(null);
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
          <Box ref={topRef} />
          <Grid item xs={3} width={"100%"}>
            <Profile />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <BackButton anchorRef={aboutElementRef} contentRef={topRef} />
            <Box>
              <Menus
                aboutElementRef={aboutElementRef}
                projectsElementRef={projectsElementRef}
                publicationsElementRef={publicationsElementRef}
                awardElementRef={awardElementRef}
                contactElementRef={contactElementRef}
              />
              <Box
                ref={aboutElementRef}
                id="About"
                minHeight={{ xs: "136px", sm: "160px" }}
                mb={1}
              >
                <TypingH1 />
              </Box>
              <Box>
                <Typography variant="body1">
                  I am a Master 2nd student at Hokkaido University advised by{" "}
                  <Link
                    href={"https://daisukesakamoto.jp/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    Daisuke Sakamoto
                  </Link>{" "}
                  at the{" "}
                  <Link
                    href={"https://hci-lab.jp/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    HCI-lab
                  </Link>
                  . I'll start my Ph.D. program in April 2024. My research
                  interests lie in the field of Human-Computer Interaction
                  (HCI).
                </Typography>
                <Typography variant="body1" pt={1}>
                  I&apos;m broadly interested in UI/UX design for social
                  content, such as video-sharing platform, live streaming,
                  social AR/VR. Specifically, I engage in prototyping new
                  interfaces or digital experiences, and conduct user studies or
                  field deployments to explore and share these insights.
                </Typography>

                <Typography variant="body1" pt={1}>
                  I also like prototyping and development: Next.js, React,
                  Unity(C#), Python, Arduino, Raspberry Pi, Toio swarming
                  robots. A notable project in my development life is{" "}
                  <Link
                    href={"https://temaneki.jp"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    Temaneki
                  </Link>
                  , a collaboration application featuring efficiency and
                  enjoyment for participation. I have developed and managed
                  Temaneki for two years, and has been adapted by over 500 users
                  across Japan.
                </Typography>
              </Box>
              <Box
                width={"100%"}
                display={{ xs: "flex", sm: "flex", md: "none" }}
              >
                <NewsDesktop />
              </Box>
              <Box ref={projectsElementRef}>
                <SubTitle title={"Projects"} />
              </Box>
              <Projects />
              <Box ref={publicationsElementRef}>
                <SubTitle title={"Publications"} />
              </Box>
              <Publications />
              <Box ref={awardElementRef}>
                <SubTitle title={"Award"} />
              </Box>
              <Award />
              <Box ref={contactElementRef}>
                <SubTitle title={"Contact"} />
              </Box>
              <Typography>hnf_yuuki[at]ist.hokudai.ac.jp</Typography>
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default Index;
