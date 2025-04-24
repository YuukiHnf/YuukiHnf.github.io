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
import NewsDesktop from "src/CMS/News";
import News_en from "src/CMS/News_en";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import Servise from "src/CMS/Servise";
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
                ref={aboutElementRef}
                id="About"
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
                  (HCI). I focus on the design, development, and evaluation of
                  assistive technology that supports the daily activities and
                  exercises of people with visual impairments. From September
                  2024 to March 2025, I was a visiting student at the{" "}
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
                  </Link>
                  . Please refer to my{" "}
                  <Link
                    href={"./CV.pdf"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    CV
                  </Link>{" "}
                  if you are interested!
                </Typography>
                <Typography
                  variant="body1"
                  pt={2}
                  color={"#347DA8"}
                  fontWeight={"bold"}
                >
                  Looking for a Research Internship Opportunities — Summer or
                  Winter 2025!
                </Typography>
                {/* <Typography variant="body1" pt={2}>
                  I&apos;m broadly interested in UI/UX design for social
                  computing. Specifically, I want to design a UI/UX enhancing
                  “get-together” experience, currently focusing on watching
                  together (co-located families and friends co-watching in a
                  living room, or remote viewers watching together on
                  video-sharing and social-VR platforms). In addition, I am
                  engaging in sub-projects about “work together” (civic- and
                  hobby-based communities enhancement through festival
                  management) and “enjoy together” (public exhibition, display,
                  and technology).
                </Typography> */}

                {/* <Typography variant="body1" pt={2}>
                  I like prototyping and development: Next.js, React, Unity(C#),
                  Python, Arduino, Raspberry Pi, Toio swarming robots. A notable
                  project in my development life is{" "}
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
                  Temaneki for two years. Over 500 users in Japan have adopted
                  Temaneki.
                </Typography> */}
              </Box>
              {/* <Box
                width={"100%"}
                display={{ xs: "flex", sm: "flex", md: "none" }}
              >
                <NewsDesktop />
              </Box> */}
              <Box>
                {/* <Box mt={"48px"}>
                  <Typography variant="h1">{"News"}</Typography>
                </Box> */}
                <SubTitle title={"News"} />
              </Box>
              <News_en />
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
              <Box>
                <SubTitle title={"Grants"} />
              </Box>
              <Grant En />
              {/* <SubTitle title={"Talk"} /> */}
              <SubTitle title={"Academic Service"} />
              <Servise />
              <Box>
                <SubTitle title={"Others"} />
              </Box>
              <Hobby />
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
