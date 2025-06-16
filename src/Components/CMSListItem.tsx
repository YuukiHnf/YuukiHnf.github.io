import theme from "@/styles/GlobalTheme";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export type CMSItem = {
  title: string;
  titleEn?: string;
  date: string;
  link?: string;
  invisibleInEn?: boolean;
};

type Props = {
  items: CMSItem[];
  isEnglish?: boolean;
  linkText?: string;
};

const CMSListItem = ({ 
  items, 
  isEnglish = false, 
  linkText = "URL" 
}: Props) => {
  const filteredItems = isEnglish 
    ? items.filter((item) => !item.invisibleInEn) 
    : items;

  return (
    <Stack spacing={1}>
      {filteredItems.map((item) => (
        <div key={item.title + item.date + (item.link || '')}>
          <div>
            <Typography variant="caption">
              {item.date}
            </Typography>
          </div>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              textDecorationColor: "transparent",
            }}
          >
            {isEnglish ? item.titleEn ?? item.title : item.title}
            {item.link && (
              <>
                {" ["}
                <Link
                  href={item.link}
                  sx={{
                    wordWrap: "break-word",
                  }}
                >
                  {linkText}
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

export default CMSListItem;