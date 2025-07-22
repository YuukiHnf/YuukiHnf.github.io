import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Award from "src/CMS/Award";
import Grant from "src/CMS/Grant";
import Hobby from "src/CMS/Hobby";
import NewsUnified from "src/CMS/NewsUnified";
import Projects from "src/CMS/Projects";
import Publications from "src/CMS/Publications";
import Talk from "src/CMS/Talk";
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
                  <Link
                    href={"https://hci-lab.jp/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    北海道大学 ヒューマンコンピュータインタラクション研究室
                  </Link>
                  に所属する博士2年生です．研究分野は情報科学の一領域であるHuman-Computer
                  Interaction
                  (HCI)で，特に，視覚障がい者のアシスト技術や複数人が協力しやすくなるAR/VR技術の研究開発に取り組んでいます．
                  {/* <br /> */}
                  {/* 2024年9月から2025年3月までは，シンガポールの
                  <Link
                    href={"https://smuhci.com/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    SMU HCI Research
                  </Link>
                  にて研究活動を行っていました． */}
                  ユーザとそのコミュニティで共に生活しながら，彼らに「これを使いたい」と思ってもらえる価値や体験を設計し，そのプロトタイプの作成から定量・定性的な評価まで一貫して行うことを得意としています．
                  学振 特別研究員（DC2）．未踏IT
                  22年度スーパークリエータ．株式会社 temaneki
                  取締役．一般社団法人 新雪 メンター．
                </Typography>
              </Box>
              <NewsUnified isEnglish={false} />
              <Box ref={projectsElementRef} pb={1}>
                <SubTitle title={"プロジェクト"} isEnglish={false} />
              </Box>
              <Projects />
              <Box ref={publicationsElementRef}>
                <SubTitle title={"論文"} isEnglish={false} />
              </Box>
              <Publications />
              <Box ref={awardElementRef}>
                <SubTitle title={"受賞"} isEnglish={false} />
              </Box>
              <Award />
              <Box>
                <SubTitle title={"研究助成等"} isEnglish={false} />
              </Box>
              <Grant />
              <SubTitle title={"講演等"} />
              <Talk />
              <Box>
                <SubTitle title={"その他"} isEnglish={false} />
              </Box>
              <Hobby />
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: "transparent",
                }}
                variant="caption"
              >
                ゆるいポッドキャストもやってます。よろしければ。
              </Typography>
              <iframe
                title="Spotify podcast"
                style={{ borderRadius: "12px" }} // ← style はオブジェクト
                src="https://open.spotify.com/embed/show/4wUxidzTLqBABhlWlJTdPx?utm_source=generator"
                width="100%"
                height="172"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                allowFullScreen // ← allowfullscreen → allowFullScreen
              />
              <Box ref={contactElementRef}>
                <SubTitle title={"連絡先"} isEnglish={false} />
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
