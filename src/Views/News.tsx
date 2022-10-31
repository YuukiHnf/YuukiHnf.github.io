import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import WidthHandler from "src/Components/Demons/WidthHandler";
import useOnScreen from "src/Hooks/useOnScreen";

type NewsType = {
  title: string;
  dateString: string;
  link: string;
  imageUrl: string;
};

const NewValues: NewsType[] = [
  {
    title: "temanekiがJagaJagaに紹介されました",
    dateString: "2022/10/28",
    link: "https://hu-jagajaga.com/club/12779/",
    imageUrl:
      "https://hu-jagajaga.com/wp-content/uploads/2022/10/705AF27C-BBD5-4062-A498-8637F0E6B2FD.jpeg",
  },
  {
    title: "Dream Pitch2022でゲスト発表を行いました",
    dateString: "2022/10/20",
    link: "https://no-maps.jp/dreampitch2022/",
    imageUrl:
      "https://no-maps.jp/nomaps_wp/wp-content/uploads/2022/09/20C-1300_Dream-Pitch-3.jpg",
  },
  {
    title: "temanekiがいいね! Hokudaiに紹介されました",
    dateString: "2022/06/27",
    link: "https://costep.open-ed.hokudai.ac.jp/like_hokudai/article/26259",
    imageUrl:
      "https://costep.open-ed.hokudai.ac.jp/like_hokudai/wp/wp-content/uploads/2022/06/20220627_tech1s.jpg",
  },
  {
    title: "未踏IT人材発掘・育成事業に採択されました",
    dateString: "2022/06/03",
    link: "https://www.ipa.go.jp/jinzai/mitou/2022/gaiyou_sd-3.html",
    imageUrl: "https://www.ipa.go.jp/files/000067018.jpg",
  },
  {
    title: "インタラクション2022にて口頭発表を行いました",
    dateString: "2022/03/02",
    link: "https://www.interaction-ipsj.org/2022/",
    imageUrl:
      "https://www.interaction-ipsj.org/2022/wp-content/uploads/2022/03/interaction22-2048x595.png",
  },
  {
    title:
      "北大テックガレージ(HUTG) Summer Founders Program 02に採択されました",
    dateString: "2021/2月-3月",
    link: "https://cosmos.gfc.hokudai.ac.jp/hkd-startup-support/sfp",
    imageUrl:
      "https://cosmos.gfc.hokudai.ac.jp/wp/wp-content/uploads/2021/11/logo_C1-1280x1599.png",
  },
  {
    title: "HL2021でtoio SDK for Unity賞を受賞しました",
    dateString: "2021/09/20",
    link: "https://cosmos.gfc.hokudai.ac.jp/news/1194",
    imageUrl:
      "https://cosmos.gfc.hokudai.ac.jp/wp/wp-content/uploads/2022/01/c2a7418633d509ed3468c1c6ad04578b-960x720.jpg",
  },
  {
    title:
      "北大テックガレージ(HUTG) Summer Founders Program 01に採択されました",
    dateString: "2021/8月-9月",
    link: "https://hci-lab.jp/personal_page/yukiabe/#:~:text=%E5%8C%97%E5%A4%A7%E3%83%86%E3%83%83%E3%82%AF%E3%82%AC%E3%83%AC%E3%83%BC%E3%82%B8(HUTG)%20Summer%20Founders%20Program1(2021%E5%B9%B48%E6%9C%88%2D9%E6%9C%88)",
    imageUrl:
      "https://cosmos.gfc.hokudai.ac.jp/wp/wp-content/uploads/2021/11/logo_C1-1280x1599.png",
  },
  {
    title: "東京大学 深層生成モデル スプリングセミナーを修了しました",
    dateString: "2021/2月-3月",
    link: "https://deeplearning.jp/deep-generative-model-2021sp-2/",
    imageUrl:
      "https://deeplearning.jp/wp-content/uploads/2018/07/bg_DL-foundation-300x227.png",
  },
  {
    title: "東京大学 Deep Learning for NLP サマースクールを修了しました",
    dateString: "2020/8月-9月",
    link: "https://deeplearning.jp/deep-learning-for-nlp-2020s/",
    imageUrl: "https://deeplearning.jp/wp-content/uploads/2018/06/bg_NLP.png",
  },
];
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
/**
 * ニュース一覧
 * @returns
 */
const News = () => {
  // animation
  const containerRef = React.useRef(null);
  const { ref, inView } = useInView({
    initialInView: true,
  });
  // const [isInit, setIsInit] = useState(true);

  // useEffect(() => {
  //   console.log("inView", inView);
  //   if (isInit && inView && containerRef.current !== null) {
  //     setIsInit(false);
  //   }
  // }, [inView]);

  // console.log("isInit:", isInit);

  return (
    <WidthHandler>
      <Box ref={containerRef}>
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ p: "0px 32px", mb: "88px" }}
          ref={ref}
        >
          {NewValues.map((value, index) => (
            <Slide
              appear
              direction="left"
              in={inView}
              // in={isInit ? inView : true}
              container={containerRef.current}
              timeout={(index + 1) * 200}
              key={value.title + value.dateString}
            >
              <Paper
                key={value.title}
                sx={{
                  p: 2,
                  margin: "auto",
                  // maxWidth: 500,
                  width: "100%",
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  borderRadius: "12px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={value.imageUrl} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          sx={{
                            //     フォント系
                            fontFamily: "Raleway",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "18.5px",
                            // lineHeight: "28px",
                            // color: "#50555C",
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.dateString}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {/* <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography> */}
                        <Link
                          href={value.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textDecoration: "none" }}
                        >
                          <Button
                            // size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ borderRadius: "12px" }}
                            // onClick={() => router.push(news.link)}
                          >
                            MORE
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Slide>
          ))}
        </Stack>
      </Box>
    </WidthHandler>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px 0px",
        gap: "48px",
        overflowX: "scroll",
        overflowY: "scroll",
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      {NewValues.map((news) => (
        <Card key={news.title} sx={{ width: "345px" }}>
          <CardMedia
            component={"img"}
            height="140px"
            image={news.imageUrl ?? "/NoImage.png"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              // height="53px"
              component="div"
              fontSize={"20px"}
            >
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.dateString}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={news.link} target="_blank" rel="noopener noreferrer">
              <Button
                size="small"
                color="primary"
                // onClick={() => router.push(news.link)}
              >
                MORE
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default News;
