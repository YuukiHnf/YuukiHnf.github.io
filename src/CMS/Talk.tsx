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
    link: "",
    date: "2025/04-2027/03",
  },
];
type Props = {
  En?: boolean;
};
const Talk = ({ En = false }: Props) => {
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

export default Talk;
