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
  award?: string;
  poster?: string;
};

const UnderlineAuthorName = ({ text }: { text: string }) => {
  // 著者名のパターン
  const patterns = {
    en: /Yuki Abe\*?/g,
    jp: /阿部\s*優樹/g,
  };

  // テキストを分割してコンポーネントの配列を作成
  const createTextWithUnderline = (text: string) => {
    let lastIndex = 0;
    const elements = [];
    let matches = [] as any[];

    // 英語と日本語のパターンの両方でマッチを探す
    Object.values(patterns).forEach((pattern) => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        matches.push({
          index: match.index,
          length: match[0].length,
          text: match[0],
        });
      }
    });

    // マッチした位置でソート
    matches.sort((a, b) => a.index - b.index);

    // マッチした部分とそれ以外の部分を交互に配列に追加
    matches.forEach((match, i) => {
      // マッチの前のテキスト
      if (match.index > lastIndex) {
        elements.push(
          <span key={`text-${i}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }

      // マッチしたテキスト（下線付き）
      elements.push(
        <span key={`match-${i}`} style={{ textDecoration: "underline" }}>
          {match.text}
        </span>
      );

      lastIndex = match.index + match.length;
    });

    // 残りのテキスト
    if (lastIndex < text.length) {
      elements.push(<span key="text-last">{text.substring(lastIndex)}</span>);
    }

    return elements;
  };

  return <>{createTextWithUnderline(text)}</>;
};

const journal_publications: PublicationsType[] = [
  {
    id: "acd-cscw25",
    title:
      "“I feel lonely when they stop chatting”: Exploring Auditory Comment Display for Eyes-Free Social-Viewing Experience in Online Music Videos",
    authors: "Yuki Abe, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2025,
    where: "Proc. ACM Hum.-Comput. Interact",
    whereDetail:
      "9, 2, Article CSCW106 (April 2025) 30 pages (to appear at CSCW 2025)",
    doi: "https://doi.org/10.1145/3711004",
  },
  {
    id: "interaction22",
    title:
      "ストリームライブチャット入力を想定した半透明ダブルフリックキーボードの検証",
    titleEn:
      "A Study on Semi-transparent Double Flick Keyboard for Live Chat in Live-streaming",
    authors: "阿部 優樹, 崔 明根, 坂本 大介, 小野 哲雄",
    authorsEn: "Yuki Abe, Myungguen Choi, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2022,
    where: "情報処理学会論文誌",
    whereEn: "Information Processing Society of Japan (IPSJ) Journal",
    whereDetail: "64(2), 352-365",
    doi: "https://doi.org/10.20729/00224248",
  },
];
const conference_publications: PublicationsType[] = [
  {
    id: "RunSight24",
    title:
      "“I can run at night!”: Using Augmented Reality to Support Nighttime Guided Running for Low-vision Runners",
    authors:
      "Yuki Abe, Keisuke Matsushima, Kotaro Hara, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2025,
    where:
      "In CHI Conference on Human Factors in Computing Systems (CHI ’25), April 26–May 01, 2025, Yokohama, Japan",
    whereDetail: "ACM, New York, NY, USA, 20 pages",
    doi: "https://doi.org/10.1145/3706598.3714284",
    award: "Honorable Mention recognition",
  },
  {
    id: "HandheldHMD24",
    title:
      "Understanding Usability of VR Pointing Methods with a Handheld-style HMD for Onsite Exhibitions",
    authors:
      "Yuki Abe*, Kan Kusakabe*, Myungguen Choi*, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2025,
    where:
      "In CHI Conference on Human Factors in Computing Systems (CHI ’25), April 26–May 01, 2025, Yokohama, Japan",
    whereDetail: "ACM, New York, NY, USA, 21 pages. *—equal contribution",
    doi: "https://doi.org/10.1145/3706598.3713874",
    award: "Honorable Mention recognition",
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
    id: "FollowYourFingerLBW25",
    title: "Exploring Auditory Hand Guidance for Eyes-free 3D Path Tracing",
    authors: "Yuki Abe, Kotaro Hara, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2025,
    where:
      "In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’25), April 26–May 01, 2025, Yokohama, Japan",
    whereDetail: "ACM, New York, NY, USA, 10 pages",
    doi: "https://doi.org/10.1145/3706599.3719761",
    poster: "/poster/chi25_poster.pdf",
  },
  {
    id: "Temaneki24",
    title:
      "Temaneki: Map-Based Collaboration Tool for Consensus-Building in Student-Run Festival Management Teams",
    authors: "Yuki Abe, Hikaru Tsujiguchi, Daisuke Sakamoto, and Tetsuo Ono",
    year: 2024,
    where:
      "In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’24), May 11– 16, 2024, Honolulu, HI, USA",
    whereDetail: "ACM, New York, NY, USA, 8 pages",
    doi: "https://doi.org/10.1145/3613905.3651013",
    poster: "/poster/chiea24-541-poster.pdf",
  },
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
    award: "学生奨励賞",
  },
  {
    id: "WISS-OMEME",
    title: "OMEME:非装着状態のHMDを用いたコンパニオンロボットの開発",
    authors: "阿部 優樹，鈴木 湧登，坂本 大介，小野 哲雄",
    year: 2023,
    where: "WISS 2023",
    whereDetail:
      "第31回インタラクティブシステムとソフトウェアに関するワークショップ",
    doi: "https://www.wiss.org/WISS2023Proceedings/data/1-A10.pdf",
    invisibleInEn: true,
    award: "対話発表賞",
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
    <Stack spacing={1}>
      <Typography
        pt={0.5}
        variant="subtitle1"
        borderBottom={"2px solid #e0e0e0"}
      >
        {En ? "Refereed Journal Papers" : "論文誌"}
      </Typography>
      <ol
        style={{
          paddingLeft: "25px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {journal_publications.map((publication, index) => (
          <li key={publication.id + publication.authors + publication.where}>
            <Typography
              key={publication.id}
              sx={{ m: index == 0 ? "0px" : "4px 0px" }}
              variant="body1"
            >
              {/* {En
                ? publication.authorsEn ?? publication.authors
                : // : publication.authors + ". " + publication.year + ""}
                  publication.authors} */}
              <UnderlineAuthorName
                text={
                  En
                    ? publication.authorsEn ?? publication.authors
                    : publication.authors
                }
              />
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
              {publication.award && (
                <>
                  <span style={{ fontWeight: "bolder", color: "#347DA8" }}>
                    {publication.award}
                  </span>
                  {". "}
                </>
              )}
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
      <Typography variant="subtitle1" borderBottom={"2px solid #e0e0e0"}>
        {En ? "Conference Proceedings" : "国内・国際会議（査読有）"}
      </Typography>
      <ol
        style={{
          paddingLeft: "25px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {conf_publications.map((publication, index) => (
          <li key={publication.id + publication.authors + publication.where}>
            <Typography
              key={publication.id}
              sx={{ m: index == 0 ? "0px" : "4px 0px" }}
              variant="body1"
            >
              {/* {publication.authors} */}
              <UnderlineAuthorName
                text={
                  En
                    ? publication.authorsEn ?? publication.authors
                    : publication.authors
                }
              />
              {". "}
              <span style={{ fontWeight: "bolder" }}>{publication.title}</span>
              {". "}
              {/* <span>In </span> */}
              <span>{publication.where}</span>.
              <span> {publication.whereDetail}</span>
              {". "}
              {publication.award && (
                <>
                  <span style={{ fontWeight: "bolder", color: "#347DA8" }}>
                    {publication.award}
                  </span>
                  {". "}
                </>
              )}
              {publication.doi ? (
                <>
                  {" ["}
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
        variant="subtitle1"
        borderBottom={"2px solid #e0e0e0"}
        display={dem_publications.length > 0 ? undefined : "none"}
      >
        {En ? "Poster Proceedings" : "ポスター・デモ発表等"}
      </Typography>
      <ol
        style={{
          paddingLeft: "25px",
          // fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        {dem_publications
          .filter((publication) => (En ? !publication.invisibleInEn : true))
          .map((publication) => (
            <li key={publication.id + publication.authors + publication.where}>
              <Typography
                key={publication.id}
                sx={{ m: "4px 0px" }}
                variant="body1"
              >
                <UnderlineAuthorName
                  text={
                    En
                      ? publication.authorsEn ?? publication.authors
                      : publication.authors
                  }
                />
                {". "}
                <span style={{ fontWeight: "bolder" }}>
                  {publication.title}
                </span>
                {". "}
                {/* <span>In </span> */}
                <span>{publication.where}</span>.
                <span> {publication.whereDetail}</span>
                {". "}
                {publication.award && (
                  <>
                    <span style={{ fontWeight: "bolder", color: "#347DA8" }}>
                      {publication.award}
                    </span>
                    {". "}
                  </>
                )}
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
                {publication.poster ? (
                  <>
                    {" ["}
                    <Link
                      href={publication.poster ?? "/"}
                      sx={{ wordWrap: "break-word" }}
                      display={publication.poster ? undefined : "none"}
                    >
                      {/* doiにdoiという文字列が入っていればDOI, それ以外はURL */}
                      {"Poster"}
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
