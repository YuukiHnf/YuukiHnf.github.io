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
      "ストリームライブチャット入力を想定した半透明ダブルフリックキーボードの検証.",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    year: 2022,
    where: "情報処理学会論文誌",
    whereDetail: "64(2), 352-365",
    doi: "https://doi.org/10.20729/00224248",
  },
];
const conference_publications: PublicationsType[] = [
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
    id: "interaction22",
    title: "ユーザビリティ調査におけるニコニコデータセット活用．",
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
        <>
          <Typography key={publication.id}>
            {publication.authors + " " + publication.year + " "}{" "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>{" "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>{" "}
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
        </>
      ))}
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        Conference Paper (Reviewed)
      </Typography>
      {conference_publications.map((publication) => (
        <>
          <Typography key={publication.id}>
            {publication.authors + " " + publication.year + " "}{" "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>{" "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>{" "}
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
        </>
      ))}
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        Demonstration
      </Typography>
      {demo_publications.map((publication) => (
        <>
          <Typography key={publication.id}>
            {publication.authors + " " + publication.year + " "}{" "}
            <span style={{ fontWeight: "bold" }}>{publication.title}</span>{" "}
            <span>In </span>
            <span style={{ fontStyle: "italic" }}>{publication.where}</span>.
            <span> {publication.whereDetail}</span>{" "}
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
        </>
      ))}
    </Stack>
  );
};

export default Publications;
