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

const Profile = () => {
  return (
    <Stack
      direction="column"
      maxWidth={{
        xs: "100%",
        md: "180px",
      }}
    >
      <Box
        height={"80px"}
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
        <Typography variant="h6" fontSize={"18px"} color="gray.100">
          Yuki Abe
        </Typography>
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
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FmdGoodIcon />
            </ListItemIcon>
            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Hokkaido, Japan
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <BiotechIcon />
            </ListItemIcon>
            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Research Gate
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <TwitterIcon />
            </ListItemIcon>
            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Twitter
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <FacebookIcon />
            </ListItemIcon>
            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Facebook
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <GitHubIcon />
            </ListItemIcon>
            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Github
            </Typography>
          </ListItem>
        </Grid>
        <Grid item maxWidth={"180px"}>
          <ListItem sx={{ pl: "0px" }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <SchoolIcon />
            </ListItemIcon>

            <Typography sx={{ color: "gray" }} fontSize={"14px"}>
              Google Scholar
            </Typography>
          </ListItem>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Profile;
