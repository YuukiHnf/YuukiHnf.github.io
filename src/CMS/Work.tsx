import CMSListItem from "@/components/CMSListItem";
import { grants } from "../data/grants";
import React from "react";
import { works } from "src/data/works";

type Props = {
  En?: boolean;
};

const Work = ({ En = false }: Props) => {
  return <CMSListItem items={works} isEnglish={En} />;
};

export default Work;
