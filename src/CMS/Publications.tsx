import { Link, Stack, Typography } from "@mui/material";
import React from "react";

type PublicationsType = {
  id: string;
  title: string;
  authors: string;
  year: number;
  where: string;
  whereDetail: string;
  doi: string;
};

const journal_publications: PublicationsType[] = [
  {
    id: "interaction22",
    title:
      "ストリームライブチャット入力を想定した半透明ダブルフリックキーボードの検証",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    year: 2022,
    where: "情報処理学会論文誌",
    whereDetail: "64(2), 352-365",
    doi: "https://doi.org/10.20729/00224248",
  },
];
const conference_publications: PublicationsType[] = [
  {
    id: "Temaneki24",
    title:
      "Temaneki: Map-Based Collaboration Tool for Consensus-Building in Student-Run Festival Management Teams",
    authors: "Yuki Abe, Hikaru Tsujiguchi, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2024,
    where:
      "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’24)",
    whereDetail:
      "May 11– 16, 2024, Honolulu, HI, USA. ACM, New York, NY, USA, 8 pages",
    doi: "https://doi.org/10.1145/3613905.3651013",
  },
  {
    id: "ronbunnshi22",
    title:
      "ストリームライブチャット入力を想定した半透明ダブルフリックキーボードの入力性能の実験的検証",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    year: 2022,
    where: "インタラクション2022",
    whereDetail: "情報処理学会",
    doi: "https://www.interaction-ipsj.org/proceedings/2022/data/pdf/INT22014.pdf",
  },
];
const demo_publications: PublicationsType[] = [
  {
    id: "HCI209-SpeechAccomodation",
    title:
      "音声・動画コンテンツ内のナレーションを高齢者が聞き取りやすい話し方に変換するAIパイプラインの開発",
    authors: "宮下 拓磨，阿部 優樹，坂本 大介，小野 哲雄",
    year: 2024,
    where: "HCI研究会",
    whereDetail: "第 209回 ヒューマンコンピュータインタラクション研究会",
    doi: "https://www.sighci.jp/events/sig/209",
  },
  {
    id: "WISS-OMEME",
    title: "OMEME:非装着状態のHMDを用いたコンパニオンロボットの開発",
    authors: "阿部優樹，鈴木湧登，坂本大介，小野哲雄",
    year: 2023,
    where: "WISS 2023",
    whereDetail:
      "第31回インタラクティブシステムとソフトウェアに関するワークショップ（対話発表賞）",
    doi: "https://www.wiss.org/WISS2023Proceedings/data/1-A10.pdf",
  },
  {
    id: "WISS-GAMEX",
    title: "Game-2-X: 種類が異なるゲームプレイ間を繋ぐシステムの提案",
    authors: "日下部完，阿部優樹，坂本大介，小野哲雄",
    year: 2023,
    where: "WISS 2023",
    whereDetail:
      "第31回インタラクティブシステムとソフトウェアに関するワークショップ",
    doi: "https://www.wiss.org/WISS2023Proceedings/data/1-A03.pdf",
  },
  {
    id: "interaction22",
    title: "ユーザビリティ調査におけるニコニコデータセット活用",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    year: 2022,
    where: "IDRユーザフォーラム 2022",
    whereDetail: "国立情報学研究所",
    doi: "https://www.nii.ac.jp/dsc/idr/userforum/program_2022.html",
  },
];

const Publications = () => {
  return (
    <Stack spacing={2}>
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        Journal Paper
      </Typography>
      {journal_publications.map((publication) => (
        <div key={publication.id + publication.authors + publication.where}>
          <Typography key={publication.id}>
            {publication.authors + ". " + publication.year + ""}
            {". "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>
            {". "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>
            {". "}
          </Typography>
          <div
            style={{
              marginTop: "0px",
            }}
          >
            <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
              {publication.doi}
            </Link>
          </div>
        </div>
      ))}
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        Conference Paper (Reviewed)
      </Typography>
      {conference_publications.map((publication) => (
        <div key={publication.id + publication.authors + publication.where}>
          <Typography key={publication.id}>
            {publication.authors + ". " + publication.year}
            {". "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>
            {". "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>
            {". "}
          </Typography>
          <div
            style={{
              marginTop: "0px",
            }}
          >
            <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
              {publication.doi}
            </Link>
          </div>
        </div>
      ))}
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        Demonstration/Poster
      </Typography>
      {demo_publications.map((publication) => (
        <div key={publication.id + publication.authors + publication.where}>
          <Typography key={publication.id}>
            {publication.authors + ". " + publication.year}
            {". "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>
            {". "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>
            {". "}
          </Typography>
          <div
            style={{
              marginTop: "0px",
              maxWidth: "100%",
            }}
          >
            <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
              {publication.doi}
            </Link>
          </div>
        </div>
      ))}
    </Stack>
  );
};

export default Publications;
