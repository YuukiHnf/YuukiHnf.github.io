import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Award from "src/CMS/Award";
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
          direction={{ xs: "column", sm: "row" }}
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
                  <Link
                    href={"https://hci-lab.jp/"}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: theme.palette.text.secondary,
                    }}
                  >
                    北海道大学 情報科学院
                    ヒューマンコンピュータインタラクション研究室
                  </Link>
                  に所属する修士２年生です．コンピュータを活用して人々の社会的なつながりを強める研究をしています．特に，人が「初対面の人と自然に仲良くなれる」/「コミュニティに思わず参加したくなる」/「物理的・身体的に参加できなかったつながりに参加できるようになる」ためのコンピュータの操作手法（UI）やデジタル体験（UX）に興味があります．未踏IT22年度スーパークリエータ.
                  株式会社 temaneki 代表．
                </Typography>
                <Typography variant="body1" fontWeight="lighter" pt={1}>
                  研究キーワード
                </Typography>
                <Typography variant="body1" fontWeight="lighter">
                  Social Participation, Social Engagement, UI/UX, Accessible
                  Online Festival, Live Streaming, Civic tech.
                </Typography>
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
              <Box width={"100%"} display={{ xs: "flex", sm: "none" }}>
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
