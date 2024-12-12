import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Award from "src/CMS/Award";
import Grant from "src/CMS/Grant";
import NewsDesktop from "src/CMS/News";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import BackButton from "src/Fixed/BackButton";
import { HeaderTwo } from "src/Fixed/Header";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";
const Index = () => {
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
            <Profile isEnglish={false} />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <BackButton anchorRef={aboutElementRef} contentRef={topRef} />
            <Box>
              <Menus
                isEnglish={false}
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
                <Typography
                  variant="body1"
                  // sx={{ xs: {}, sm: { textAlign: "justify", hyphens: "auto" } }}
                >
                  <Link
                    href={"https://hci-lab.jp/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    北海道大学 ヒューマンコンピュータインタラクション研究室
                  </Link>
                  に所属する博士１年生です．研究分野は情報科学の一領域であるHuman-Computer
                  Interaction
                  (HCI)で，特に，複数人が協力しやすくなるコンピュータ技術や，視覚障がい者のアシスト技術の研究開発に取り組んでいます．
                  2024年9月から2025年3月までは，シンガポールの
                  <Link
                    href={"https://smuhci.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    SMU HCI Research
                  </Link>
                  にて研究活動を行っています．未踏IT 22年度スーパークリエータ．
                  株式会社 temaneki 取締役．一般社団法人 新雪 メンター．
                </Typography>
                {/* <Typography variant="body1" fontWeight="lighter" pt={1}>
                  研究キーワード
                </Typography> */}
                {/* <Typography variant="body1" fontWeight="lighter">
                  Human Computer Interaction(HCI), User Interface and User
                  Experience, Social-computing, Accessibility, User Studies and
                  Evaluations.
                </Typography> */}
                {/* <Link href={"https://daisukesakamoto.jp/"}>
                    Daisuke Sakamoto
                  </Link>{" "}
                  at the <Link href={"https://hci-lab.jp/"}>HCI-lab</Link>. */}
                {/* <Typography variant="body1">
                  I`m broadly interested in social participation in content
                  communities.
                </Typography> */}
                {/* <Typography variant="body1">
                  KEYWORDs: Omasturi/Festival, Social Video Watching, Live
                  Streaming, Stranger Communication.
                </Typography> */}
                {/* <Typography variant="body1">
                  I am a Master 2rd student at University of Hokkaido, advised
                  by{" "}
                  <Link href={"https://daisukesakamoto.jp/"}>
                    Daisuke Sakamoto
                  </Link>{" "}
                  at the <Link href={"https://hci-lab.jp/"}>HCI-lab</Link>.
                </Typography>
                <Typography variant="body1">
                  I`m broadly interested in social participation in content
                  communities.
                </Typography>
                <Typography variant="body1">
                  KEYWORDs: Omasturi/Festival, Social Video Watching, Live
                  Streaming, Stranger Communication.
                </Typography> */}
              </Box>
              <Box
                width={"100%"}
                display={{ xs: "flex", sm: "flex", md: "none" }}
              >
                <NewsDesktop />
              </Box>
              <Box ref={projectsElementRef}>
                <SubTitle title={"プロジェクト"} isEnglish={false} />
              </Box>
              <Projects />
              <Box ref={publicationsElementRef}>
                <SubTitle title={"論文"} isEnglish={false} />
              </Box>
              <Publications />
              <Box ref={awardElementRef}>
                <SubTitle title={"受賞"} />
              </Box>
              <Award />
              <Box>
                <SubTitle title={"研究助成等"} />
              </Box>
              <Grant />
              <Box ref={contactElementRef}>
                <SubTitle title={"連絡先"} />
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
