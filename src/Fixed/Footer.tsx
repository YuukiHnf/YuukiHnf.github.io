import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography sx={{ position: "absolute", right: 8 }} color="text.disabled">
        Yuki Abe © 2022
      </Typography>
      <Typography sx={{ position: "absolute", left: 8 }} color="text.disabled">
        Contact:hnf_yuuki[at]eis.hokudai.ac.jp
      </Typography>
    </footer>
  );
};

export default Footer;
