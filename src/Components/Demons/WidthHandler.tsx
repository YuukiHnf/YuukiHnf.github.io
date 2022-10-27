import { Box } from "@mui/system";
import React from "react";
import { ReactNode } from "react";
import { FC } from "react";

type Props = {
  children: ReactNode;
};

/**
 * PCサイトの時に広がりすぎないようにする
 * @returns
 */
const WidthHandler = ({ children }: Props) => {
  return (
    <Box
      width={"940px"}
      height={"auto"}
      maxWidth={940}
      margin={"0 auto"}
      bgcolor="red"
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default WidthHandler;
