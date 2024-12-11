import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type GrantType = {
  title: string;
  titleEn?: string;
  date: string;
  link: string;
  invisibleInEn?: boolean;
};

const awards: GrantType[] = [
  {
    title: "2024年度 立石科学技術振興財団 (C)",
    titleEn: "The Tateisi Science and Technology Foundation, 2024, (C)",
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
    titleEn: "Information-technology Promotion Agency (IPA) MITOU Program 2022",
    link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
    date: "2022/06/20",
  },
];
type Props = {
  En?: boolean;
};
const Grant = ({ En = false }: Props) => {
  const conf_awards = En ? awards.filter((pub) => !pub.invisibleInEn) : awards;
  return (
    <Stack spacing={1}>
      {conf_awards.map((award) => (
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
            {En ? award.titleEn ?? award.title : award.title}
          </Link>
        </div>
      ))}
    </Stack>
  );
};

export default Grant;
