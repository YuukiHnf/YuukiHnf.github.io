import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type AwardType = {
  title: string;
  titleEn?: string;
  date: string;
  link?: string;
  invisibleInEn?: boolean;
};

const awards: AwardType[] = [
  {
    title:
      "Two papers have been selected for Honorable Mention Awards at CHI 2025!",
    date: "2025/03/27",
  },
  {
    title: "Two papers and one LBW have been accepted to CHI2025!",
    date: "2025/03/05",
  },
  {
    title: "One paper has been accepted to PACMHCI (CSCW2025)!",
    date: "2024/12/10",
  },
  // {
  //   title:
  //     "I start my visiting student life at Singapore Management University!",
  //   date: "2024/09/12",
  // },
];
type Props = {
  En?: boolean;
};
const News_en = ({ En = false }: Props) => {
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

export default News_en;
