import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import { useRouter } from "next/router";

const Menus = () => {
  const router = useRouter();
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: { xs: "center", sm: "flex-end" },
      }}
      margin={"0px auto 32px"}
    >
      {/* 左揃えにする */}
      <Grid
        container
        flexDirection={"row"}
        justifyContent={{ xs: "center", sm: "flex-end" }}
        maxWidth={"100%"}
        variant="text"
        aria-label="text button group"
        color="inherit"
        sx={{
          color: "gray",
        }}
      >
        <Button
          startIcon={<InfoOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("#About")}
        >
          About
        </Button>
        <Button
          startIcon={<AttachFileOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("#Projects")}
        >
          Projects
        </Button>
        <Button
          startIcon={<LibraryBooksOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("#Publications")}
        >
          Publications
        </Button>
        <Button
          startIcon={<MilitaryTechOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("#Award")}
        >
          Award
        </Button>
        <Button
          startIcon={<MarkUnreadChatAltOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("#Contact")}
        >
          Contact
        </Button>
      </Grid>
    </Box>
  );
};

export default Menus;
