import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";

const Menus = () => {
  return (
    <Box
      width={"100%"}
      height={"40px"}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      margin={"0px auto 32px"}
    >
      {/* 左揃えにする */}
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        color="inherit"
        sx={{ color: "gray" }}
      >
        <Button startIcon={<InfoOutlinedIcon />}>About</Button>
        <Button startIcon={<AttachFileOutlinedIcon />}>Projects</Button>
        <Button startIcon={<LibraryBooksOutlinedIcon />}>Publications</Button>
        <Button startIcon={<MilitaryTechOutlinedIcon />}>Award</Button>
        <Button startIcon={<MarkUnreadChatAltOutlinedIcon />}>Contact</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Menus;
