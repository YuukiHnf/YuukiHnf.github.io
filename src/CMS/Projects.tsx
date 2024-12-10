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
  }[];
  thumnail: string;
  projectLink: string;
};

const projects = [
  {
    id: "acd",
    title: "Auditory Comment Display for Eyes-Free Social-Viewing Experience",
    where: [
      {
        link: "https://cscw.acm.org/2025/",
        description: "CSCW '25 (to appear)",
      },
    ],
    thumnail: "./acd.jpg",
    projectLink: "",
  },
  {
    id: "temaneki",
    title:
      "Temaneki: A Collaboration Tool for Enhancing MATSURI Festival Management Communities",
    where: [
      {
        link: "https://doi.org/10.1145/3613905.3651013",
        description: "CHI EA '24",
      },
      {
        link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
        description: "未踏' 22（スパクリ🏅）",
      },
    ],
    thumnail: "./temaneki.svg",
    projectLink: "https://temaneki.jp",
  },
  {
    id: "OMEME",
    title: "OMEME: Utilize No-used HMD as a Robot",
    where: [
      {
        link: "https://www.wiss.org/WISS2023/",
        description: "WISS'23（対話発表賞🏅）",
      },
    ],
    thumnail: "./visionbot.main.png",
    projectLink: "https://www.youtube.com/watch?v=hL36g6_rMPI",
  },
  {
    id: "telecocha",
    title:
      "Tele-Cocha: Smartphone-based Telepresence System Embodied Swarm Robots",
    where: [
      {
        link: "https://protopedia.net/prototype/2558",
        description: "ハッカソン toio for Unity SDK 賞",
      },
    ],
    thumnail: "./telecocha.jpg",
    projectLink: "https://protopedia.net/prototype/2558",
  },
  {
    id: "double flick keyboard",
    title:
      "Double Translucent Keyboard for Participating Chats in Live Streaming",
    where: [
      {
        link: "http://id.nii.ac.jp/1001/00224248/",
        description: "情報処理学会 論文誌",
      },
      {
        link: "https://www.interaction-ipsj.org/2022/program/#action_support",
        description: "インタラクション2022 Paper",
      },
    ],
    thumnail: "./commentcocha.png",
    projectLink: "https://hci-lab.jp/research/streamchatkeyboard/",
  },
];

const Projects = () => {
  return (
    <Stack spacing={1}>
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <AProject {...project} />
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default Projects;

const AProject = ({ id, title, where, thumnail, projectLink }: ProjectType) => {
  const router = useRouter();
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderTop: "2px solid #e0e0e0",
        borderRadius: "0px",
        margin: "0px 0px",
        padding: "16px 0px 8px",
      }}
    >
      <Grid container spacing={2} minHeight={"140px"}>
        <Grid item xs={12} sm={3} pl={0}>
          <Button onClick={() => projectLink && router.push(projectLink)}>
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
          >
            {title}
          </Typography>
          <Typography variant="body1">
            {where.map((value) => (
              <>
                <Link
                  sx={{ color: "GrayText", textDecorationColor: "transparent" }}
                  key={value.link + value.description}
                  href={value.link}
                >{`${value.description}`}</Link>
                <span>, </span>
              </>
            ))}
          </Typography>
          {projectLink && (
            <Link
              sx={{ color: "GrayText", textDecorationColor: "transparent" }}
              href={projectLink}
            >
              Project Page
            </Link>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};
