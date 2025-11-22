import CMSListItem from "@/components/CMSListItem";
import { grants } from "../data/grants";
import React from "react";
import { education } from "src/data/education";

type Props = {
  En?: boolean;
};

const Education = ({ En = false }: Props) => {
  return <CMSListItem items={education} isEnglish={En} />;
};

export default Education;
