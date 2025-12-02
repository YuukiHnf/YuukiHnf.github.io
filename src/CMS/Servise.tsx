import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type ServiseType = {
  title: string;
  titleEn?: string;
  date: string;
  url?: string;
};

const awards: ServiseType[] = [
  {
    title: "北海道ITクリエータ発掘・育成事業 新雪プログラム メンター",
    titleEn:
      "Mentor, Shinsetsu Program, Hokkaido IT Human Resources Development Project",
    date: "2023-",
    url: "https://shinsetsu.hokkaido.jp/koubo",
  },
  {
    title: "外部査読者 CHI 2024 LBWs, CHI 2025, CHI 2025 LBWs, CHI 2026",
    titleEn:
      "External Reviewer of CHI 2024 LBWs, CHI 2025, CHI 2025 LBWs, CHI 2026",
    date: "2024-",
  },
  {
    title: "WISS 2025 北大エクスカーション 運営",
    titleEn: "Organizer Member of WISS 2025 Hokudai Excursion",
    date: "2025",
    url: "https://hci-lab.jp/wiss2025-excursion/",
  },
  {
    title: "CHI勉強会 幹事団/学生ボランティア",
    titleEn:
      "Organizer Member of SIGCHI Japan CHI Study Group 2023, 2024, 2025",
    date: "2023-",
    url: "https://sigchi.jp/seminar/chi2025/",
  },
];
type Props = {
  isEnglish?: boolean;
};
const Servise = ({ isEnglish = false }: Props) => {
  return (
    <Stack spacing={1}>
      {awards.map((award) => (
        <div key={award.title}>
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
            {isEnglish ? award.titleEn ?? award.title : award.title}
            {award.url && (
              <>
                {" ["}
                <Link
                  href={award.url}
                  sx={{
                    wordWrap: "break-word",
                  }}
                >
                  URL
                </Link>
                {"]"}
              </>
            )}
          </Typography>
        </div>
      ))}
    </Stack>
  );
};

export default Servise;
