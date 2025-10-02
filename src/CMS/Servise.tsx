import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
type ServiseType = {
  title: string;
  date: string;
};

const awards: ServiseType[] = [
  {
    title:
      "External Reviewer of CHI 2024 LBWs, CHI 2025, CHI 2025 LBWs, CHI 2026.",
    date: "2024-",
  },
  {
    title:
      "Student Volunteer of Japan ACM SIGCHI Chapter's CHI Study Group 2023, 2024, 2025.",
    date: "2023-",
  },
];
type Props = {
  En?: boolean;
};
const Servise = ({ En = false }: Props) => {
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
            {award.title}
          </Typography>
        </div>
      ))}
    </Stack>
  );
};

export default Servise;
