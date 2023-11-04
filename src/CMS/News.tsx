import theme from "@/styles/GlobalTheme";
import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

type NewsType = {
  title: string;
  date: string;
  link?: string;
};

const news: NewsType[] = [
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

const News = () => {
  const router = useRouter();
  return (
    <Box width={"100%"}>
      {news.map((value) => (
        <div>
          <div>
            <Typography key={value.date + value.title} variant="caption">
              {value.date}
            </Typography>
          </div>
          <Typography variant="body1">
            {value.title}
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
          </Typography>
        </div>
      ))}
    </Box>
  );
};

export default News;
