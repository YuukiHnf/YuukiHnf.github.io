import BodyWrapper from "@/components/BodyWrapper";
import SubTitle from "@/components/Title/SubTitle";
import TypingH1, { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { Box, Grid, Link, Menu, Stack, Typography } from "@mui/material";
import React from "react";
import Award from "src/CMS/Award";
import NewsDesktop from "src/CMS/News";
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
          <Grid item xs={3} width={"100%"}>
            <Profile />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <Box>
              <Menus />
              <Box id="About" minHeight={{ xs: "136px", sm: "160px" }} mb={1}>
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
                  に所属する修士２年です．コンピュータを活用して，人々の社会的なつながりを強める研究しています．特に，コンピュータを使ってる人が「他の人と仲良くなる」/「コミュニティに参加したくなる」/「参加できなかったつながりに参加できる」ような
                  操作画面（UI）やデジタル体験（UX）をデザインすることに興味があります．
                  未踏IT22年度スーパークリエータ. 株式会社 temaneki 代表．
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
              <SubTitle title={"Projects"} />
              <Projects />
              <SubTitle title={"Publications"} />
              <Publications />
              <SubTitle title={"Award"} />
              <Award />
              <SubTitle title={"Contact"} />
              <Typography>hnf_yuuki[at]ist.hokudai.ac.jp</Typography>
              {/* <Typography>
                2022年，北海道大学大学院情報科学研究科情報理工学専攻修士課程進学．
                ヒューマンコンピュータインタラクション研究室に所属し，
                ライブエンターテイメントに関わるインタフェースデザインを研究．
                未踏IT22年度スーパークリエータ. 株式会社 temaneki 代表．
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default Index;
