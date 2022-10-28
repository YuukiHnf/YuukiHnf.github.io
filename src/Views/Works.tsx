import { Box } from "@mui/material";
import React from "react";
import ImageText from "src/Components/Contents/ImageText";
import WorkContent from "src/Components/Contents/WorkContent";

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
    subTitle: "“みんな参加型”運営を実現する\n祭り支援アプリケーション",
    description:
      "地図を自由自在に使って100人規模のメンバーへ連絡ができるお祭りグループウェア.\n2022年度未踏事業採択プロジェクト.",
    imageUrl: "/temaneki.png",
    link: "https://www.temaneki.jp/",
  },
  {
    title: "てれコチャ",
    subTitle: "離れていても輪の中に入れる\nテレプレゼンスシステム",
    description:
      "動いてコミュニケーションできるビデオチャット．\n第一回北大テックガレージ採択プロジェクト.\nHL toio for Unity SDK賞．",
    imageUrl: "/telecocha.jpg",
    link: "https://protopedia.net/prototype/2558",
  },
  {
    title: "こめコチャ",
    subTitle: "配信を妨げないライブチャット\nキーボード",
    description:
      "ライブチャット専用の日本語入力キーボード.\n動画環境での入力性能を検証し考察しました.\nインタラクション2022登壇発表(採択率0.4)．",
    imageUrl: "/commentcocha.png",
    link: "https://hci-lab.jp/research/streamchatkeyboard/",
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
        <WorkContent
          key={value.title + value.subTitle}
          value={value}
          imageIsLeft={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Works;
