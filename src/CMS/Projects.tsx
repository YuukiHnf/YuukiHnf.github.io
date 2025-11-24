import { titleFontSize } from "@/components/TypingH1";
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
    id: "runsight",
    title: "RunSight: 弱視ランナーが夜も走れるようになるARメガネ",
    titleEn:
      "RunSight: AR assistive technology enabling low-vision runners to run at night",
    where: [
      {
        link: "https://programs.sigchi.org/chi/2025/program/content/189122",
        description: "CHI 2025",
      },
    ],
    thumnail: "./RunSight.png",
    projectLink: "./projects/RunSight",
  },
  {
    id: "handheld",
    title: "展示会やイベントで参加者が一緒に楽しみやすいXRインタフェース",
    titleEn: "VR interfaces with a handheld-style HMD for onsite exhibitions",
    where: [
      {
        link: "https://programs.sigchi.org/chi/2025/program/content/189044",
        description: "CHI 2025",
      },
    ],
    thumnail: "./handheldHMD.jpg",
    projectLink: "./projects/handheldHMD",
  },
  {
    id: "acd",
    title: "見えなくても一緒に楽しめる音楽ライブ向け副音声インタフェース",
    titleEn: "Auditory comment display for eyes-free social-viewing experience",
    where: [
      {
        link: "https://dl.acm.org/doi/10.1145/3711004",
        description: "PACMHCI",
      },
      {
        link: "https://programs.sigchi.org/cscw/2025/program/content/213167",
        description: "CSCW 2025",
      },
    ],
    thumnail: "./V9cscw106.png",
    projectLink: "./projects/acd",
  },
  {
    id: "temaneki",
    title: "temaneki: みんなで一緒につくる市民参加型祭りのための情報システム",
    titleEn: "temaneki: A collaborative tool for MATSURI communities",
    where: [
      {
        link: "https://doi.org/10.1145/3613905.3651013",
        description: "CHI EA 2024",
      },
      {
        link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
        description: "未踏 2022",
        descriptionEn: "Mitou Temaneki Project",
      },
    ],
    thumnail: "./temaneki_thu2.png",
    projectLink: "./projects/temaneki",
  },
  // {
  //   id: "OMEME",
  //   title: "OMEME: Utilize No-used HMD as a Robot",
  //   where: [
  //     {
  //       link: "https://www.wiss.org/WISS2023/",
  //       description: "WISS'23（対話発表賞🏅）",
  //     },
  //   ],
  //   thumnail: "./visionbot.main.png",
  //   projectLink: "https://www.youtube.com/watch?v=hL36g6_rMPI",
  // },
  // {
  //   id: "telecocha",
  //   title:
  //     "Tele-Cocha: Smartphone-based Telepresence System Embodied Swarm Robots",
  //   where: [
  //     {
  //       link: "https://protopedia.net/prototype/2558",
  //       description: "ハッカソン toio for Unity SDK 賞",
  //     },
  //   ],
  //   thumnail: "./telecocha.jpg",
  //   projectLink: "https://protopedia.net/prototype/2558",
  // },
  // {
  //   id: "double flick keyboard",
  //   title: "Keyboard to Help Participate Chats in Live Streaming",
  //   where: [
  //     {
  //       link: "http://doi.org/10.20729/00224248",
  //       description: "情報処理学会 論文誌",
  //       descriptionEn: "IPSJ Journal",
  //     },
  //   ],
  //   thumnail: "./commentcocha.png",
  //   projectLink: "https://hci-lab.jp/research/streamchatkeyboard/",
  // },
];
type Props = {
  isEnglish?: boolean;
};
const Projects = ({ isEnglish = true }: Props) => {
  return (
    <Stack spacing={0}>
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <AProject project={project} en={isEnglish} />
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
  );
};

export default Projects;

type PropsAProject = {
  project: ProjectType;
  en?: boolean;
};

const AProject = ({ project, en = true }: PropsAProject) => {
  const { id, title, where, thumnail, projectLink } = project;
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
        spacing={{ xs: 0.5, sm: 2 }}
        minHeight={"120px"}
        height={{
          xs: undefined,
          sm: undefined,
          md: "120px",
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
            maxHeight: "100%",
          }}
        >
          <Button
            onClick={() => projectLink && router.push(projectLink)}
            sx={{
              xs: { paddingLeft: "0px", paddingRight: "0px" },
              sm: { paddingLeft: "0px", paddingRight: "0px" },
              md: {},
            }}
          >
            <img
              src={thumnail}
              style={{
                borderRadius: "8px",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              width="100%"
              alt={"thumbnail of the project," + title}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={9} pl={0}>
          <Link
            sx={{
              color: "black",
              textDecorationColor: "transparent",
            }}
            href={projectLink}
            variant="subtitle1"
            fontWeight={"bolder"}
            // textの改行の幅を小さくする
            lineHeight={"1.2em"}
            mt={{ xs: "0px", sm: undefined }}
            // fontSize={{ xs: titleFontSize.xs, sm: undefined }}
          >
            {en ? project.titleEn ?? project.title : project.title}
          </Link>
          {/* <Typography
            variant="subtitle1"
            fontWeight={"bolder"}
            // textの改行の幅を小さくする
            lineHeight={"1.2em"}
            mt={{ xs: "0px", sm: undefined }}
            // fontSize={{ xs: titleFontSize.xs, sm: undefined }}
            onClick={() => projectLink && router.push(projectLink)}
          >
            {title}
          </Typography> */}
          <Typography
            variant="body1"
            sx={{ mt: "2px" }}
            // fontSize={{ xs: titleFontSize.xs, sm: undefined }}
          >
            {where.map((value, index) => (
              <>
                {index > 0 && <span>, </span>}
                <Link
                  sx={{
                    color: "GrayText",
                    textDecorationColor: "transparent",
                  }}
                  key={value.link + value.description}
                  href={value.link}
                >{`${
                  isEn
                    ? value.descriptionEn ?? value.description
                    : value.description
                }`}</Link>
              </>
            ))}
          </Typography>
          {/* {projectLink && (
            <Typography variant="body2">
              <Link
                sx={{ color: "GrayText", textDecorationColor: "transparent" }}
                href={projectLink}
              >
                Project Page
              </Link>
            </Typography>
          )} */}
        </Grid>
      </Grid>
    </Card>
  );
};
