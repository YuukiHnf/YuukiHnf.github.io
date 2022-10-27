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
      <main className={styles.main}>
        {/* トップタイトル */}
        <TopTitle />
        {/* 自己紹介 */}
        <TextContent />
        {/* 自己紹介イメージ付き */}
        <ImageText />
        {/* 作品一覧 */}
        <Title title="Works" />
        <Works />
        {/* 外部リンク */}

        {/* キャリア一覧 */}
        <Title title="Carrier" />
        <Carrier />

        {/* ニュース */}
        <Title title="News" />
        <News />
      </main>
    </>
  );
};

export default Home;
