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

const talks: GrantType[] = [
  {
    title: "市民公開講座 / 横浜市MICE次世代育成事業「CHI 2025 シンポジウム」",
    titleEn: "CHI 2025 Symposium, Citizen Open Lecture in Yokohama City",
    link: "https://sigchi.jp/symposium/chi2025_symposium/",
    date: "2023/03/10",
  },
  {
    title: "未踏会議 2023, フレッシュ ライトニングトーク",
    titleEn: "MITOU CONFERENCE 2023, Fresh Lightning Talk",
    link: "https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/2023/",
    date: "2023/03/10",
  },
];
type Props = {
  En?: boolean;
};
const Talk = ({ En = false }: Props) => {
  const conf_talks = En ? talks.filter((pub) => !pub.invisibleInEn) : talks;
  return (
    <Stack spacing={1}>
      {conf_talks.map((award) => (
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

export default Talk;
