import { Box, Typography } from "@mui/material";
import React from "react";
import { titleFontSize } from "../TypingH1";

type Props = {
  title: string;
  ref?: React.RefObject<HTMLElement>;
  isEnglish?: boolean;
};
const SubTitle = ({ title, ref, isEnglish = true }: Props) => {
  return (
    <Box
      mt={{ xs: "40px", sm: "48px" }}
      id={title}
      ref={ref}
      fontSize={isEnglish ? undefined : undefined}
    >
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default SubTitle;
