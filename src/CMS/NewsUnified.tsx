import SubTitle from "@/components/Title/SubTitle";
import theme from "@/styles/GlobalTheme";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

type NewsItem = {
  title: string;
  titleEn?: string;
  date: string;
  link?: string;
  invisibleInEn?: boolean;
};

// Japanese news data
const newsJa: NewsItem[] = [
  {
    title: "ノルウェーで開催されるACM CSCW 2025で研究を発表します。",
    titleEn:
      "I am going to present our paper at CSCW 2025. See you in Bergen, Norway!",
    date: "2025/10/18",
  },
  {
    title:
      "CHI2025で発表する2本のFull PaperがHonorable Mentionに選ばれました。",
    titleEn:
      "Two papers have been selected for Honorable Mention Awards at CHI 2025!",
    date: "2025/03/27",
    link: "",
  },
  {
    title: "CHI2025にFull Paperが2本とLBWが1本採択されました。",
    titleEn: "Two papers and one LBW have been accepted to CHI2025!",
    date: "2025/03/05",
    link: "",
  },
  {
    title: "DC2に採用されました。",
    date: "2025/02/20",
    link: "",
    invisibleInEn: true,
  },
  {
    title: "CSCWにPaperが受理されました。",
    titleEn: "One paper has been accepted to PACMHCI (CSCW2025)!",
    date: "2024/12/10",
  },
  {
    title: "SMUで半年間の研究活動が始まりました。",
    date: "2024/09/12",
    link: "https://smuhci.com/",
    invisibleInEn: true,
  },
  {
    title: "CHI勉強会で学生スタッフに参加しました。",
    date: "2024/06/29",
    link: "https://sigchi.jp/seminar/chi2024/",
    invisibleInEn: true,
  },
  {
    title: "CHI2024でLBWを発表しました。",
    date: "2024/05/13",
    link: "https://programs.sigchi.org/chi/2024/my-schedule/content/151083",
    invisibleInEn: true,
  },
  {
    title: "立石研究助成(C)に採択していただきました。",
    date: "2024/04/01",
    link: "https://www.tateisi-f.org/research/c/",
    invisibleInEn: true,
  },
  {
    title: "北海道大学 令和5年 えるむ賞を受賞しました。",
    date: "2024/03/19",
    link: "https://www.hokudai.ac.jp/gakusei/campus-life/campus/commendation.html",
    invisibleInEn: true,
  },
  {
    title: "SeamlessにOMEMEが紹介されました。",
    date: "2023/12/28",
    link: "https://twitter.com/shiropen2/status/1740162030924071085",
    invisibleInEn: true,
  },
  {
    title: "HCI Advent Calendar 2023に記事を公開しました。",
    date: "2023/12/07",
    link: "https://note.com/yuki_abe6/n/ncf2972c3ac1e",
    invisibleInEn: true,
  },
  {
    title: "WISS2023で対話発表賞をいただきました。",
    date: "2023/12/01",
    link: "https://www.wiss.org/WISS2023/",
    invisibleInEn: true,
  },
  {
    title: "CHI勉強会2023 学生ボランティアに参加しました。",
    date: "2023/06/24",
    link: "https://sigchi.jp/seminar/chi2023/",
    invisibleInEn: true,
  },
  {
    title: "2022年度 未踏事業の活動が紹介されました。",
    date: "2023/05/26",
    link: "https://note.com/ipsj/n/n42741e62e15c",
    invisibleInEn: true,
  },
  {
    title:
      "2022年度 未踏IT人材発掘・育成事業 「スーパークリエータ」に認定されました。",
    date: "2023/05/26",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
    invisibleInEn: true,
  },
  {
    title:
      "北海道大学 ビジネスモデル開発チャレンジプログラムに「temaneki」が採択されました。",
    date: "2023/05/01",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
    invisibleInEn: true,
  },
  {
    title: "未踏会議2023で「temaneki」を発表しました。",
    date: "2023/03/10",
    link: "https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/2023/",
    invisibleInEn: true,
  },
  {
    title: "北海道新聞で「temaneki」が紹介されました。",
    date: "2023/03/10",
    link: "https://www.hokkaido-np.co.jp/article/769908",
    invisibleInEn: true,
  },
];

type Props = {
  isEnglish?: boolean;
  showTitle?: boolean;
  expandable?: boolean;
};

const NewsUnified = ({
  isEnglish = false,
  showTitle = true,
  expandable = true,
}: Props) => {
  const router = useRouter();
  const [isExpand, setIsExpand] = useState(false);

  // Filter news based on language
  const filteredNews = isEnglish
    ? newsJa.filter((item) => !item.invisibleInEn)
    : newsJa;

  // Limit display based on expand state
  const displayNews = expandable
    ? filteredNews.filter((_, i) => (isExpand ? true : i < 3))
    : filteredNews;

  const linkText = isEnglish ? "[More]" : "詳しくはこちら";
  const expandText = isEnglish
    ? isExpand
      ? "Show less"
      : "Show all"
    : isExpand
    ? "閉じる"
    : "全てを見る";

  return (
    <Box display={"flex"} flexDirection={"column"}>
      {showTitle && <SubTitle title={"News"} />}
      <Stack spacing={1}>
        {displayNews.map((item) => (
          <div key={item.date + item.title}>
            <div>
              <Typography variant="caption">{item.date}</Typography>
            </div>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                textDecorationColor: "transparent",
              }}
              component={item.link ? "a" : "span"}
              onClick={
                item.link ? () => router.push(item.link as string) : undefined
              }
              href={item.link ? item.link : undefined}
            >
              {isEnglish ? item.titleEn ?? item.title : item.title}
            </Typography>
          </div>
        ))}
      </Stack>
      {expandable && filteredNews.length > 3 && (
        <Box display={"flex"} justifyContent={"right"}>
          <Link
            sx={{ color: "GrayText", textDecorationColor: "transparent" }}
            pt={1}
            onClick={() => setIsExpand((prev) => !prev)}
          >
            {expandText}
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default NewsUnified;
