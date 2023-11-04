import { Box } from "@mui/material";
import React, { VFC } from "react";

type Props = {
  children: React.ReactNode;
};

const BodyWrapper = ({ children }: Props) => {
  return (
    <Box
      maxWidth="925px"
      margin="32px auto"
      marginTop={"4em"}
      marginBottom={"4em"}
    >
      {children}
    </Box>
  );
};

export default BodyWrapper;
