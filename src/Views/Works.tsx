import React from "react";
import ImageText from "src/Components/Contents/ImageText";

type WorkType = {
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
];

/**
 * 仕事一覧
 * @returns
 */
const Works = () => {
  return (
    <div>
      {/* 自己紹介イメージ付き */}
      <ImageText />
    </div>
  );
};

export default Works;
