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
import Work from "src/CMS/Work";
import Education from "src/CMS/Education";
import Article from "src/CMS/Articles";
import Servise from "src/CMS/Servise";
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
                  に所属する博士2年生です。専門は情報科学の一領域であるヒューマンコンピュータインタラクション分野で、特に、視覚障がい者のアシスト技術や複数人が協力しやすくなる情報技術の研究開発に取り組んでいます。学振特別研究員（DC2）。未踏IT
                  スーパークリエータ。
                </Typography>
                <Typography
                  variant="body1"
                  pt={2}
                  color={"#347DA8"}
                  fontWeight={"bold"}
                >
                  2027年3月に博士課程修了見込みです。修了後の研究職やエンジニア職を探し始めています。機会がございましたら、ご連絡ください。
                </Typography>
              </Box>
              <NewsUnified isEnglish={false} />
              <Box ref={projectsElementRef} pb={1}>
                <SubTitle title={"プロジェクト"} isEnglish={false} />
              </Box>
              <Projects isEnglish={false} />
              <Box ref={publicationsElementRef}>
                <SubTitle title={"論文"} isEnglish={false} />
              </Box>
              <Publications />
              <Box ref={awardElementRef}>
                <SubTitle title={"受賞"} isEnglish={false} />
              </Box>
              <Award />
              <Box ref={aboutElementRef} id="About">
                <SubTitle title={"職歴"} />
              </Box>
              <Work />
              <Box>
                <SubTitle title={"学歴"} isEnglish={false} />
              </Box>
              <Education />
              <Box>
                <SubTitle title={"研究助成等"} isEnglish={false} />
              </Box>
              <Grant />
              <SubTitle title={"講演等"} />
              <Talk />
              <SubTitle title={"記事"} isEnglish={false} />
              <Article />
              <SubTitle title={"ボランティア・活動"} />
              <Servise isEnglish={false} />
              <Box>
                <SubTitle title={"趣味"} isEnglish={false} />
              </Box>
              <Hobby isEnglish={false} />
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
