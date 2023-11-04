import { Box, Typography } from "@mui/material";
import React from "react";
import { titleFontSize } from "../TypingH1";

type Props = {
  title: string;
};
const SubTitle = ({ title }: Props) => {
  return (
    <Box mt={"40px"} mb={"8px"}>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default SubTitle;
