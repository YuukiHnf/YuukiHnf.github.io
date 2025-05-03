import { Typography } from "@mui/material";
import React from "react";

type Props = {
  materialURL: string;
  caption: string;
};

const FigureAndCaption = ({ materialURL, caption }: Props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={materialURL}
        style={{
          borderRadius: "8px",
          maxHeight: "100%",
          objectFit: "contain",
          width: "100%",
        }}
        alt={"thumbnail of the project"}
      />
      {/* Captionをcenter */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem" },
          //     color: "#555",
          textAlign: "center",
          marginTop: "4px",
          width: "100%", // 幅を指定して中央揃えの効果を確保
        }}
      >
        {caption}
      </Typography>
    </div>
  );
};

export default FigureAndCaption;
