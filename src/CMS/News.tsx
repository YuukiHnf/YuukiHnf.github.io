import SubTitle from "@/components/Title/SubTitle";
import theme from "@/styles/GlobalTheme";
import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

type NewsType = {
  title: string;
  date: string;
  link?: string;
};

const news: NewsType[] = [
  {
    title: "CHI2025に論文が2本採択されました。",
    date: "2025/02/20",
    link: "",
  },
  {
    title: "DC2に採択されました。",
    date: "2025/02/20",
    link: "",
  },
  {
    title: "CSCWに採択されました。",
    date: "2024/12/10",
    link: "https://doi.org/10.1145/3711004",
  },
  {
    title: "SMUで半年間の研究活動が始まりました。",
    date: "2024/09/12",
    link: "https://smuhci.com/",
  },
  {
    title: "CHI勉強会で学生スタッフに参加しました。",
    date: "2024/06/29",
    link: "https://sigchi.jp/seminar/chi2024/",
  },
  {
    title: "CHI2024でLBWを発表しました。",
    date: "2024/05/13",
    link: "https://programs.sigchi.org/chi/2024/my-schedule/content/151083",
  },
  {
    title: "立石研究助成(C)に採択していただきました。",
    date: "2024/04/01",
    link: "https://www.tateisi-f.org/research/c/",
  },
  {
    title: "北海道大学 令和5年 えるむ賞を受賞しました。",
    date: "2024/03/19",
    link: "https://www.hokudai.ac.jp/gakusei/campus-life/campus/commendation.html",
  },
  {
    title: "SeamlessにOMEMEが紹介されました。",
    date: "2023/12/28",
    link: "https://twitter.com/shiropen2/status/1740162030924071085",
  },
  {
    title: "HCI Advent Calendar 2023に記事を公開しました。",
    date: "2023/12/07",
    link: "https://note.com/yuki_abe6/n/ncf2972c3ac1e",
  },
  {
    title: "WISS2023で対話発表賞をいただきました。",
    date: "2023/12/01",
    link: "https://www.wiss.org/WISS2023/",
  },
  {
    title: "CHI勉強会2023 学生ボランティアに参加しました。",
    date: "2023/06/24",
    link: "https://sigchi.jp/seminar/chi2023/",
  },
  {
    title: "2022年度 未踏事業の活動が紹介されました。",
    date: "2023/05/26",
    link: "https://note.com/ipsj/n/n42741e62e15c",
  },
  {
    title:
      "2022年度 未踏IT人材発掘・育成事業 「スーパークリエータ」に認定されました。",
    date: "2023/05/26",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
  },
  {
    title:
      "北海道大学 ビジネスモデル開発チャレンジプログラムに「temaneki」が採択されました。",
    date: "2023/05/01",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
  },
  {
    title: "未踏会議2023で「temaneki」を発表しました。",
    date: "2023/03/10",
    link: "https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/2023/",
  },
  {
    title: "北海道新聞で「temaneki」が紹介されました。",
    date: "2023/03/10",
    link: "https://www.hokkaido-np.co.jp/article/769908",
  },
];

type Props = {
  isDisplay?: boolean;
};

const NewsDesktop = () => {
  const router = useRouter();
  const [isExpand, setIsExpand] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <SubTitle title={"News"} />
      <Box width={"100%"}>
        {news
          .filter((_, i) => (isExpand ? true : i < 3))
          .map((value) => (
            <div key={value.date + value.title}>
              <div>
                <Typography key={value.date + value.title} variant="caption">
                  {value.date}
                </Typography>
              </div>
              <Typography variant="body1">{value.title}</Typography>
              {value.link && (
                <Typography
                  variant="caption"
                  component={"a"}
                  fontWeight={"bold"}
                  onClick={() => {
                    value.link && router.push(value.link);
                  }}
                >
                  {" "}
                  詳しくはこちら
                </Typography>
              )}
            </div>
          ))}
        <Box display={"flex"} justifyContent={"right"}>
          <Link
            sx={{ color: "GrayText", textDecorationColor: "transparent" }}
            pt={1}
            onClick={() => setIsExpand((ptr) => !ptr)}
          >
            {isExpand ? "閉じる" : "全てを見る"}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsDesktop;
