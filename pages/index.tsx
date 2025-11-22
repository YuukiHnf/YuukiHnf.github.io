import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Award from "src/CMS/Award";
import Grant from "src/CMS/Grant";
import Hobby from "src/CMS/Hobby";
import NewsUnified from "src/CMS/NewsUnified";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import Servise from "src/CMS/Servise";
import Talk from "src/CMS/Talk";
import BackButton from "src/Fixed/BackButton";
import { HeaderTwo } from "src/Fixed/Header";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";
import Work from "src/CMS/Work";
import Education from "src/CMS/Education";
import Article from "src/CMS/Articles";
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
            <Profile isEnglish />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <BackButton anchorRef={aboutElementRef} contentRef={topRef} />
            <Box>
              <Menus
                isEnglish={true}
                aboutElementRef={aboutElementRef}
                projectsElementRef={projectsElementRef}
                publicationsElementRef={publicationsElementRef}
                awardElementRef={awardElementRef}
                contactElementRef={contactElementRef}
              />
              <Box
                // minHeight={{ xs: "136px", sm: "160px" }}
                minHeight={{ xs: "136px", sm: "100px" }}
                mb={0.5}
              >
                <TypingH1 />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  // sx={{ xs: {}, sm: { textAlign: "justify", hyphens: "auto" } }}
                >
                  I am a Ph.D. student in the{" "}
                  <Link
                    href={"https://hci-lab.jp/en/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    HCI-lab at Hokkaido University
                  </Link>
                  , where I am advised by{" "}
                  <Link
                    href={"https://daisukesakamoto.jp/en/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    Prof. Daisuke Sakamoto
                  </Link>
                  . My research lies in the field of Human-Computer Interaction
                  (HCI). I design, develop, and evaluate assistive technology
                  for visually impaired people&apos;s daily activities and
                  exercises. I was a visiting student at{" "}
                  <Link
                    href={"https://smuhci.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    SMU HCI Research
                  </Link>
                  , and I also work with{" "}
                  <Link
                    href={"https://kotarohara.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    Prof. Kotaro Hara
                  </Link>
                  {/* From September 2024 to March 2025, I was a
                  visiting student at the{" "}
                  <Link
                    href={"https://smuhci.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    SMU HCI Research
                  </Link>
                  , where I was advised by{" "}
                  <Link
                    href={"https://kotarohara.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    Prof. Kotaro Hara
                  </Link> */}
                  . Please see my{" "}
                  <Link
                    href={"./CV.pdf"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    CV
                  </Link>{" "}
                  for more!
                </Typography>
                <Typography
                  variant="body1"
                  pt={2}
                  color={"#347DA8"}
                  fontWeight={"bold"}
                >
                  I am expected to complete my Ph.D. degree in March 2027 and am
                  actively looking for opportunities after graduation. Please
                  let me know if there are any opportunities available!
                </Typography>
              </Box>
              <NewsUnified isEnglish={true} />
              <Box ref={projectsElementRef} pb={0.5}>
                <SubTitle title={"Projects"} />
              </Box>
              <Projects />
              <Box ref={publicationsElementRef}>
                <SubTitle title={"Publications"} />
              </Box>
              <Publications En />
              <Box ref={awardElementRef}>
                <SubTitle title={"Awards"} />
              </Box>
              <Award En />
              <Box ref={aboutElementRef} id="About">
                <SubTitle title={"Work"} />
              </Box>
              <Work En />
              <Box>
                <SubTitle title={"Education"} />
              </Box>
              <Education En />
              <Box>
                <SubTitle title={"Grants"} />
              </Box>
              <Grant En />
              <SubTitle title={"Talk"} />
              <Talk En />
              <SubTitle title={"Articles"} />
              <Article En />
              <SubTitle title={"Service"} />
              <Servise isEnglish />
              <Box>
                <SubTitle title={"Hobby"} />
              </Box>
              <Hobby isEnglish />
              <Box ref={contactElementRef}>
                <SubTitle title={"Contact"} />
              </Box>
              <Typography>hnf_yuuki[at]eis.hokudai.ac.jp</Typography>
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default Index;
