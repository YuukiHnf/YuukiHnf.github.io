import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BiotechIcon from "@mui/icons-material/Biotech";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from "next/router";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NewsDesktop from "src/CMS/News";
import SubTitle from "@/components/Title/SubTitle";
import News from "./News";
import { BrowserView } from "react-device-detect";

const Profile = () => {
  const router = useRouter();
  return (
    <Stack
      direction="column"
      maxWidth={{
        xs: "100%",
        md: "180px",
      }}
      width={"100%"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 子要素を中心に揃える */}
        <Avatar
          src={"./YukiAbe.png"}
          sx={{
            width: { xs: "120px", sm: "100px" },
            height: { xs: "120px", sm: "100px" },
          }}
        />
      </Box>
      <Box
        paddingTop={{ xs: "32px", sm: "16px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Yuki Abe</Typography>
        <Typography variant="body2">
          PhD Student at University of Hokkaido
        </Typography>
      </Box>
      <Grid
        container
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 1 }}
        flexDirection={{ xs: "row", sm: "column" }}
        justifyContent="center"
        pt={2}
      >
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() =>
              router.push("https://maps.app.goo.gl/rQmx5A5Br5VGx4AY8")
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FmdGoodIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              Hokkaido, Japan
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() =>
              router.push(
                "https://scholar.google.com/citations?user=mh82RQkAAAAJ&hl=ja"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <SchoolIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              Google Scholar
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() => router.push("https://twitter.com/_yuukiAbe_")}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <TwitterIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              Twitter
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() =>
              router.push(
                "https://www.facebook.com/profile.php?id=100043165429456"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FacebookIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              Facebook
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() => router.push("https://github.com/YuukiHnf")}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <GitHubIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              Github
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem
            sx={{ pl: "0px" }}
            onClick={() =>
              router.push(
                "https://www.youtube.com/channel/UCtFice-6qXjMEUd0IL5EBQw"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <YouTubeIcon />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              YouTube
            </Typography>
          </ListItem>
        </Grid>
        <Grid item width={"100%"} display={{ xs: "none", sm: "flex" }}>
          <NewsDesktop />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Profile;
