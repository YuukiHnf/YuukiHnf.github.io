import { Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography
        fontSize={"small"}
        sx={{ position: "absolute", right: 8 }}
        color="text.disabled"
      >
        Yuki Abe. This page design is highly inspired by{" "}
        <Link href="https://github.com/academicpages/academicpages.github.io">
          Jekyll & AcademicPages
        </Link>
        {", "}a fork of Minimal Mistakes.
      </Typography>
      {/* <Typography sx={{ position: "absolute", left: 8 }} color="text.disabled">
        Contact:hnf_yuuki[at]eis.hokudai.ac.jp
      </Typography> */}
    </footer>
  );
};

export default Footer;
