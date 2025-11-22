import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
type ProjectType = {
  id: string;
  title: string;
  titleEn?: string;
  where: {
    link: string;
    description: string;
    descriptionEn?: string;
  }[];
  thumnail: string;
  projectLink: string;
};

const projects = [
  {
    id: "Guiderunner",
    title: "視覚障がい者のガイドランナー",
    titleEn: "Guide runner for visually impaired runners 🏃‍♂️👟",
    where: [
      {
        link: "https://www.facebook.com/banfure/?locale=ja_JP",
        description: "伴走フレンドリー札幌支部ガイドランナー",
        descriptionEn: "Guide runner at Sapporo Hokkaido Japan",
      },
      {
        link: "https://projectguidelinejp.withgoogle.com/",
        description: "Google Project Guidelineの札幌試走会の主催",
        descriptionEn: "Google Project Guideline Workshop in Sapporo",
      },
    ],
    thumnail: "./guiderunning.png",
    projectLink: "",
  },
  {
    id: "OMATSURI",
    title: "お祭りとみんなをてまねく情報技術",
    titleEn: "MATSURI hacker 🏮🇯🇵🧑‍💻",
    where: [
      {
        link: "https://www.temaneki.jp/",
        description: "temaneki",
        descriptionEn: "temaneki",
      },
      {
        link: "https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/2023/",
        description: "未踏会議",
        descriptionEn: "Mitou Conference",
      },

      {
        link: "https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/2023/",
        description: "情報処理学会・学会誌 マガジン",
        descriptionEn: "IPSJ Magazine",
      },
      {
        link: "https://www.hokkaido-np.co.jp/article/769908",
        description: "北海道新聞",
        descriptionEn: "Hokkaido Shimbun Press",
      },
      {
        link: "https://hu-jagajaga.com/club/12779/",
        description: "北大新聞 JaGaJaGa",
        descriptionEn: "News media JaGaJaGa",
      },
      {
        link: "https://no-maps.jp/dreampitch2022/",
        description: "NoMaps 2022",
        descriptionEn: "NoMaps 2022",
      },
      {
        link: "https://costep.open-ed.hokudai.ac.jp/like_hokudai/article/26259",
        description: "いいね！Hokudai",
        descriptionEn: "Hokkaido University Website",
      },
    ],
    thumnail: "./omatsuri.jpg",
    projectLink: "https://www.temaneki.jp/",
  },
  {
    id: "OMEME",
    title: "OMEME: 使ってないヘッドセットはロボットにしよう",
    titleEn: "OMEME: A robot from your headset 🤖🥽",
    where: [
      {
        link: "https://www.wiss.org/WISS2023/",
        description: "WISS'23",
        descriptionEn: "WISS'23",
      },
      {
        link: "https://protopedia.net/prototype/4851",
        description: "Protopedia",
        descriptionEn: "Protopedia",
      },
    ],
    thumnail: "./visionbot.main.png",
    projectLink: "https://www.youtube.com/watch?v=hL36g6_rMPI",
  },
  {
    id: "telecocha",
    title: "テレこちゃ: Toio駆動型テレプレゼンスシステム",
    titleEn: "Tele-Cocha: Toio-powered video conference 🤖🧊",
    where: [
      {
        link: "https://protopedia.net/prototype/2558",
        description: "Protopedia",
      },
    ],
    thumnail: "./telecocha.jpg",
    projectLink: "https://youtu.be/hNgghW0qtIU",
  },
];

type Props = { isEnglish: boolean };

const Hobby = ({ isEnglish }: Props) => {
  return (
    <>
      <Stack spacing={1}>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <AProject project={project} isEnglish={isEnglish} />
          </React.Fragment>
        ))}
        <Card
          sx={{
            borderTop: "2px solid #e0e0e0",
            margin: "0px",
            padding: "0px",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        ></Card>
      </Stack>
    </>
  );
};

export default Hobby;

const AProject = ({
  project,
  isEnglish,
}: {
  project: ProjectType;
  isEnglish: boolean;
}) => {
  const { id, title, titleEn, where, thumnail, projectLink } = project;
  const router = useRouter();
  // pathに/en/が含まれているかどうかで日本語か英語かを切り替える
  const path = router.asPath;
  const isEn = !path.includes("/ja");
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderTop: "2px solid #e0e0e0",
        borderRadius: "0px",
        margin: "0px 0px",
        padding: "16px 0px",
      }}
    >
      <Grid
        container
        spacing={2}
        minHeight={"120px"}
        height={{
          xs: undefined,
          sm: undefined,
          md: undefined,
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          pl={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "0px",
          }}
        >
          <Button onClick={() => projectLink && router.push(projectLink)}>
            <img
              src={thumnail}
              style={{
                borderRadius: "8px",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              width={"100%"}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={9} pl={0}>
          <Typography
            variant="subtitle1"
            fontWeight={"bolder"}
            // textの改行の幅を小さくする
            lineHeight={"1.2em"}
          >
            {isEnglish ? titleEn ?? title : title}
          </Typography>
          <Typography variant="body1">
            {where.map((value) => (
              <>
                <Link
                  sx={{ color: "GrayText", textDecorationColor: "transparent" }}
                  key={value.link + value.description}
                  href={value.link == "" ? undefined : value.link}
                >{`${
                  isEnglish
                    ? value.descriptionEn ?? value.description
                    : value.description
                }`}</Link>
                <span>, </span>
              </>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
