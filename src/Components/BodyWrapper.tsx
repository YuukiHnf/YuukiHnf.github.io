import { Box } from "@mui/material";
import React, { VFC } from "react";

type Props = {
  children: React.ReactNode;
};

const BodyWrapper = ({ children }: Props) => {
  return (
    <Box
      margin="16px auto"
      marginTop={{ xs: "1em", sm: "2em" }}
      marginBottom={"4em"}
      maxWidth={"1080px"}
      width={{ xs: "90%", sm: "90%" }}
    >
      {children}
    </Box>
  );
};

export default BodyWrapper;
