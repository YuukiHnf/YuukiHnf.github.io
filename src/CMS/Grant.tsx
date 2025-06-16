import CMSListItem from "@/components/CMSListItem";
import { grants } from "../data/grants";
import React from "react";

type Props = {
  En?: boolean;
};

const Grant = ({ En = false }: Props) => {
  return <CMSListItem items={grants} isEnglish={En} />;
};

export default Grant;