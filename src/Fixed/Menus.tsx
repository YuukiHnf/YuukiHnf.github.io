import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import React, { useCallback } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import { useRouter } from "next/router";
import TranslateIcon from "@mui/icons-material/Translate";
import theme from "@/styles/GlobalTheme";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

type Props = {
  aboutElementRef: React.RefObject<HTMLElement>;
  projectsElementRef: React.RefObject<HTMLElement>;
  publicationsElementRef: React.RefObject<HTMLElement>;
  awardElementRef: React.RefObject<HTMLElement>;
  contactElementRef: React.RefObject<HTMLElement>;
  isEnglish?: boolean;
};

const Menus = ({
  aboutElementRef,
  projectsElementRef,
  publicationsElementRef,
  awardElementRef,
  contactElementRef,
  isEnglish = true,
}: Props) => {
  const router = useRouter();
  // useCallbackを使用して、不必要な再生成を避ける
  const scrollToMyElement = useCallback((ref: React.RefObject<HTMLElement>) => {
    if (!ref) return;
    const element = ref.current;
    if (element) {
      // scrollIntoViewを呼び出して要素までスクロールする
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: { xs: "center", sm: "center", md: "flex-end" },
      }}
      margin={"0px auto 32px"}
    >
      {/* 左揃えにする */}
      <Grid
        container
        flexDirection={"row"}
        justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
        maxWidth={"100%"}
        color="inherit"
        sx={{
          color: "gray",
        }}
      >
        <Button
          startIcon={<InfoOutlinedIcon />}
          sx={{ color: "gray" }}
          // onClick={() => router.push("#About")}
          onClick={() => scrollToMyElement(aboutElementRef)}
        >
          {isEnglish ? "About" : "自己紹介"}
        </Button>
        <Button
          startIcon={<AttachFileOutlinedIcon />}
          sx={{ color: "gray" }}
          // onClick={() => router.push("#Projects")}
          onClick={() => scrollToMyElement(projectsElementRef)}
        >
          {isEnglish ? "Projects" : "プロジェクト"}
        </Button>
        <Button
          startIcon={<LibraryBooksOutlinedIcon />}
          sx={{ color: "gray" }}
          // onClick={() => router.push("#Publications")}
          onClick={() => scrollToMyElement(publicationsElementRef)}
        >
          {isEnglish ? "Publications" : "論文等"}
        </Button>
        <Button
          startIcon={<MilitaryTechOutlinedIcon />}
          sx={{ color: "gray" }}
          // onClick={() => router.push("#Award")}
          onClick={() => scrollToMyElement(awardElementRef)}
        >
          {isEnglish ? "Awards" : "受賞等"}
        </Button>
        <Button
          startIcon={<PictureAsPdfOutlinedIcon />}
          sx={{ color: "gray" }}
          onClick={() => router.push("/CV.pdf")}
        >
          {isEnglish ? "CV/Resume" : "レジュメ"}
        </Button>
        <Button
          startIcon={<TranslateIcon />}
          sx={{
            color: "gray",
            fontWeight: "bold",
            bgcolor: [null, null, "#e7e7e7ff"],
            ":hover": {
              bgcolor: theme.palette.text.disabled,
              color: "white",
            },
            border: [null, null, "0.5px solid #e1e1e1ff"],
          }}
          variant="text"
          onClick={() => {
            if (isEnglish) {
              router.push("/ja");
            } else {
              router.push("/");
            }
          }}
        >
          {isEnglish ? "日本語" : "English"}
        </Button>
      </Grid>
    </Box>
  );
};

export default Menus;
