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
    id: "OMEME",
    title: "OMEME",
    where: [
      {
        link: "https://www.wiss.org/WISS2023/",
        description: "WISS'23",
        descriptionEn: "WISS'23",
      },
    ],
    thumnail: "./visionbot.main.png",
    projectLink: "https://www.youtube.com/watch?v=hL36g6_rMPI",
  },
  {
    id: "telecocha",
    title: "Tele-Cocha",
    where: [
      {
        link: "https://protopedia.net/prototype/2558",
        description: "Protopedia",
      },
    ],
    thumnail: "./telecocha.jpg",
    projectLink: "https://protopedia.net/prototype/2558",
  },
];

const Hobby = () => {
  return (
    <Stack spacing={1}>
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

export default Hobby;

const AProject = ({ id, title, where, thumnail, projectLink }: ProjectType) => {
  const router = useRouter();
  // pathに/en/が含まれているかどうかで日本語か英語かを切り替える
  const path = router.asPath;
  const isEn = path.includes("/en");
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
            {title}
          </Typography>
          <Typography variant="body1">
            {where.map((value) => (
              <>
                <Link
                  sx={{ color: "GrayText", textDecorationColor: "transparent" }}
                  key={value.link + value.description}
                  href={value.link}
                >{`${isEn ? value.description : value.description}`}</Link>
                <span>, </span>
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
