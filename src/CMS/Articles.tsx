import CMSListItem from "@/components/CMSListItem";
import { articles } from "../data/article";
import React from "react";

type Props = {
  En?: boolean;
};

const Article = ({ En = false }: Props) => {
  return <CMSListItem items={articles} isEnglish={En} />;
};

export default Article;
