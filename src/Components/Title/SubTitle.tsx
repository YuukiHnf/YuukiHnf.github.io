import { Box, Typography } from "@mui/material";
import React from "react";
import { titleFontSize } from "../TypingH1";

type Props = {
  title: string;
  ref?: React.RefObject<HTMLElement>;
};
const SubTitle = ({ title, ref }: Props) => {
  return (
    <Box mt={"56px"} id={title} ref={ref}>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default SubTitle;
