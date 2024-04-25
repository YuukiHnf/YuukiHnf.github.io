import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type GrantType = {
  title: string;
  date: string;
  link: string;
};

const awards: GrantType[] = [
  {
    title: "2024年度 立石科学技術振興財団研究助成(C)",
    link: "https://www.tateisi-f.org/news/2024-04-24",
    date: "2024/04/01",
  },
  {
    title: "Hokkaido University EXEX Doctoral Fellowship ",
    link: "https://sites.google.com/eis.hokudai.ac.jp/exexphd-fellow/",
    date: "2024/04/01",
  },
  {
    title:
      "2022年度 未踏IT人材発掘・育成事業「祭り運営を支援するアプリケーションの開発」",
    link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
    date: "2022/06/20",
  },
];
const Grant = () => {
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

export default Grant;
