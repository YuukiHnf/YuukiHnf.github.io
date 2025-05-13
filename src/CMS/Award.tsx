import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type AwardType = {
  title: string;
  titleEn?: string;
  date: string;
  link: string;
  invisibleInEn?: boolean;
};

const awards: AwardType[] = [
  {
    title:
      "Honorable Mention Award at ACM CHI 2025 (10.1145/3706598.3714284)",
    titleEn:
      "Honorable Mention Award at ACM CHI 2025 (10.1145/3706598.3714284)",
    link: "https://programs.sigchi.org/chi/2025/program/content/189122",
    date: "2025/03/27",
  },
  {
    title:
      "Honorable Mention Award at ACM CHI 2025 (10.1145/3706598.3713874)",
    titleEn:
      "Honorable Mention Award at ACM CHI 2025 (10.1145/3706598.3713874)",
    link: "https://programs.sigchi.org/chi/2025/program/content/189044",
    date: "2025/03/27",
  },
  {
    title:
      "北海道大学大学院 情報科学院 情報理工学専攻 情報理工学コース 学生奨励賞",
    link: "https://www.ist.hokudai.ac.jp/news/n2404.html",
    date: "2024/03/25",
    invisibleInEn: true,
  },
  {
    title: "北海道大学 令和5年 えるむ賞",
    titleEn: "Hokkaido University ELM AWARD",
    link: "https://www.hokudai.ac.jp/gakusei/campus-life/campus/commendation.html",
    date: "2024/03/19",
  },
  {
    title: "WISS 2023 対話発表賞（一般投票）",
    titleEn: "WISS 2023 Demonstration Award (People Chose)",
    link: "https://www.wiss.org/WISS2023/",
    date: "2024/12/01",
  },
  {
    title: "2022年度 未踏IT人材発掘・育成事業 「スーパークリエータ」認定",
    titleEn: "MITOU PROGRAM 2022 Super Creator",
    link: "https://www.meti.go.jp/press/2023/05/20230526002/20230526002.html",
    date: "2023/05/26",
  },
  {
    title: "北海道大学 ビジネスモデル開発チャレンジプログラム 採択「temaneki」",
    link: "https://hx.mcip.hokudai.ac.jp/program/451",
    date: "2023/04/01",
    invisibleInEn: true,
  },
  // {
  //   title:
  //     "北大テックガレージ（HUTG）Spring Founders Program2 採択(2022年2月-3月)",
  //   link: "https://cosmos.gfc.hokudai.ac.jp/hkd-startup-support/sfp",
  //   date: "2023/02/01",
  //   invisibleInEn: true,
  // },
  {
    title: "toio SDK for Unity賞 bytoio™ “てれコチャ” @ヒーローズ・リーグ2021",
    link: "https://cosmos.gfc.hokudai.ac.jp/news/1194",
    date: "2022/01/11",
    invisibleInEn: true,
  },
  // {
  //   title:
  //     "北大テックガレージ（HUTG）Spring Founders Program1 採択(2022年8月-9月)",
  //   link: "https://u4u.oeic.hokudai.ac.jp/en/6146/",
  //   date: "2023/08/01",
  //   invisibleInEn: true,
  // },
];
type Props = {
  En?: boolean;
};
const Award = ({ En = false }: Props) => {
  const awards_view = En
    ? awards.filter((award) => !award.invisibleInEn)
    : awards;
  return (
    <Stack spacing={1}>
      {awards_view.map((award) => (
        <div key={award.title + award.date + award.link}>
          <div>
            <Typography key={award.title} variant="caption">
              {award.date}
            </Typography>
          </div>
          {
            <Typography
              sx={{
                color: theme.palette.text.primary,
                textDecorationColor: "transparent",
              }}
            >
              {En ? award.titleEn ?? award.title : award.title}
              {award.link ? (
                <>
                  {" ["}
                  <Link
                    href={award.link}
                    sx={{
                      wordWrap: "break-word",
                    }}
                    display={award.link ? undefined : "none"}
                  >
                    URL
                  </Link>
                  {"]"}
                </>
              ) : null}
            </Typography>
          }
        </div>
      ))}
    </Stack>
  );
};

export default Award;
