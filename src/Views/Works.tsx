import { Box } from "@mui/material";
import React from "react";
import ImageText from "src/Components/Contents/ImageText";

export type WorkType = {
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  link: string;
};

const values: WorkType[] = [
  {
    title: "temaneki",
    subTitle: "“みんな参加型”運営を実現する祭り支援アプリケーション",
    description:
      "祭り運営の連絡支援アプリケーション．地図を自由自在に使って100人規模のメンバーへ連絡ができます.2022年度未踏事業採択プロジェクト.",
    imageUrl: "/NoImage.png",
    link: "apple.com",
  },
  {
    title: "てれこちゃ",
    subTitle: "離れていても輪の中に入れるテレプレゼンスシステム",
    description:
      "動いてコミュニケーションできるビデオチャット．第一回北大テックガレージ採択プロジェクト.HL toio for Unity SDK賞．",
    imageUrl: "/NoImage.png",
    link: "apple.com",
  },
  {
    title: "コメこちゃ",
    subTitle: "配信を妨げないライブチャットキーボード",
    description:
      "ライブチャット専用の日本語入力キーボード.動画環境での入力性能を検証し考察しました.インタラクション2022登壇発表(採択率0.4)．",
    imageUrl: "/NoImage.png",
    link: "apple.com",
  },
];

/**
 * 仕事一覧
 * @returns
 */
const Works = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "72px",
      }}
    >
      {/* 自己紹介イメージ付き */}
      {values.map((value, index) => (
        <ImageText
          key={value.title}
          value={value}
          imageIsLeft={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Works;
