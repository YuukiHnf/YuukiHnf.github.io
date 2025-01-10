import { Link, Stack, Typography } from "@mui/material";
import React from "react";

type PublicationsType = {
  id: string;
  title: string;
  titleEn?: string;
  authors: string;
  authorsEn?: string;
  year: number;
  where: string;
  whereEn?: string;
  whereDetail: string;
  whereDetailEn?: string;
  doi: string;
  invisibleInEn?: boolean;
};

const journal_publications: PublicationsType[] = [
  {
    id: "acd-cscw25",
    title:
      "“I feel lonely when they stop chatting”: Exploring Auditory Comment Display for Eyes-Free Social-Viewing Experience in Online Music Videos",
    authors: "Yuki Abe, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2025,
    where: "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    whereDetail: "Apr 2025. (to appear at CSCW 2025)",
    doi: "https://doi.org/10.1145/3711004",
  },
  {
    id: "interaction22",
    title:
      "ストリームライブチャット入力を想定した半透明ダブルフリックキーボードの検証",
    titleEn:
      "A Study on Semi-transparent Double Flick Keyboard for Live Chat in Live-streaming",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    authorsEn: "Yuki Abe, Myungguen Choi, Daisuke Sakamoto, Tetsuo Ono",
    year: 2022,
    where: "情報処理学会論文誌",
    whereEn: "Information Processing Society of Japan (IPSJ) Journal",
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
    invisibleInEn: true,
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
    doi: "http://id.nii.ac.jp/1001/00237205/",
    invisibleInEn: true,
  },
  {
    id: "WISS-OMEME",
    title: "OMEME:非装着状態のHMDを用いたコンパニオンロボットの開発",
    authors: "阿部 優樹，鈴木 湧登，坂本 大介，小野 哲雄",
    year: 2023,
    where: "WISS 2023",
    whereDetail:
      "第31回インタラクティブシステムとソフトウェアに関するワークショップ（対話発表賞）",
    doi: "https://www.wiss.org/WISS2023Proceedings/data/1-A10.pdf",
    invisibleInEn: true,
  },
  {
    id: "WISS-GAMEX",
    title: "Game-2-X: 種類が異なるゲームプレイ間を繋ぐシステムの提案",
    authors: "日下部 完，阿部 優樹，坂本 大介，小野 哲雄",
    year: 2023,
    where: "WISS 2023",
    whereDetail:
      "第31回インタラクティブシステムとソフトウェアに関するワークショップ",
    doi: "https://www.wiss.org/WISS2023Proceedings/data/1-A03.pdf",
    invisibleInEn: true,
  },
  {
    id: "interaction22",
    title: "ユーザビリティ調査におけるニコニコデータセット活用",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    year: 2022,
    where: "IDRユーザフォーラム 2022",
    whereDetail: "国立情報学研究所",
    doi: "https://www.nii.ac.jp/dsc/idr/userforum/program_2022.html",
    invisibleInEn: true,
  },
];

type Props = {
  En?: boolean;
};
const Publications = ({ En = false }: Props) => {
  const conf_publications = En
    ? conference_publications.filter((pub) => !pub.invisibleInEn)
    : conference_publications;

  const dem_publications = En
    ? demo_publications.filter((pub) => !pub.invisibleInEn)
    : demo_publications;

  return (
    <Stack spacing={2}>
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        {En ? "Refereed Journals" : "論文誌"}
      </Typography>
      <ol
        style={{
          paddingLeft: "30px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {journal_publications.map((publication) => (
          <li key={publication.id + publication.authors + publication.where}>
            <Typography key={publication.id}>
              {En
                ? publication.authorsEn ?? publication.authors
                : publication.authors + ". " + publication.year + ""}
              {". "}
              <span style={{ fontWeight: "bold" }}>
                {En
                  ? publication.titleEn ?? publication.title
                  : publication.title}
              </span>
              {". "}
              <span>
                {En
                  ? publication.whereEn ?? publication.where
                  : publication.where}
              </span>
              .<span> {publication.whereDetail}</span>
              {". "}
              {publication.doi ? (
                <>
                  {"["}
                  <Link
                    href={publication.doi}
                    sx={{ wordWrap: "break-word" }}
                    display={publication.doi ? undefined : "none"}
                  >
                    DOI
                  </Link>
                  {"]"}
                </>
              ) : null}
            </Typography>
            {/* <div
            style={
              {
                // marginTop: "0px",
              }
            }
          >
            [
            <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
              DOI
            </Link>
            ]
          </div> */}
          </li>
        ))}
      </ol>
      <Typography pt={2} variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        {En ? "Peer-Reviewed Conferences" : "国内・国際会議（口頭発表）"}
      </Typography>
      <ol
        style={{
          paddingLeft: "30px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {conf_publications.map((publication) => (
          <li key={publication.id + publication.authors + publication.where}>
            <Typography key={publication.id}>
              {publication.authors + ". " + publication.year}
              {". "}
              <span style={{ fontWeight: "bold" }}>{publication.title}</span>
              {". "}
              {/* <span>In </span> */}
              <span>{publication.where}</span>.
              <span> {publication.whereDetail}</span>
              {". "}
              {publication.doi ? (
                <>
                  {"["}
                  <Link
                    href={publication.doi}
                    sx={{ wordWrap: "break-word" }}
                    display={publication.doi ? undefined : "none"}
                  >
                    DOI
                  </Link>
                  {"]"}
                </>
              ) : null}
            </Typography>
          </li>
        ))}
      </ol>
      <Typography
        pt={2}
        variant="subtitle1"
        borderBottom={"2px solid #e0e0e0"}
        display={dem_publications.length > 0 ? undefined : "none"}
      >
        ポスター・デモ発表等
      </Typography>
      <ol
        style={{
          paddingLeft: "30px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {dem_publications
          .filter((publication) => (En ? !publication.invisibleInEn : true))
          .map((publication) => (
            <li key={publication.id + publication.authors + publication.where}>
              <Typography key={publication.id}>
                {publication.authors + ". " + publication.year}
                {". "}
                <span style={{ fontWeight: "bold" }}>{publication.title}</span>
                {". "}
                {/* <span>In </span> */}
                <span>{publication.where}</span>.
                <span> {publication.whereDetail}</span>
                {". "}
                {publication.doi ? (
                  <>
                    {"["}
                    <Link
                      href={publication.doi}
                      sx={{ wordWrap: "break-word" }}
                      display={publication.doi ? undefined : "none"}
                    >
                      {/* doiにdoiという文字列が入っていればDOI, それ以外はURL */}
                      {publication.doi.includes("doi") ? "DOI" : "URL"}
                      {/* DOI */}
                    </Link>
                    {"]"}
                  </>
                ) : null}
              </Typography>
              {/* <div
              style={{
                // marginTop: "0px",
                maxWidth: "100%",
              }}
            >
              [
              <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
                DOI
              </Link>
              ]
            </div> */}
            </li>
          ))}
      </ol>
    </Stack>
  );
};

export default Publications;
