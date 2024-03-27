import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type AwardType = {
  title: string;
  date: string;
  link: string;
};

const awards: AwardType[] = [
  {
    title:
      "北海道大学 情報科学院 情報理工学コース 修士総代/学生奨励賞(精密学会学生奨励賞）",
    link: "/",
    date: "2024/03/25",
  },
  {
    title: "北海道大学 令和5年 えるむ賞",
    link: "https://www.hokudai.ac.jp/gakusei/campus-life/campus/commendation.html",
    date: "2024/03/19",
  },
  {
    title: "WISS 2023 対話発表賞（一般投票）",
    link: "https://www.wiss.org/WISS2023/",
    date: "2024/12/01",
  },
  {
    title: "2022年度 未踏IT人材発掘・育成事業 「スーパークリエータ」認定",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
    date: "2023/05/26",
  },
  {
    title: "北海道大学 ビジネスモデル開発チャレンジプログラム 採択「temaneki」",
    link: "https://hx.mcip.hokudai.ac.jp/program/451",
    date: "2023/04/01",
  },
  {
    title:
      "北大テックガレージ(HUTG) Spring Founders Program2 採択(2022年2月-3月)",
    link: "https://cosmos.gfc.hokudai.ac.jp/hkd-startup-support/sfp",
    date: "2023/02/01",
  },
  {
    title: "toio SDK for Unity賞 bytoio™ “てれコチャ” @ヒーローズ・リーグ2021",
    link: "https://cosmos.gfc.hokudai.ac.jp/news/1194",
    date: "2023/01/11",
  },
  {
    title:
      "北大テックガレージ(HUTG) Spring Founders Program1 採択(2022年8月-9月)",
    link: "https://u4u.oeic.hokudai.ac.jp/en/6146/",
    date: "2023/08/01",
  },
];
const Award = () => {
  return (
    <Stack spacing={1}>
      {awards.map((award) => (
        <div key={award.title + award.date + award.link}>
          <div>
            <Typography key={award.title} variant="caption">
              {award.date}
            </Typography>
          </div>
          <Link
            href={award.link}
            sx={{
              color: theme.palette.text.primary,
              textDecorationColor: "transparent",
            }}
          >
            {award.title}
          </Link>
        </div>
      ))}
    </Stack>
  );
};

export default Award;
