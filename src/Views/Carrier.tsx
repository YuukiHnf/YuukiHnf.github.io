import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageText from "src/Components/Contents/ImageText";
import WidthHandler from "src/Components/Demons/WidthHandler";

type CarrierType = {
  dateString: string;
  content: string;
};

const Carriers: CarrierType[] = [
  {
    dateString: "2018(平成30)年3月",
    content: "東京農業大学第一高等学校卒業",
  },
  {
    dateString: "2018(平成30)年4月",
    content: "北海道大学 入学",
  },
  {
    dateString: "2019(平成31)年3月",
    content: "北海道大学 工学部 情報エレクトロニクス学科 情報理工学コース 配属",
  },
  {
    dateString: "2022(令和03)年3月",
    content: "北海道大学 工学部 情報エレクトロニクス学科 情報理工学コース 卒業",
  },
  {
    dateString: "2022(令和03)年4月",
    content:
      "北海道大学 大学院情報科学院 情報科学専攻 情報理工学コース 修士課程 入学",
  },
];

/**
 * キャリア
 * @returns
 */
const Carrier = () => {
  return (
    <WidthHandler>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: "32px 32px",
          pt: "0px",
          //     フォント系
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "19.5px",
          lineHeight: "28px",
          color: "#50555C",
        }}
      >
        {Carriers.map((carrier) => (
          <Box key={carrier.content}>
            <Typography color={"text.disabled"}>
              {carrier.dateString}
            </Typography>
            <Typography>{carrier.content}</Typography>
          </Box>
        ))}
      </Box>
    </WidthHandler>
  );
};

export default Carrier;
