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
    title:
      "RunSight: AR-based assistive system for low-vision nighttime running",
    where: [
      {
        link: "https://chi2025.acm.org/",
        description: "CHI ’25",
      },
    ],
    thumnail: "./RunSight.png",
    projectLink: "",
  },
  {
    id: "handheld",
    title: "VR interface for handheld-style HMD in onsite exhibition",
    where: [
      {
        link: "https://chi2025.acm.org/",
        description: "CHI ’25",
      },
    ],
    thumnail: "./handheldHMD.jpg",
    projectLink: "",
  },
  {
    id: "acd",
    title: "Auditory comment display for eyes-free social-viewing experience",
    where: [
      {
        link: "https://cscw.acm.org/2025/",
        description: "CSCW ’25",
      },
    ],
    thumnail: "./V9cscw106.jpg",
    projectLink: "https://doi.org/10.1145/3711004",
  },
  {
    id: "temaneki",
    title: "Temaneki: A collaborative tool for MATSURI communities",
    where: [
      {
        link: "https://doi.org/10.1145/3613905.3651013",
        description: "CHI EA ’24",
      },
      {
        link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
        description: "未踏 ’22",
        descriptionEn: "Mitou Program",
      },
    ],
    thumnail: "./temaneki.svg",
    projectLink: "https://temaneki.jp",
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

const Projects = () => {
  return (
    <Stack spacing={0}>
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <AProject {...project} />
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

const AProject = ({ id, title, where, thumnail, projectLink }: ProjectType) => {
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
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={9} pl={0}>
          <Typography
            variant="subtitle1"
            fontWeight={"bolder"}
            // textの改行の幅を小さくする
            lineHeight={"1.2em"}
            mt={{ xs: "0px", sm: undefined }}
            // fontSize={{ xs: titleFontSize.xs, sm: undefined }}
          >
            {title}
          </Typography>
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
