import CMSListItem from "@/components/CMSListItem";
import { talks } from "../data/talks";
import React from "react";

type Props = {
  En?: boolean;
};

const Talk = ({ En = false }: Props) => {
  return <CMSListItem items={talks} isEnglish={En} />;
};

export default Talk;