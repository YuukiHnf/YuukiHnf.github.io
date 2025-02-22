import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  isEnglish?: boolean;
};
const Profile = ({ isEnglish = false }: Props) => {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);
  const PROFILE_IMAGE_PATH = "./Profile1_long_small.png";
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  useEffect(() => {
    const img = new Image();
    img.src = PROFILE_IMAGE_PATH;

    if (img.complete) {
      setImageLoading(false);
    } else {
      img.onload = () => {
        setImageLoading(false);
      };
    }

    return () => {
      img.onload = null;
    };
  }, []);
  return (
    <Stack
      direction="column"
      maxWidth={{
        xs: "100%",
        sm: "100%",
        md: "180px",
      }}
      width={"100%"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "120px", sm: "100px" },
          height: { xs: "120px", sm: "100px" },
        }}
      >
        {imageLoading && (
          <Skeleton
            variant="circular"
            sx={{
              width: { xs: "120px", sm: "100px" },
              height: { xs: "120px", sm: "100px" },
            }}
          />
        )}
        {/* 子要素を中心に揃える */}
        <Avatar
          // src={"./Profile1_long_small.png"}
          // sx={{
          //   width: { xs: "120px", sm: "100px" },
          //   height: { xs: "120px", sm: "100px" },
          // }}
          // alt="Yuki Abe"
          // onLoad={handleImageLoad}
          src={PROFILE_IMAGE_PATH}
          sx={{
            width: "100%",
            height: "100%",
          }}
          alt="Yuki Abe"
        />
      </Box>
      <Box
        paddingTop={{ xs: "32px", sm: "16px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          justifyContent: "center",
        }}
      >
        <Typography variant={"h1"} fontSize={isEnglish ? "1.563em" : "1.563em"}>
          {isEnglish ? "Yuki Abe" : "阿部 優樹"}
        </Typography>
        {isEnglish && (
          <Typography
            variant="body2"
            textAlign={{ xs: "center", sm: "center", md: "left" }}
          >
            {isEnglish && "Ph.D. Student at Hokkaido University"}
            {!isEnglish && "北海道大学 博士後期課程"}
          </Typography>
        )}
        {!isEnglish && (
          <Typography
            variant="body2"
            textAlign={{ xs: "center", sm: "center", md: "left" }}
            marginTop={{ xs: "8 px", sm: "8px" }}
          >
            {!isEnglish && "北海道大学大学院 情報科学院"}
          </Typography>
        )}
        {!isEnglish && (
          <Typography
            variant="body2"
            textAlign={{ xs: "center", sm: "center", md: "left" }}
          >
            {!isEnglish && "博士後期課程"}
          </Typography>
        )}
      </Box>
      <Grid
        container
        direction={{ xs: "row", sm: "row", md: "column" }}
        spacing={{ xs: 1, sm: 1 }}
        flexDirection={{ xs: "row", sm: "row", md: "column" }}
        justifyContent="center"
        pt={2}
      >
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            // onClick={() =>
            //   router.push("https://maps.app.goo.gl/rQmx5A5Br5VGx4AY8")
            // }
            onClick={() =>
              router.push("https://maps.app.goo.gl/iq432MgDp6gKP8vL7")
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FmdGoodIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              {/* {isEnglish ? "Hokkaido, Japan" : "北海道, 日本"} */}
              {isEnglish ? "Singapore" : "Singapore"}
            </Typography>
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() =>
              router.push(
                "https://scholar.google.com/citations?user=mh82RQkAAAAJ&hl=ja"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <SchoolIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
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
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() =>
              router.push("https://www.linkedin.com/in/yuki-abe-111443283/")
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <LinkedInIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              LinkedIn
            </Typography>
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() => router.push("https://twitter.com/_yuukiAbe_")}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <TwitterIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
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
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() =>
              router.push(
                "https://www.facebook.com/profile.php?id=100043165429456"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FacebookIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
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
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() => router.push("https://github.com/YuukiHnf")}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <GitHubIcon
                sx={{
                  fontSize: { xs: "32px", sm: "24px" },
                }}
              />
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
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() =>
              router.push(
                "https://www.youtube.com/channel/UCtFice-6qXjMEUd0IL5EBQw"
              )
            }
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <YouTubeIcon sx={{ fontSize: { xs: "32px", sm: "24px" } }} />
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
          </ListItemButton>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItemButton
            sx={{
              pl: { xs: "8px", sm: "0px" },
              pr: { xs: "8px" },
              // ":hover": { opacity: 0.4, cursor: "pointer" },
            }}
            onClick={() => router.push("/CV.pdf")}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <PictureAsPdfRoundedIcon
                sx={{ fontSize: { xs: "32px", sm: "24px" } }}
              />
            </ListItemIcon>
            <Typography
              display={{
                xs: "none",
                sm: "block",
              }}
              variant="body2"
            >
              CV
            </Typography>
          </ListItemButton>
        </Grid>
        {!isEnglish && (
          <Grid
            item
            width={"100%"}
            display={{ xs: "none", sm: "none", md: "flex" }}
          >
            <NewsDesktop />
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default Profile;
