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
    title: "独立行政法人日本学術振興会 特別研究員-DC2",
    titleEn:
      "Research Fellow of the Japan Society for the Promotion of Science (DC2)",
    link: "https://www.jsps.go.jp/file/storage/j-pd/data/list_of_recruits/R7_DC2_saiyou.pdf",
    date: "2025/04-2027/03",
  },
  {
    title: "立石科学技術振興財団 (C)",
    titleEn: "Tateisi Science and Technology Foundation (C)",
    link: "https://www.tateisi-f.org/news/2024-04-24",
    date: "2024/04-2027/03",
  },
  {
    title: "北海道大学 EXEX博士人材フェローシップ",
    titleEn: "Hokkaido University EXEX Doctoral Fellowship ",
    link: "https://sites.google.com/eis.hokudai.ac.jp/exexphd-fellow/",
    date: "2024/04-2025/03",
  },
  {
    title: "2022年度 未踏IT人材発掘・育成事業",
    titleEn: "Information-technology Promotion Agency (IPA) MITOU Program 2022",
    link: "https://www.ipa.go.jp/jinzai/mitou/it/2022/gaiyou_sd-3.html",
    date: "2022/06-2023/03",
  },
  {
    title: "北大テックガレージ Program 2",
    titleEn: "Hokkaido University Tech Garage Scholarship Program 2",
    link: "https://hokudai-hutg.com/",
    date: "2022/02-2022/03",
  },
  {
    title: "北大テックガレージ Program 1",
    titleEn: "Hokkaido University Tech Garage Scholarship Program 1",
    link: "https://hokudai-hutg.com/",
    date: "2021/08-2021/09",
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
        </div>
      ))}
    </Stack>
  );
};

export default Grant;
