import { Button, Stack } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageText from "src/Components/Contents/ImageText";
import TextContent from "src/Components/Contents/TextContent";
import Title from "src/Components/Tops/Title";
import TopTitle from "src/Components/Tops/TopTitle";
import Carrier from "src/Views/Carrier";
import News from "src/Views/News";
import Works from "src/Views/Works";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <main>
        {/* トップタイトル */}
        <TopTitle />

        {/* 自己紹介 */}
        <TextContent />
        {/* 顔画像付き自己詳細 */}
        <ImageText />

        {/* 作品一覧 */}
        <Title title="Works" url="/avatar.png" />
        <Works />

        {/* キャリア一覧 */}
        <Title title="Carrier" url="/hokudai.jpg" />
        <Carrier />

        {/* ニュース */}
        <Title title="News" url="/NewsImage.png" />
        <News />
      </main>
    </>
  );
};

export default Home;
